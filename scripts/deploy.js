const hre = require("hardhat");
async function main() {
  const [owner] = await hre.ethers.getSigners();
  const BankContractFactory = await  hre.ethers.getContractFactory("Bank");
  const BankContract = await BankContractFactory.deploy();
  console.log("BankContract deploy to: ", BankContract.address);

  console.log("BankContract owner address", owner.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
