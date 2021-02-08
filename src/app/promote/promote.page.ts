import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-promote',
  templateUrl: './promote.page.html',
  styleUrls: ['./promote.page.scss'],
})
export class PromotePage implements OnInit {
  car_id:any;
  status_promote:any;
  txtresult:any;
  txtnamecar:any;
  txtcoin:any;
  constructor(public api:RestApiService,public route:ActivatedRoute) {
    this.car_id = this.route.snapshot.paramMap.get('id');
    this.api.getdata('announce/promoteCar&car_id='+this.car_id).subscribe(
      res=>{
        console.log(res);
        this.status_promote = res;
        this.txtresult = this.status_promote.result;
        this.txtnamecar = this.status_promote.name;
        this.txtcoin = this.status_promote.coin;
      },err=>{
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
