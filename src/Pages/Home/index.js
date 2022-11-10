import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleSubmit = (keyword) => {
    navigate(`/search/${keyword}`);
  };

  return (
    <section className="Home">
      <div className="Home-results">
        <div className="Home-results-cards"></div>
      </div>
    </section>
  );
}
