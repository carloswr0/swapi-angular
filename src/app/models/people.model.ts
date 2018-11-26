import { Species } from "./species.model";
import { Starships } from "./starships.model";
import { Vehicles } from "./vehicles.model";
import { Planets } from "./planets.model";
import { Films } from "./films.model";

export class People {
  public name: string;
  public birth_year: string;
  public eye_color: string;
  public gender: string;
  public hair_color: string;
  public height: string;
  public mass: string;
  public skin_color: string;
  public homeworld: Planets[];
  public films: Films[];
  public species: Species[];
  public starships: Starships[];
  public vehicles: Vehicles[];
  public url: string;
  public created: string;
  public edited: string;
  constructor(
    name: string,
    birth_year: string,
    eye_color: string,
    gender: string,
    hair_color: string,
    height: string,
    mass: string,
    skin_color: string,
    homeworld: Planets[],
    films: Films[],
    species: Species[],
    starships: Starships[],
    vehicles: Vehicles[],
    url: string,
    created: string,
    edited: string,
  ){
    this.name =  name;
    this.birth_year =  birth_year;
    this.eye_color =  eye_color;
    this.gender =  gender;
    this.hair_color =  hair_color;
    this.height =  height;
    this.mass =  mass;
    this.skin_color =  skin_color;
    this.homeworld =  homeworld;
    this.films =  films;
    this.species =  species;
    this.starships =  starships;
    this.vehicles =  vehicles;
    this.url =  url;
    this.created =  created;
    this.edited =  edited;
  }
}
