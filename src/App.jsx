import "./App.css";
import ListSites from "./components/LiGroup/ListSites";
import Sha256 from "./components/Sha256/Sha256";
import Eas from "./components/Eas/Eas";
import DataLoading from "./components/DataLoading/DataLoading";

function App() {
  return (
    <div className="wrapper">
      <Sha256 />
      <ListSites />
      <Eas />
      <DataLoading />
    </div>
  );
}

export default App;
