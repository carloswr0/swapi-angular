import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.less']
})
export class SearchbarComponent implements OnInit {
  filterString:string = "";

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  onType() {
    this.storageService.onFilter(this.filterString);
  }

}
