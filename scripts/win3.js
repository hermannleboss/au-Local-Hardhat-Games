// add the game address here and update the contract name if necessary
const gameAddr = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
const contractName = "Game3";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);
    // do whatever you need to do to win the game here:
    const tx = await game.win(45);

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
