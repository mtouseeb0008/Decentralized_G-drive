import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import './App.css';

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  //smart contract se intract krne ke liye means .. hm instance create krnege smart contract k
  // (provider)--> k kamm hota h blockchain se data ko read krne me
  // (signer)--> k kaam hota h data ko write krne ke liye blockchain pe
  // window.ethereum --> enject krta h  apna metamask
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {

        //Metamask ke through jb account chnage krnge to bina refesh ke account change ho jaye for this or chainchanged tb bhi bina refresh ke change ho jaye
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        // let contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
        let contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        // console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <>
     {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)} style={{ cursor: 'pointer' }}>
          Share
        </button>
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}
    <div className="App">
       <h1 style={{ color: "white" }}>Gdrive 3.0</h1>
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>

        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        <Display contract={contract} account={account}></Display>
       </div>
       </>
  );
}

export default App;
