import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, concatMap, mergeMap, switchMap } from 'rxjs/operators';
import { StorageService } from './storage.service';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Films } from '../models/films.model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  public _requestFinished: BehaviorSubject<any> = new BehaviorSubject<boolean>(false);
  //I'm using BehaviourSubject to hold a value:
  //Which is a boolean that checks if the request is done.

  constructor(
    private _http:HttpClient,
    private storageService: StorageService
  ) {}

  getLists(subject: string) {
    this._requestFinished.next(false);//Flag to false.
    const queryString = "https://swapi.co/api/" + subject.toLowerCase();//Query constructor.

    return this._http.get(queryString).pipe(map(res => res));
    //Returns an observable that is resolved with pipe & map.
  }

  onChangeCategory(category:string) {
    this._requestFinished.next(false);
    const results = this._http.get("https://swapi.co/api/" + category.toLowerCase());
    results.subscribe((res) => {
      this.storageService.setAnotherItems(res, category);
    });
  }

  getFilmsDetail(id, endpoint) {
    return this._http.get(`https://swapi.co/api/${endpoint}/${id}`);
  }

  getCharactersFilms(urls: string[]): Observable<string> {
    return from(urls).pipe(
      mergeMap(id =>
        <Observable<string>> this._http.get(id)
        )
    );
  }
}
