import { getApp } from './helpers.js';

async function main() {
  const app = await getApp();

  console.log('Deploying bundle collection module...');

  const bundleModule = await app.deployBundleModule({
    name: 'Lootbox Bundle',
    sellerFeeBasisPoints: 0,
  });

  console.log(`Deployed bundle collection module with address ${bundleModule.address}`);
}

try {
	await main();
} catch (error) {
  console.error("Error creating the bundle collection module", error);
  process.exit(1);
}