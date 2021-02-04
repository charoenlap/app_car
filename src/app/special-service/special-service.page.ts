import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-special-service',
  templateUrl: './special-service.page.html',
  styleUrls: ['./special-service.page.scss'],
})
export class SpecialServicePage implements OnInit {
  listService:any;
  constructor(public api: RestApiService) {
    this.api.getdata('profile/listCoinHistory').subscribe(
      res=>{this.listService = res;},
      err=>{console.log(err);}
    );
  }

  ngOnInit() {
  }

}
