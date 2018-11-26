import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../services/requests.service';
import { StorageService } from '../../../services/storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  category:string = "films";        //Which category is going to be requested/rendered.
  localItems:Array<string> = [];   //Cached Items resulted from requests.
  filteredItems:Array<string> = [];//Filtered Items from localItems.
  listHeaders:Array<string> = [];  //Categories Headers to make up the Table Head tags. *Can be improved
  requestFinished:boolean = false; //Flag: Checks if the main request is done.
  searchString:string = "";        //Search String that filters localItems to filteredItems. (ClientSide)

  constructor(
    private requestService: RequestsService,
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.requestItems(); //Request the items.

    this.requestService._requestFinished.subscribe(res => this.requestFinished = res);
    //Setting up the subscription to get every RequestFinished value.

    this.storageService.loadedDataChanged.subscribe(val => this.getItemsFromService());
    //Setting up the subscription to get every LoadedDataChanged TRIGGERS.

    this.storageService.filteredData.subscribe(list => this.checkForFilter(list));
    //Setting up the subscription to get every filteredData entries.

    this.storageService.filterString.subscribe(res => this.searchString = res);
    //Setting up the subscription to get every filterString value.
  }

  requestItems() {
    //this function will only be called once, at component init.
    this.requestService.getLists(this.category).subscribe((response:any) => {
      //1. grabs items from API.

      this.storageService.setInitialItems(response);
      //2. saves them in a service.

      this.localItems = this.storageService.getItems();
      //3.1 grabs them back from service and set's them here.

      this.listHeaders = this.storageService.getHeaders(this.category);
      //3.2 also grabs the headers.

      this.requestService._requestFinished.next(true);
      //3.3 tells the service that the request is done and saved.
    });
  }

  getItemsFromService() {
    //this function will be called once at switching categories.

    this.localItems = this.storageService.getItems();
    //Grabs the new items, they we're already requested in another place. (header called them)

    this.category = this.storageService.getCategory();
    //Grabs the new category to render.

    this.listHeaders = this.storageService.getHeaders(this.category);
    //Grabs the new headers.

    this.requestService._requestFinished.next(true); //Request is done, render it.
    this.searchString = ""; //cleans the search string.
    this.filteredItems = []; //cleans the filtered items array.
  }

  checkForFilter(list){
    if(list.length > 0) {
      this.filteredItems = list;
    } else {
      this.filteredItems = [];
    }
  }

}
