import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();

  return <div>ID che vuoi guardare e' {id}</div>;
}
