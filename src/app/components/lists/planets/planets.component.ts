import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.less']
})
export class PlanetsComponent implements OnInit {
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
