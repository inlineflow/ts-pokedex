import { initState } from "./state.js";
export function startREPL() {
    const state = initState();
    state.io.prompt();
    state.io.on("line", (input) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            state.io.prompt();
            //return
        }
        //console.log(`Your command was: ${words[0]}`)
        const command = state.commands[words[0]];
        command.callback(state);
        state.io.prompt();
    });
}
export function cleanInput(input) {
    return input.trim().split(' ').filter(el => el != '').map(word => word.toLowerCase());
}
