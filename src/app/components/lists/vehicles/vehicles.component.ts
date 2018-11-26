import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.less']
})
export class VehiclesComponent implements OnInit {
  @Input() localItems:any;
  @Input() listHeaders:any;
  @Input() filteredItems:any;
  @Input() searchString:string;

  constructor(private storageService: StorageService) {}
  ngOnInit() {
  }

  onDeleteFromList(index) {
    console.log(index);
    this.storageService.onDelete(index);
  }
}
