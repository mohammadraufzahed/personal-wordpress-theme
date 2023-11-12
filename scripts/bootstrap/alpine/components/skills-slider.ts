import KeenSlider, { KeenSliderInstance } from "keen-slider";

import Alpine from "alpinejs";

Alpine.data("skillsSlider", () => ({
  slider: null,

  init() {
    this.slider = new KeenSlider("#skills-slider", {
      loop: true,
      slides: {
        origin: "center",
      },
      breakpoints: {
        "(min-width: 0px)": {
          slides: {
            perView: 2,
          },
        },
        "(min-width: 530px)": {
          slides: {
            perView: 3,
          },
        },
        "(min-width: 712px)": {
          slides: {
            perView: 4,
          },
        },
        "(min-width: 900px)": {
          slides: {
            perView: 5,
          },
        },
        "(min-width: 1198px)": {
          slides: {
            perView: 6,
          },
        },
        "(min-width: 1400px)": {
          slides: {
            perView: 7,
          },
        },
      },
      created(slider: KeenSliderInstance) {
        let interval: any;
        let timer = 2000;
        function autoplay() {
          slider.next();
        }
        interval = setInterval(autoplay, timer);
        slider.container.addEventListener("mouseenter", () => {
          clearInterval(interval);
        });
        slider.container.addEventListener("mouseleave", () => {
          interval = setInterval(autoplay, timer);
        });
      },
    });
  },
  destroy() {
    if (this.slider) this.slider.destroy();
  },
}));
