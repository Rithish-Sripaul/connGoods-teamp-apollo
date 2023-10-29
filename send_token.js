require("dotenv").config();
const { ethers } = require("ethers");
const XRC20ABI = require("./XRC20.json");

const testnetProvider = new ethers.JsonRpcProvider(
  process.env.APOTHEM_NETWORK_URL
);
const wallet = new ethers.Wallet(
  // process.env.APOTHEM_PRIVATE_KEY,
  testnetProvider
);
const walletSigner = wallet.connect(testnetProvider);

// we are using our address as a recipient, but you can use any address you want
const recipient_address = "0xC5e209637B51421df6c94bd8a3C746E1C8e8E614";
const your_xrc20_token_address = process.env.XRC20_TOKEN_ADDRESS;
const number_of_tokens = ethers.parseUnits("120", 18);

async function main() {
  const contract = new ethers.Contract(
    your_xrc20_token_address,
    XRC20ABI,
    walletSigner
  );

  const receipt = await contract.transfer(recipient_address, number_of_tokens);

  console.log(receipt.hash);
  alert(
    `Congratulations, the order has been placed! The transaction address is ${receipt.hash}`
  );
}

// document.querySelector(".p1").addEventListener("click", () => {
//   main();
// });
main();
