import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buy-service',
  templateUrl: './buy-service.page.html',
  styleUrls: ['./buy-service.page.scss'],
})
export class BuyServicePage implements OnInit {
  listcoin:any;
  buycoinid:any;
  status_detail:any;
  constructor(public api: RestApiService,private storage: Storage,public route: Router) {
    this.api.getdata('buyService/listCoin').subscribe(
      res=>{this.listcoin = res;},
      err=>{console.log(err);}
    );
  }

  ngOnInit() {
  }
  async buycoin(idcoin:any) {
    this.api.getdata('buyService/buyCoin&id='+idcoin).subscribe(
      res=>{
        this.buycoinid = res;
        if(this.buycoinid.result == 'success'){
          this.status_detail = this.buycoinid.result;
        }
      },err=>{
        console.log(err);
      }
    );
  }
}
