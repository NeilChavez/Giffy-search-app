import TrendingSearchTerms from "./TrendingSearches"
import { useIsNearToScreen } from "../../hooks/useIsNearToScreen";
import "./TrendingTermSearch.css";



export default function LazyTrendingSearchTerms() {
  const { isNearToScreen, element } = useIsNearToScreen();

  return (
    <section className="TrendingSearchTerms-section" ref={element}>
      {isNearToScreen ? <TrendingSearchTerms /> : null}
    </section>
  );
}
