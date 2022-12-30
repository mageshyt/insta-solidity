// export const  contractAddress="0x75f7188598e414D639Aff87dF4647bd7b23FAf98" // goerli testnet
import Instagram from "./Instagram.json";
import Web3 from "web3";
export const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // local host

export const contractCreate = async () => {
  console.log("createContract");
  const { ethereum } = window;
  if (!ethereum) return alert("Please install MetaMask first.");

  const web3 = new Web3(ethereum);
  const instance = new web3.eth.Contract(Instagram.abi, contractAddress);
  return instance;
};
