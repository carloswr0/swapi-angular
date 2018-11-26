import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.less']
})
export class PeopleComponent implements OnInit {
  @Input() localItems:any;
  @Input() listHeaders:any;
  @Input() filteredItems:any;
  @Input() searchString:string;

  constructor(private storageService: StorageService) {}
  ngOnInit() {
  }

  onDeleteFromList(index) {
    this.storageService.onDelete(index);
  }
}
