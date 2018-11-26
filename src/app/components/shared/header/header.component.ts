import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../services/requests.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  dropdownEnabled = true;
  constructor(private requestService: RequestsService) { }

  ngOnInit() {
    this.requestService._requestFinished.subscribe(res => this.dropdownEnabled = res);
  }

  onChangeCategory(category:string) {
    this.requestService.onChangeCategory(category);
  }

}
