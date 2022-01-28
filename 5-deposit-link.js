import { ethers } from "ethers";
import { sdk } from "./helpers.js";

async function main() {
  const packModuleAddress = process.env.PACK_ADDRESS; // your pack module address
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Depositing link...')

  // LINK uses 18 decimals, same as Eth. So this gives us the amount to use for 0.1 LINK
  const amount = ethers.utils.parseEther('0.1');

  await packModule.depositLink(amount);
  console.log('Deposited!')

  const balance = await packModule.getLinkBalance();
  console.log(balance);
}

try {
  await main();
} catch (error) {
  console.error("Error depositing the LINK", error);
  process.exit(1);
}