export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() { }

    async fetchLocation(pageURL?: string): Promise<ShallowLocations[]> {
        const resp = await fetch(`${PokeAPI.baseURL}/${pageURL}`);
        const locations = resp.json() as Promise<ShallowLocations[]>;
        return locations;
    }

}

export type ShallowLocations = {
    name: string;
    url: URL;
}
