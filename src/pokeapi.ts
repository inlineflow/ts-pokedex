export type LocationAreaResponse = {
  count: number;
  next: URL;
  previous: URL | null;
  results: ShallowLocation[];
}

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  private static readonly locationsURL = "https://pokeapi.co/api/v2/location-area";

  constructor() { }

  async fetchLocations(pageURL?: string): Promise<LocationAreaResponse> {
    const url = new URL(pageURL ? pageURL : PokeAPI.locationsURL);//`${PokeAPI.baseURL}/${pageURL}`);
    const resp = await fetch(url);
    const locations = resp.json() as Promise<LocationAreaResponse>;
    return locations;
  }
}

export type ShallowLocation = {
  name: string;
  url: URL;
}
