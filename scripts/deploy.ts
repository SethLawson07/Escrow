import { ethers } from "hardhat";

async function main() {


  const escrowedAmount = ethers.utils.parseEther("1");

  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy();

  await escrow.deployed();

  //console.log(`Escrow with 1 ETH and unescrow timestamp ${unescrowTime} deployed to ${escrow.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
