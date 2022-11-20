import { lazy, Suspense } from "react";
import { useIsNearToScreen } from "../../hooks/useIsNearToScreen";
import Spinner from "../Spinner";
import "./TrendingTermSearch.css";

const TrendingSearchTerms = lazy(() => import("./TrendingSearches"));

export default function LazyTrendingSearchTerms() {
  const { isNearToScreen, element } = useIsNearToScreen();

  return (
    <section className="TrendingSearchTerms-section" ref={element}>
      <Suspense fallback={<Spinner/>}>
        {isNearToScreen ? <TrendingSearchTerms /> : <Spinner/>}
      </Suspense>
    </section>
  );
}
