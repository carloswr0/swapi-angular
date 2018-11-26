import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.less']
})
export class FilmsComponent implements OnInit {
  @Input() localItems:any;
  @Input() listHeaders:any;
  @Input() filteredItems:any;
  @Input() searchString:string;
  @Input() category:string;

  constructor(private storageService: StorageService) {}
  ngOnInit() {
  }

  onDeleteFromList(index) {
    this.storageService.onDelete(index);
  }
}
