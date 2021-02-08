import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.page.html',
  styleUrls: ['./announce.page.scss'],
})
export class AnnouncePage implements OnInit {
  listcar:any;
  constructor(public api: RestApiService) {
    this.api.getdata('announce/getListCars').subscribe(
      res=>{
        this.listcar = res;
      },err=>{
        console.log(err);
      }
    );
  }
  ngOnInit() {
  }
}
