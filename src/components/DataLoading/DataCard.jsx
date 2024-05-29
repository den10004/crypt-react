import { Link } from "react-router-dom";
import "./index.css";

function DataCard({ item }) {
  const { title, link } = item;

  return (
    <li>
      <div className="dataCard">
        <p>{title}</p>
        <Link to={link} target="_blank">
          ссылка
        </Link>
      </div>
    </li>
  );
}

export default DataCard;
