import { People } from "./people.model";
import { Films } from "./films.model";
import { Planets } from "./planets.model";

export class Species {
  public name: string;
  public classification: string;
  public designation: string;
  public average_height: string;
  public average_lifespan: string;
  public eye_colors: string;
  public hair_colors: string;
  public skin_colors: string;
  public language: string;
  public films: Films[];
  public people: People[];
  public homeworld: Planets[];
  public url: string;
  public created: string;
  public edited: string;

  constructor(
    name: string,
    classification: string,
    designation: string,
    average_height: string,
    average_lifespan: string,
    eye_colors: string,
    hair_colors: string,
    skin_colors: string,
    language: string,
    films: Films[],
    people: People[],
    homeworld: Planets[],
    url: string,
    created: string,
    edited: string,
  ){
    this.name =  name;
    this.classification = classification;
    this.designation = designation;
    this.average_height = average_height;
    this.average_lifespan = average_lifespan;
    this.eye_colors = eye_colors;
    this.hair_colors = hair_colors;
    this.skin_colors = skin_colors;
    this.language = language;
    this.films = films;
    this.people = people;
    this.homeworld = homeworld;
    this.url = url;
    this.created = created;
    this.edited = edited;
  }
}
