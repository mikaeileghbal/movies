import { useCallback } from "react";

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
      }).observe(node);
    },
    [callback]
  );

  return { scrollObserver };
}
