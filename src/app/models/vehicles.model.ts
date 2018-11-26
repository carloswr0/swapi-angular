import { Films } from "./films.model";
import { People } from "./people.model";

export class Vehicles {
  public name: string;
  public model: string;
  public vehicle_class: string;
  public manufacturer: string;
  public length: string;
  public cost_in_credits: string;
  public crew: string;
  public passengers: string;
  public max_atmosphering_speed: string;
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
    vehicle_class: string,
    manufacturer: string,
    length: string,
    cost_in_credits: string,
    crew: string,
    passengers: string,
    max_atmosphering_speed: string,
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
    this.vehicle_class = vehicle_class;
    this.manufacturer = manufacturer;
    this.length = length;
    this.cost_in_credits = cost_in_credits;
    this.crew = crew;
    this.passengers = passengers;
    this.max_atmosphering_speed = max_atmosphering_speed;
    this.cargo_capacity = cargo_capacity;
    this.consumables = consumables;
    this.films = films;
    this.pilots = pilots;
    this.url = url;
    this.created = created;
    this.edited = edited;
  }
}
