import Alpinejs from "alpinejs";

declare global {
  interface Window {
    Alpinejs: typeof Alpinejs;
  }
}

export {};
