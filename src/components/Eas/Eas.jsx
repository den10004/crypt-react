import CryptoJS from "crypto-js";
import { useState } from "react";

function Eas() {
  let key = CryptoJS.enc.Latin1.parse("1234567812345678");
  let iv = CryptoJS.enc.Latin1.parse("1234567812345678");

  const [textareaText, setTextareaText] = useState("");
  const [decrareaText, setDecrareaText] = useState("");
  const [encrypt, setEncrypt] = useState("");
  const [decrypt, setDecrypt] = useState("");

  function AesChange(event) {
    setTextareaText(event.target.value);
  }

  function AesDeCr(event) {
    setDecrareaText(event.target.value);
    console.log(decrareaText);
  }

  function decryptFun() {
    let decrypted = CryptoJS.AES.decrypt(decrareaText, key, {
      iv: iv,
      padding: CryptoJS.pad.ZeroPadding,
    });
    setDecrypt("" + decrypted.toString(CryptoJS.enc.Utf8));
  }

  function encryptFun() {
    let data = textareaText;
    let encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding,
    });
    setEncrypt("" + encrypted);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Шифрование алгоритмом aes</h2>
      <textarea
        onChange={AesChange}
        type="text"
        style={{ marginBottom: "20px" }}
        placeholder="Введите значение поля"
      ></textarea>
      <button onClick={encryptFun}>получить Eas</button>
      <div style={{ marginTop: "20px" }}>
        <span>
          <b>Зашифровано: </b>
          {encrypt}
        </span>
      </div>

      <h2>Расшифрование алгоритмом aes</h2>
      <textarea
        onChange={AesDeCr}
        type="text"
        style={{ marginBottom: "20px" }}
        placeholder="Введите значение поля"
      ></textarea>
      <button onClick={decryptFun}>Расшифровать</button>

      <div style={{ marginTop: "20px" }}>
        <span>
          <b>Расшифровка: </b>
          {decrypt}
        </span>
      </div>
    </div>
  );
}

export default Eas;
