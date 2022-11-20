import {useState, useEffect} from "react";
import Term from "../../components/Term"
import {getTrendingTermSearch} from "../../services/getTrendingTermSearch"

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