import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private arrayItemsToFilter:any; //This was an oopsie, to deal with typescript.

  private headers = {
    films: ["Title", "Episode","Director", "Producer", "Premiere", "Actions"],
    people: ["Name", "Born in", "Homeworld", "Gender", "Eye color", "Hair color","Skin color","Height", "Mass", "Actions" ],
    planets: ["Name", "Diameter","Rotation period", "Orbital period", "Gravity","Population", "Climate", "Terrain", "Surface water", "Actions"],
    species: ["Name", "Classification", "Designation", "AVG Height", "AVG Lifespan", "AVG Eye color", "AVG Hair color", "AVG Skin color", "Language", "Actions"],
    starships: ["Name", "Model", "Class", "Cost (Credits)", "Made by", "Length", "Crew", "Passengers", "Max Speed", "Hyperdrive Rating", "MGLT", "Cargo", "Consumables", "Actions"],
    vehicles: ["Name", "Model","Class", "Made by", "Lenght", "Cost (Credits)","Crew", "Passengers", "Max Speed", "Cargo", "Consumables", "Actions"],
  }

  private loadedData:Array<string> = [];
  //Cached copy of request's response.

  private loadedCategory: string = "";
  //Cached copy of request's category.

  public filterString: BehaviorSubject<any> = new BehaviorSubject<string>("");
  //I'm using BehaviourSubject to hold a value:
  //Which is a string that is going to be used to filter data.

  public filteredData: BehaviorSubject<any> = new BehaviorSubject<Array<String>>([]);
  //I'm using BehaviourSubject to hold a value:
  //Which is an ARRAY that HOLDS the filtered items in a local cache.

  public loadedDataChanged = new Subject();
  //I'm using Subject NOT to hold a value BUT to trigger functions on changes:

  constructor() { }

  setInitialItems(response) {
    this.loadedData = response.results;
  }

  setAnotherItems(response, category:string) {
    this.loadedData = response.results;
    this.loadedCategory = category;
    this.dataChanged();
  }

  dataChanged() {
    this.loadedDataChanged.next();
  }

  getItems() {
    return this.loadedData;
  }

  getCategory() {
    return this.loadedCategory;
  }

  getHeaders(category:string) {
    switch (category) {
      case "films": return this.headers.films;
      case "people": return this.headers.people;
      case "planets": return this.headers.planets;
      case "species": return this.headers.species;
      case "starships": return this.headers.starships;
      case "vehicles": return this.headers.vehicles;
      default: return this.headers.films;
    }
  }

  onDelete(index) {
    this.loadedData.splice(index, 1);

    let _filteredArray = this.filteredData.getValue();

    _filteredArray.splice(index,1);

    this.filteredData.next(_filteredArray);
  }

  onFilter(searchString:string) {
    const searchText = searchString;

    if(searchText !== "") {

      const filteredArray = this.loadedData.filter( item => {
        this.arrayItemsToFilter = item;
        if(this.arrayItemsToFilter.title) {
          return this.arrayItemsToFilter.title.toLowerCase().includes(searchText.toLowerCase())
        }else{
          return this.arrayItemsToFilter.name.toLowerCase().includes(searchText.toLowerCase())
        }
      })

      this.filteredData.next(filteredArray);
      this.filterString.next(searchText);
    } else {
      this.filteredData.next([]);
      this.filterString.next(searchText);
    }
  }

}
