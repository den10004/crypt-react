import { useState } from "react";
import "./listSites.css";
import Iframe from "react-iframe";
import LiGroup from "./LiGroup";

function ListSites() {
  const [show, setShow] = useState("");

  const printButtonLabel = (event) => {
    setShow(event.target.name);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Список сайтов</h2>
      <div className="listSites">
        <LiGroup
          buttons={["uniswap.org", "1inch", "bugs.denet.pro", "revert.finance"]}
          printButtonLabel={printButtonLabel}
          doSomethingAfterClick={printButtonLabel}
        />
      </div>

      {show === "uniswap.org" && (
        <Iframe url="https://app.uniswap.org/" className="frame" />
      )}
      {show === "1inch" && (
        <Iframe url="https://revert.finance/" className="frame" />
      )}
      {show === "bugs.denet.pro" && (
        <Iframe url="https://bugs.denet.pro/" className="frame" />
      )}
      {show === "revert.finance" && (
        <Iframe url="https://revert.finance/" className="frame" />
      )}
      {show === "" && <span>Нажмите кнопку</span>}
    </div>
  );
}

export default ListSites;
