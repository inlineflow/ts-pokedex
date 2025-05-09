export type LocationAreaResponse = {
  count: number;
  next: URL;
  previous: URL | null;
  results: ShallowLocation[];
}

export class PokeAPI {
  private static readonly baseURL = new URL("https://pokeapi.co/api/v2");
  private static readonly locationsURL = new URL("https://pokeapi.co/api/v2/location-area");

  constructor() { }
  next: URL = PokeAPI.locationsURL;
  previous: URL | null = null;

  async fetchLocations(pageURL?: string): Promise<ShallowLocation[]> {
    //const url = new URL(pageURL ? pageURL : PokeAPI.locationsURL);//`${PokeAPI.baseURL}/${pageURL}`);
    const resp = await fetch(pageURL ? pageURL : this.next);
    const response = await (resp.json() as Promise<LocationAreaResponse>);
    this.previous = response.previous;
    this.next = response.next;
    return response.results;
  }
}

export type ShallowLocation = {
  name: string;
  url: URL;
}
