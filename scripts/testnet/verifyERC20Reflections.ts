import * as hre from "hardhat";
import {ethers} from "ethers";
import * as dotenv from "dotenv";
dotenv.config();

// run this script with hardhat: npx hardhat run ./scripts/testnet/verifyERC20Reflections.ts --network ETH_GOERLI
const name = "HOLD";
const symbol = "EARN";
const decimals = 18;
const txFee = "500";
const initialSupply = "1000000000";
const constructorArguments = [name, symbol, process.env.OWNER_ADDRESS_TESTNET];
const contractAddress = "0xc73b9A17da9b03258771201c3901BEf19595BDC6";

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