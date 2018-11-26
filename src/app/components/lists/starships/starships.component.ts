import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.less']
})
export class StarshipsComponent implements OnInit {
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
