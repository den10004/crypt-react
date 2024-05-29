import { useState } from "react";
import { ethers } from "ethers";

function Walet() {
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);

  const connectAccount = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((account) => {
          setAccount(account[0]);
          getBalance(account[0]);
        });
      window.ethereum.on("accountChanged", connectAccount);
      window.ethereum.on("chainChanged", chainChanged);
    } else {
      alert("У Вас нет кошелька");
    }
  };

  const getBalance = (acc) => {
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [acc, "latest"],
      })
      .then((balance) => {
        setBalance(ethers.utils.formatEther(balance));
      });
  };

  const chainChanged = () => {
    window.location.reload();
  };

  return (
    <>
      <h2>Подключение кошелька Metamask</h2>
      <button onClick={connectAccount}>Подключить кошелёк</button>

      {account && balance ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>
            <b>Аккаунт </b>
            {account}
          </span>
          <span>
            <b>Баланс </b>
            {balance}
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Walet;
