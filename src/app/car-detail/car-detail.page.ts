import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.page.html',
  styleUrls: ['./car-detail.page.scss'],
})
export class CarDetailPage implements OnInit {

  cardetail:any;
  car_id:any;
  constructor(public api: RestApiService,public route: ActivatedRoute) { 
  	this.car_id = this.route.snapshot.paramMap.get('id');
  	this.api.getdata('cars/getCarDetail&car_id=1').subscribe(res => {
      this.cardetail = res;
      // loading.dismiss();
      
    }, err => {
      console.log(err);
      // loading.dismiss();
    });
  }

  ngOnInit() {
  }

}
