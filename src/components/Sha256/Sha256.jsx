import { useState } from "react";
import sha256 from "crypto-js/sha256";

function Sha256() {
  const [textareaText, setTextareaText] = useState("");
  const [hashValue, setHashValue] = useState("");

  function inputChange(event) {
    setTextareaText(event.target.value);
  }

  function hashSum() {
    const hash = sha256(textareaText);
    setHashValue(hash);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Получение sha256</h2>
      <div className="wrapperHash">
        <textarea onChange={inputChange} type="text"></textarea>
        <button onClick={hashSum}>получить sha256 </button>
        <input defaultValue={hashValue} type="text" />
      </div>
    </div>
  );
}

export default Sha256;
