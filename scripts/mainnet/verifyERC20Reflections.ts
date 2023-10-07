import * as hre from "hardhat";
import {ethers} from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

// run this script with hardhat: npx hardhat run ./scripts/mainnet/verifyERC20Reflections.ts --network ETH_MAINNET
const name = "HOLD";
const symbol = "EARN";
const decimals = 18;
const txFee = "500";
const initialSupply = "1000000000";
const constructorArguments = [name, symbol, process.env.OWNER_ADDRESS_MAINNET];
const contractAddress = "0xfc1B3395b8F4Cc4C025928C6d3471a1B9451A5d1";

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