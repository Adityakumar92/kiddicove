export const trackPageView = (url: string) => {

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("config", "AW-17729194955", {
      page_path: url,
    });
  }
};

export const trackEvent = (eventName: string, params = {}) => {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
};

// export const trackConversion = () => {
//   if (typeof window !== "undefined" && typeof window.gtag === "function") {
//     window.gtag("event", "conversion", {
//       send_to: "AW-17729194955/hhYVCILQzMMbEMuX-IVC",
//     });
//   }
// };

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}