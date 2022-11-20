import { useState, useEffect, useRef } from "react";

export function useIsNearToScreen({ distance = "100px" } = {}) {
  const [isNearToScreen, setIsNearToScreeen] = useState(false);

  const element = useRef();

  useEffect(() => {
    let observer;
    const options = {
      rootMargin: distance,
    };
    const callback = (entries, observer) => {
      const element = entries[0];

      if (element.isIntersecting) {
        setIsNearToScreeen(true);
        observer.disconnect();
      }
    };
    // support for a browser that doesn't the Intersection Observer API
    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(callback, options);
      observer.observe(element.current);
    });

    return () => {
      observer && observer.disconnect();
    };
  }, [distance]);

  return { isNearToScreen, element };
}
