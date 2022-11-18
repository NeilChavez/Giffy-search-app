import { useEffect, useState } from "react";
import { getTrendingTermSearch } from "../../services/getTrendingTermSearch";
import Category from "../Category";

export default function TrendingSearchTerms() {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrendingTermSearch().then((res) => {
      setTrendings((prevTrendings) => [...prevTrendings, ...res]);
    });
  }, []);
  return (
    <div>
      {console.log(trendings)}
      {trendings.map((trending) => (
        <Category key={trending} title={trending} />
      ))}
    </div>
  );
}
