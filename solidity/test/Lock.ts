import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Instagram", () => {
  // deploy the contract
  const deployToken = async () => {
    const Token = await ethers.getContractFactory("Instagram");
    const token = await Token.deploy();
    await token.deployed();
    return token;
  };

  it("should deploy", async () => {
    const token = await deployToken();
    expect(token.address).to.be.properAddress;
  });

  // create a post
  it("should create a post", async () => {
    const token = await deployToken();

    const url = "https://avatars.githubusercontent.com/u/70838644?v=4";
    const description = "This is a test post";

    const res = await token.createPost(url, description);
    console.log(res);
  });
});
