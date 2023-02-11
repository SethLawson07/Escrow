import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Escrow", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployEscrowFixture() {
    


    // Contracts are deployed using the first signer/account by default
    const [owner, addr1] = await ethers.getSigners();

    const Escrow = await ethers.getContractFactory("Escrow");
    const escrow = await Escrow.deploy();

    return { escrow,  owner, addr1 };
  }
/*
  describe("Deployment", function () {
    it("", async function () {
      const { escrow, owner } = await loadFixture(deployEscrowFixture);

     expect(await escrow.unescrowTime()).to.equal(unescrowTime);
    });*/

 
  });

 
});
