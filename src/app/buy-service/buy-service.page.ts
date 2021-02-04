import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-buy-service',
  templateUrl: './buy-service.page.html',
  styleUrls: ['./buy-service.page.scss'],
})
export class BuyServicePage implements OnInit {
  listcoin:any;
  constructor(public api: RestApiService) {
    this.api.getdata('buyService/listCoin').subscribe(
      res=>{this.listcoin = res;},
      err=>{console.log(err);}
    );
  }

  ngOnInit() {
  }

}
