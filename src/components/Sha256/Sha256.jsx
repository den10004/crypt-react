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
    <>
      <h2>Получение sha256</h2>
      <div className="wrapperHash">
        <textarea
          onChange={inputChange}
          type="text"
          placeholder="Введите значение поля"
        ></textarea>
        <button onClick={hashSum}>получить sha256 </button>
        {hashValue && <input defaultValue={hashValue} type="text" readOnly />}
      </div>
    </>
  );
}

export default Sha256;
