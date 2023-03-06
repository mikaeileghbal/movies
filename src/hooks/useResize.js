import { useEffect, useState } from "react";

const mediaQueryList = {
  xs: "(min-width:0)",
  sm: "(min-width:600px)",
  md: "(min-width:720px)",
  lg: "(min-width:1024px)",
};

const useResize = () => {
  const [groupSize, setGroupSize] = useState(5);

  console.log(groupSize);

  const resize = (e) => {
    console.log("resized");
    let mqxs = window.matchMedia(mediaQueryList.xs);
    console.log(mqxs.matches);
    if (mqxs.matches) setGroupSize(3);

    let mqsm = window.matchMedia(mediaQueryList.sm);
    console.log(mqsm.matches);
    if (mqsm.matches) setGroupSize(4);

    let mqlg = window.matchMedia(mediaQueryList.lg);
    console.log(mqlg.matches);
    if (mqlg.matches) setGroupSize(5);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  useEffect(() => {
    console.log("groupsize:", groupSize);
  }, [groupSize]);

  return { groupSize };
};

export default useResize;
