export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";
    private static readonly locationsURL = "https://pokeapi.co/api/v2/location-area";

    constructor() { }

    async fetchLocations(pageURL?: string): Promise<ShallowLocations[]> {
        const url = new URL(pageURL ? pageURL : PokeAPI.locationsURL);//`${PokeAPI.baseURL}/${pageURL}`);
        const resp = await fetch(url);
        const locations = resp.json() as Promise<ShallowLocations[]>;
        return locations;
    }
}

export type ShallowLocations = {
    name: string;
    url: URL;
}
