export function commandHelp(state) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage: \n");
    for (const c in state.commands) {
        console.log(`${state.commands[c].name}: ${state.commands[c].description}`);
    }
}
