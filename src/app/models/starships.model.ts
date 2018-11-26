import { Films } from "./films.model";
import { People } from "./people.model";

export class Starships {
  public name: string;
  public model: string;
  public starship_class: string;
  public manufacturer: string;
  public cost_in_credits: string;
  public length: string;
  public crew: string;
  public passengers: string;
  public max_atmosphering_speed: string;
  public hyperdrive_rating: string;
  public MGLT: string;
  public cargo_capacity: string;
  public consumables: string;
  public films: Films[];
  public pilots: People[];
  public url: string;
  public created: string;
  public edited: string;

  constructor(
    name: string,
    model: string,
    starship_class: string,
    manufacturer: string,
    cost_in_credits: string,
    length: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string,
    hyperdrive_rating: string,
    MGLT: string,
    cargo_capacity: string,
    consumables: string,
    films: Films[],
    pilots: People[],
    url: string,
    created: string,
    edited: string,
  ){
    this.name = name;
    this.model = model;
    this.starship_class = starship_class;
    this.manufacturer = manufacturer;
    this.cost_in_credits = cost_in_credits;
    this.length = length;
    this.crew = crew;
    this.passengers = passengers;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.hyperdrive_rating = hyperdrive_rating;
    this.MGLT = MGLT;
    this.cargo_capacity = cargo_capacity;
    this.consumables = consumables;
    this.films = films;
    this.pilots = pilots;
    this.url = url;
    this.created = created;
    this.edited = edited;
  }
}
