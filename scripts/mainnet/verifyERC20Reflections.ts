import * as hre from "hardhat";
import {ethers} from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

// run this script with hardhat: npx hardhat run ./scripts/mainnet/verifyERC20Reflections.ts --network ETH_MAINNET
const name = "HermioneGrangerTrumpKnuckles888Inu ";
const symbol = "BITCONNECT";
const decimals = 18;
const txFee = "500";
const initialSupply = "1000000000";
const constructorArguments = [name, symbol, process.env.OWNER_ADDRESS_MAINNET];
const contractAddress = "0x57a2AAF63Fec11D1F83BaBA543373d3eebd810A8";

async function main() {

    // verify contract
    console.log("Verifying contract on Etherscan...");
    if (constructorArguments != null) {
        await hre.run("verify:verify", {
            address: contractAddress,
            constructorArguments: constructorArguments,
            contract: "contracts/ERC20Reflections.sol:ERC20Reflections"
        });
    } else {
        await hre.run("verify:verify", {
            address: contractAddress,
            contract: "contracts/ERC20Reflections.sol:ERC20Reflections"
        });
    }
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});