export function commandExit(state) {
    console.log("Closing the Pokedex... Goodbye!");
    state.io.close();
    process.exit(0);
}
