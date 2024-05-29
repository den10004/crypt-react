import CryptoJS from "crypto-js";
import { useState } from "react";

function Eas() {
  const [textareaText, setTextareaText] = useState("");
  const [encrypt, setEncrypt] = useState("");
  const [decrypt, setDecrypt] = useState("");

  function AesChange(event) {
    setTextareaText(event.target.value);
  }

  function encryptFun() {
    let data = textareaText;
    let key = CryptoJS.enc.Latin1.parse("1234567812345678");
    let iv = CryptoJS.enc.Latin1.parse("1234567812345678");
    let encrypted = CryptoJS.AES.encrypt(data, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding,
    });
    setEncrypt("" + encrypted);
    let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
      iv: iv,
      padding: CryptoJS.pad.ZeroPadding,
    });
    setDecrypt("" + decrypted.toString(CryptoJS.enc.Utf8));
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Шифрование/расшифрование алгоритмом aes</h2>
      <textarea
        onChange={AesChange}
        type="text"
        style={{ marginBottom: "20px" }}
        placeholder="Введите значение поля"
      ></textarea>
      <button onClick={encryptFun}>получить Eas</button>
      <div style={{ marginTop: "20px" }}>
        <div>
          <span>
            <b>Зашифровка: </b>
            {encrypt}
          </span>
        </div>
        <div>
          <span>
            <b>Расшифровка: </b>
            {decrypt}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Eas;
