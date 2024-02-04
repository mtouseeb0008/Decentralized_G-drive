# Decenralized G-Drive3.0


In wrapping up, our project for decentralized image sharing is a big step forward. 
It uses a fancy thing called blockchain to make sure that when you share pictures, it's super safe and private. 
We focused on keeping your data intact, your pictures secure, and made it easy for everyone to work together.
This isn't just about sharing images; it's about a safer, more reliable way for all of us to connect in the digital world.


## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Some ScreenShot](#some-screenshot)

## Introduction

Welcome to our innovative project, redefining the way we share images through the power of blockchain technology. Our decentralized image upload and sharing platform prioritize security, privacy, and collaboration, offering users a tamper-proof environment for their digital interactions. By focusing on data integrity and user-friendly experiences, we aim to set new standards for secure and authentic image sharing in the digital era.

## Installation

Follow the steps below to set up the Decenralized G-Drive3.0 Project on your local machine:

1. Clone the repository:

   ```shell
   `https://github.com/your-username/Decentralized_G-drive.git`
   ```
3. Install dependencies for the hardhat:
   
  ```shell
   # Navigate to the root directory
    cd Dgdrive3.0
   # Install hardhat dependencies
    npm install
```
3. Compile the smart contract for artifacts:
   
```shell
# Compile Smart Contract
npx hardhat compile
```

4. Deploy the Solidity smart contract to an Ethereum testnet or local development environment.
   
```shell
# Deploy Smart Contract
npx hardhat run scripts/deploy.js --network <network-name>
```
5. Install dependencies for the React front end:
   
```shell
# Navigate to the React client directory
cd client 
# Install React dependencies
npm install
```
6. Run the react application:
   
```shell
# Start React Application
npm start
```
# Configuration
1. Set up environment variables:

Obtain API keys for Pinata to interact with IPFS.
Update the React component (FileUpload.js) with your Pinata API keys.

# Usage
Once the setup and configuration are complete, follow these steps to utilize the decentralized image upload and sharing system:

1. Install Metamask:
    - Ensure Metamask is installed and configured in your browser for Ethereum interactions.

2. Update Contract Address:

     - After smart contract deployment, make sure to update the contract address in `App.js` within the React application.

3. Upload Image before "Get Data":

    - Click "Get Data" only after uploading an image on Pinata. Otherwise, it will throw an error stating "You don't have access".

4. Accessing Other User Images:

    - Use the "Get Data" button to access other users' images. Input the user's address in the designated box, but remember, you can only access their images if they've granted you access through the smart contract. Otherwise, it will throw an error saying "You don't have access".
    
These steps will ensure smooth navigation and utilization of the system while maintaining access control and avoiding potential errors.


## Technologies-used

- Ethereum : Ethereum is a decentralized blockchain platform that establishes a peer-to-peer network that securely executes and verifies application code, called smart contracts
- React.js : Front-end interface for uploading images and managing access.
- Solidity :  Smart contract development for ownership and access control.
- Pinata : By the help of Pinata we have to upload the image on the IPFS.
- IPFS : Decentralized storage protocol for hosting uploaded images.
- Axios : Used as Pinning Service For Pinata
- Hardhat : Development and Deployment tool


# After setup all the environment then :
   #Over All summary
   - Split the terminal in three parts
       1. npm start
       2. npx hardhat node
       3. npx hardhat run  scripts/deploy.js --network <network-name>

# Some Screenshot 

  #User Login With Metamask
   
![Screenshot (90)](https://github.com/mtouseeb0008/Decentralized_G-drive/assets/90579981/ff52efe3-8760-4136-8e87-ec5e896dd154)

   #Dislay Image 
     - Not See the Image Beacuse Pinata have to Closed Public Gateway
   
![Screenshot (88)](https://github.com/mtouseeb0008/Decentralized_G-drive/assets/90579981/0f523a29-fe9a-4811-a841-a523444d874d)


   Before the closing the Public Gateway Look Like this
     ![image](https://github.com/mtouseeb0008/Decentralized_G-drive/assets/90579981/ed1757ea-907d-4391-8b01-d384c9fc3bc0)

    
   #Share Image With Another Account 
   
![Screenshot (86)](https://github.com/mtouseeb0008/Decentralized_G-drive/assets/90579981/75726f5b-304f-40d1-867a-019986278486)






