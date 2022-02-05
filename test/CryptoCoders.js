const CryptoCoders = artifacts.require("./CryptoCoders.sol");

contract("CryptoCoders", (accounts) => {
  it("....get deployed", async () => {
    const contract = await CryptoCoders.deployed();
    console.log(contract);
  });
});
