import { useEffect, useState } from "react";
import { getTrendingTermSearch } from "../../services/getTrendingTermSearch";
import Term from "../Term";
import "./TrendingTermSearch.css"

export default function TrendingSearchTerms() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrendingTermSearch().then((res) => {
      setTrendings((prevTrendings) => [...prevTrendings, ...res]);
    });
  }, []);
  return (
    <div className="TrendingTermSearch">
      {trendings.map((trending) => (
        <Term key={trending} title={trending} />
      ))}
    </div>
  );
}
