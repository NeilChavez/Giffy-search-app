import { Link } from "react-router-dom";
export default function Term({ title }) {
  return (
    <div className="Term">
      <Link to={`/search/${title}`}>{title}</Link>
    </div>
  );
}
