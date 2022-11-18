import {Link} from "react-router-dom"
export default function Category({ title }) {
  return (
    <div>
      <ul>
        <li>
          <Link>{title}</Link>
        </li>
      </ul>
    </div>
  );
}
