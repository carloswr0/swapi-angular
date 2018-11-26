import { People } from "./people.model";
import { Films } from "./films.model";

export class Planets {
  public name: string;
  public diameter: string;
  public rotation_period: string;
  public orbital_period: string;
  public gravity: string;
  public population: string;
  public climate: string;
  public terrain: string;
  public surface_water: string;
  public residents: People[];
  public films: Films[];
  public url: string;
  public created: string;
  public edited: string;

  constructor(
    name: string,
    diameter: string,
    rotation_period: string,
    orbital_period: string,
    gravity: string,
    population: string,
    climate: string,
    terrain: string,
    surface_water: string,
    residents: People[],
    films: Films[],
    url: string,
    created: string,
    edited: string,
  ){
    this.name = name;
    this.diameter = diameter;
    this.rotation_period = rotation_period;
    this.orbital_period = orbital_period;
    this.gravity = gravity;
    this.population = population;
    this.climate = climate;
    this.terrain = terrain;
    this.surface_water = surface_water;
    this.residents = residents;
    this.films = films;
    this.url = url;
    this.created = created;
    this.edited = edited;
  }
}
