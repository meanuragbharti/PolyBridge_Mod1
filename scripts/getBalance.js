const hre = require("hardhat");
const NFTJson = require("../artifacts/contracts/NFTCollection1.sol/MyNFT.json")

const NFtAddress ="0x40f817467C9Ef628DeC23Cec5B2340688129c207";
const ContractABI = NFTJson.abi
const walletAddress="0x0eC9340F61494EA8D581ef3364275D3DA0DBdeD4";

async function main(){
    const Contract = await hre.ethers.getContractAt(ContractABI,NFtAddress);
    console.log("You have "+await Contract.balanceOf(walletAddress)+" NFTs")
}
main((error)=>{
    console.log(error);
    process.exitCode=1;
})