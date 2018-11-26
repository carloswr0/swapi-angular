import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-filmdetails',
  templateUrl: './filmdetails.component.html',
  styleUrls: ['./filmdetails.component.less']
})
export class FilmdetailsComponent implements OnInit {
  requestFinished = false;
  requestFinishedChars = false;
  subject: string = "";
  idToSearch: number;
  requestedData: any;
  characters:any = [];

  constructor(private route: ActivatedRoute, private requestService: RequestsService) {}

  ngOnInit() {
    this.subject = this.route.snapshot.params['category'];
    this.idToSearch = this.route.snapshot.params['id'];

    this.requestService.getFilmsDetail(this.idToSearch, this.subject).subscribe((res: any) => {
      this.requestedData = res;
      this.requestFinished = true;


      this.getItemsForIds(this.requestedData.characters);



    });


  }

  getItemsForIds(ids) {
    this.requestService
      .getCharactersFilms(ids)
      .subscribe(item => {
        this.characters.push(item);
      });
      this.requestFinishedChars = true;
  }

}
