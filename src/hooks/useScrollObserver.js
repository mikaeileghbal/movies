import { useCallback } from "react";

let options = {
  rootMargin: "0px 0px 300px 0px",
  threshold: 1.0,
};

export default function useScrollObserver(callback) {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio > 0) {
            console.log("Observed");
            callback();
          }
        });
      }, options).observe(node);
    },
    [callback]
  );

  return { scrollObserver };
}
