import KeenSlider from "keen-slider";
import Alpinejs from "alpinejs";

declare global {
  interface Window {
    Alpinejs: typeof Alpinejs;
    KeenSlider: typeof KeenSlider;
  }
}

export {};
