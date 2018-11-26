import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.less']
})
export class SpeciesComponent implements OnInit {
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
