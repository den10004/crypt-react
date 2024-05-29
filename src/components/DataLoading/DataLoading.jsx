import data from "../../data.json";
import DataCard from "./DataCard";

function DataLoading() {
  return (
    <div className="block">
      <h2>Список сайтов</h2>

      <ul className="dataList">
        {data.map((item, i) => (
          <DataCard key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default DataLoading;
