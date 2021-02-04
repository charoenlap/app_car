import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.page.html',
  styleUrls: ['./car-add.page.scss'],
})
export class CarAddPage implements OnInit {
  listtype:any;
  listbrand:any;
  listgen:any;
  listface:any;
  listyear:any;
  listcc:any;
  listmodel:any;
  listgear:any;
  constructor(public api:RestApiService) {
    this.api.getdata('cars/getListType').subscribe(res=>{this.listtype = res;});
    this.api.getdata('cars/getListBand').subscribe(res=>{this.listbrand = res;});
    this.api.getdata('cars/getLlistGeneration').subscribe(res=>{this.listgen = res;});
    this.api.getdata('cars/getListFace').subscribe(res=>{this.listface = res;});
    this.api.getdata('cars/getListYear').subscribe(res=>{this.listyear = res;});
    this.api.getdata('cars/getListCC').subscribe(res=>{this.listcc = res;});
    this.api.getdata('cars/getListModel').subscribe(res=>{this.listmodel = res;});
    this.api.getdata('cars/getListGear').subscribe(res=>{this.listgear = res;});
  }

  ngOnInit() {
  }

}
