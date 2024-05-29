import "./App.css";
import ListSites from "./components/LiGroup/ListSites";
import Sha256 from "./components/Sha256/Sha256";
import Eas from "./components/Eas/Eas";
import DataLoading from "./components/DataLoading/DataLoading";
import Walet from "./components/Walet/Walet";

function App() {
  return (
    <div className="wrapper">
      <div className="block">
        <div className="container">
          <Walet />
        </div>
        <div className="container">
          <Sha256 />
        </div>
        <div className="container">
          <ListSites />
        </div>
        <div className="container">
          <Eas />
        </div>
        <div className="container">
          <DataLoading />
        </div>
      </div>
    </div>
  );
}

export default App;
