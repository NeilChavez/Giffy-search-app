import { useState, useEffect, useRef } from "react";

export function useIsNearToScreen({
  distance = "100px",
  once = true,
  externalRef,
} = {}) {
  const [isNearToScreen, setIsNearToScreeen] = useState(false);

  const fromRef = useRef();

  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : fromRef.current;
    console.log(element)

    const options = {
      rootMargin: distance,
    };
    const callback = (entries, observer) => {
      const element = entries[0];

      if (element.isIntersecting) {
        setIsNearToScreeen(true);
        once && observer.disconnect();
      } else {
        setIsNearToScreeen(false);
      }
    };
    // for a browser that doesn't support the Intersection Observer API
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(callback, options);
      element && observer.observe(element);
    });

    return () => {
      observer && observer.disconnect();
    };
  }, [distance, once, externalRef]);

  return { isNearToScreen, fromRef };
}
