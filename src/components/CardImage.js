import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export function CardImage({ src }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <LazyLoadImage
      className={loaded ? "" : "lazy-load"}
      src={src}
      alt={src}
      style={{ position: "absolute", top: 0, left: 0 }}
      width="100%"
      height="100%"
      onLoad={() => setLoaded(true)}
    />
  );
}
