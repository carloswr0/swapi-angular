import { Species } from "./species.model";
import { Starships } from "./starships.model";
import { Vehicles } from "./vehicles.model";
import { People } from "./people.model";
import { Planets } from "./planets.model";

export class Films {
  public title: string;
  public episode_id: number;
  public opening_crawl: string;
  public director: string;
  public producer: string;
  public release_date: Date;
//
  public species: Species[];
  public starships: Starships[];
  public vehicles: Vehicles[];
  public characters: People[];
  public planets: Planets[];
//
  public url: string;
  public created: string;
  public edited: string;

  constructor(
    title: string,
    episode_id: number,
    opening_crawl: string,
    director: string,
    producer: string,
    release_date: Date,
    species: Species[],
    starships: Starships[],
    vehicles: Vehicles[],
    characters: People[],
    planets: Planets[],
    url: string,
    created: string,
    edited: string,
  ){
    this.title = title;
    this.episode_id = episode_id;
    this.opening_crawl = opening_crawl;
    this.director = director;
    this.producer = producer;
    this.release_date = release_date;
    this.species = species;
    this.starships = starships;
    this.vehicles = vehicles;
    this.characters = characters;
    this.planets = planets;
    this.url = url;
    this.created = created;
    this.edited = edited;
  }
}
