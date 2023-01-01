import Spinner from "../../components/Spinner";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import TrendingSearchTerms from "../../components/TrendingSearchTerms";
import SearchForm from "../../components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const { gifs, loading } = useGifs();

  return (
    <section className="container">
      <Helmet>
        <title> Giffy | Home </title>
        <meta name="description" content="Home Page | Giffy"></meta>
      </Helmet>
      <SearchForm />
      <h2>Last search: {localStorage.getItem("lastKeyword")} </h2>
      <div className="App-main">
        <section className="ListOfGifs">
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </section>
        <TrendingSearchTerms />
      </div>
    </section>
  );
}
