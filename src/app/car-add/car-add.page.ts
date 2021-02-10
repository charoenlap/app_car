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
  caradd:any;
  status_detail:any;
  brand_id:any;
  model_id:any;
  constructor(public api:RestApiService) {
    this.api.getdata('cars/getListType').subscribe(res=>{this.listtype = res;});
    this.api.getdata('cars/getListBand').subscribe(res=>{this.listbrand = res;});
    this.api.getdata('cars/getListYear').subscribe(
      res=>{
        this.listyear = res;
      }
    );
    this.api.getdata('cars/getListCC').subscribe(res=>{this.listcc = res;});
    this.api.getdata('cars/getListGear').subscribe(res=>{this.listgear = res;});
  }
  getGen($event){
    this.brand_id = $event.target.value;
    this.api.getdata('cars/getLlistGeneration&brand_id='+this.brand_id).subscribe(res=>{this.listgen = res;});
  }
  getFace($event){
    this.model_id = $event.target.value;
    this.api.getdata('cars/getListFace&brand_id='+this.brand_id+'&model_id='+this.model_id).subscribe(res=>{this.listface = res;});
    this.api.getdata('cars/getListModel&brand_id='+this.brand_id+'&model_id='+this.model_id).subscribe(res=>{this.listmodel = res;});
  }
        
  ngOnInit() {
  }
  async cardata(type_id:any,brand_id:any,generation_id:any,face_id:any,model_id:any,year_id:any,cc_id:any,gear_id:any,mile:any,color:any,price:any,license:any,detail:any,image:any){
    this.api.getdata('cars/addCar&type_id='+type_id+'&brand_id='+brand_id+'&generation_id='+generation_id+'&face_id='+face_id+'&model_id='+model_id+'&year_id='+year_id+'&cc_id='+cc_id+'&gear_id='+gear_id+'&mile='+mile+'&color='+color+'&price='+price+'&license='+license+'&detail='+detail+'&image='+image).subscribe(
      res=>{
        this.caradd = res;
        if(this.caradd.result == 'success'){
          this.status_detail = this.caradd.result;
        }
      },err=>{
        console.log(err);
      }
    );
  }

}
