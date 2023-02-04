// replace the name of the contract with which one you want to deploy!
async function main(contractName) {
    const Game = await hre.ethers.getContractFactory(contractName);
    // if you need to add constructor arguments for the particular game, add them here:
    const game = await Game.deploy();
    console.log(`${contractName} deployed to address: ${game.address}`);
}

const game1 = main('Game1')
const game2 = main("Game2")
const game3 = main("Game3")
const game4 = main("Game4")
const game5 = main("Game5")

Promise.all([game1, game2, game3, game4, game5])
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });