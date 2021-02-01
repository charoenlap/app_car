import { Component } from '@angular/core';
import { RestApiService } from '../rest-api.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	banner:any;
	brand:any;
  	constructor(public api: RestApiService) {
		this.api.getdata('information/getListBanner').subscribe(res=>{
			this.banner = res;
		},err=> {
			console.log(err);
		});
		this.api.getdata('cars/getListCarByBand').subscribe(res=>{this.brand = res;},err=>{console.log(err);});
	}
}
