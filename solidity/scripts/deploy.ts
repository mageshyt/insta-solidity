import { ethers } from "hardhat";

const main = async () => {
  const instance = await ethers.getContractFactory("Instagram");
  const contract = await instance.deploy();
  await contract.deployed();
  console.log("Contract deployed to: 🤜", contract.address);
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
