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
      <textarea onChange={AesChange} type="text"></textarea>
      <button onClick={encryptFun} style={{ margin: "20px 0 20px 0" }}>
        получить Eas
      </button>
      <span>Зашифровка:{encrypt}</span>
      <span>Расшифровка: {decrypt}</span>
    </div>
  );
}

export default Eas;
