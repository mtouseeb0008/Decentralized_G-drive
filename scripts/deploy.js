const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.deployed();

  console.log("Upload contract deployed to:", upload.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// const hre = require("hardhat");

// async function main() {
//   const upload = await hre.ethers.deployContract("Upload");
//   await upload.waitForDeployment();
//   console.log("Upload contract deployed to:", upload.target);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });



// const hre = require("hardhat");

// async function main() {
//   const Upload = await hre.ethers.getContractFactory("Upload");
//   const upload = await Upload.deploy();
//   await upload.deployed();

//   console.log("Upload contract deployed to:", upload.address);

//   // You can perform additional actions or logging here after deployment

//   // If you need to wait for additional confirmations, you can use:
//   // await upload.wait(confirmations);

//   // If you need to interact with the contract after deployment, you can use:
//   // const contract = new ethers.Contract(upload.address, Upload.interface, ethers.provider.getSigner());
//   // const result = await contract.someFunction();

//   console.log("Deployment completed!");
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

