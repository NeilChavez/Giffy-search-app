import { lazy, Suspense } from "react";
import { useIsNearToScreen } from "../../hooks/useIsNearToScreen";
import Spinner from "../Spinner";
import "./TrendingTermSearch.css";

const TrendingSearchTerms = lazy(() => import("./TrendingSearches"));

export default function LazyTrendingSearchTerms() {
  const { isNearToScreen, fromRef } = useIsNearToScreen();

  return (
    <section className="TrendingSearchTerms-section" ref={fromRef}>
      <Suspense fallback={<Spinner/>}>
        {isNearToScreen ? <TrendingSearchTerms /> : <Spinner/>}
      </Suspense>
    </section>
  );
}
