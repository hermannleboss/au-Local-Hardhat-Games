// add the game address here and update the contract name if necessary
const gameAddr = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    const giveMeAllowance= await game.giveMeAllowance(100000)
    const x= giveMeAllowance.wait()
    const mint= await game.mint(10000)
    const y =  mint.wait()

    // do whatever you need to do to win the game here:
    const tx = await game.win();

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
