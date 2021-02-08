import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.page.html',
  styleUrls: ['./car-edit.page.scss'],
})
export class CarEditPage implements OnInit {
  listtype:any;
  listbrand:any;
  listgen:any;
  listface:any;
  listyear:any;
  listcc:any;
  listmodel:any;
  listgear:any;
  caredit:any;
  status_detail:any;
  car_id:any;
  constructor(public api:RestApiService,public route:ActivatedRoute) {
    this.car_id = this.route.snapshot.paramMap.get('id');
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
  async cardata(type_id:any,brand_id:any,generation_id:any,face_id:any,model_id:any,year_id:any,cc_id:any,gear_id:any,mile:any,color:any,price:any,license:any,detail:any,image:any){
    this.api.getdata('cars/editCar&type_id='+type_id+'&brand_id='+brand_id+'&generation_id='+generation_id+'&face_id='+face_id+'&model_id='+model_id+'&year_id='+year_id+'&cc_id='+cc_id+'&gear_id='+gear_id+'&mile='+mile+'&color='+color+'&price='+price+'&license='+license+'&detail='+detail+'&image='+image).subscribe(
      res=>{
        this.caredit = res;
        if(this.caredit.result == 'success'){
          this.status_detail = this.caredit.desc;
        }
      },err=>{
        console.log(err);
      }
    );
  }
}
