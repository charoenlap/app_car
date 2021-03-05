import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

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


  cardata_detail:any;
  car_mile:any;
  car_price:any;
  car_label:any;
  car_color:any;
  car_detail:any;
  car_images:any;
  car_brand:any;
  car_type_id:any;
  car_cc:any;
  car_year:any;
  car_gear:any;
  car_model:any;
  sub_model:any;
  car_body:any;
  token:any;

  title:any;
  val_brand:any;
  val_gen:any;

  type_id:any;
  brand_id:any;
  generation_id:any;
  face_id:any;
  model_id:any;
  year_id:any;
  cc_id:any;
  gear_id:any;
  mile:any;
  color:any;
  price:any;
  license:any;
  detail:any;
  image:any;
  // todo:any;
  todo = {};
  constructor(public api:RestApiService,public route:ActivatedRoute,private storage:Storage) {
    this.car_id = this.route.snapshot.paramMap.get('id');
    this.api.getdata('cars/getCarDetail&id='+this.car_id).subscribe(
      res=>{
        // console.log(res);
        // this.cardata_detail = res;
        // this.car_mile = this.cardata_detail.mileage;
        // this.car_price = this.cardata_detail.price;
        // this.car_label = this.cardata_detail.label;
        // this.car_color = this.cardata_detail.color;
        // this.car_detail = this.cardata_detail.detail;
        // this.car_images = this.cardata_detail.images;
        // this.car_brand = this.cardata_detail.Car_band_id;
        // this.car_type_id = this.cardata_detail.Car_type_id;
        // this.car_cc = this.cardata_detail.power;
        // this.car_year = this.cardata_detail.year;
        // this.car_gear = this.cardata_detail.gear.id;
        // this.car_model = this.cardata_detail.Car_model_id;
        // this.sub_model = this.cardata_detail.Car_submodel_id;
        // this.car_body = this.cardata_detail.Car_body_id;
        this.car_mile = res.mileage;
        this.car_price = res.price;
        this.car_label = res.label;
        this.car_color = res.color;
        this.car_detail = res.detail;
        this.car_images = res.images;
        this.car_brand = res.Car_band_id;
        this.car_type_id = res.Car_type_id;
        this.car_cc = res.power;
        this.car_year = res.year;
        this.car_gear = res.gear.id;
        this.car_model = res.Car_model_id;
        this.sub_model = res.Car_submodel_id;
        this.car_body = res.Car_body_id;

        this.api.getdata('cars/getListType').subscribe(
          res=>{ 
            this.listtype = res;
          }
        )
        this.api.getdata('cars/getListBand').subscribe(
          res=>{
            this.listbrand = res;
          }
        )
        this.api.getdata('cars/getListYear').subscribe(
          res=>{
            this.listyear = res;
          }
        )
        this.api.getdata('cars/getListCC').subscribe(res=>{this.listcc = res;});
        this.api.getdata('cars/getListGear').subscribe(res=>{this.listgear = res;});
        this.api.getdata('cars/getLlistGeneration&brand_id='+this.car_brand).subscribe(res=>{this.listgen = res;});
        this.api.getdata('cars/getListFace&brand_id='+this.car_brand+'&model_id='+this.car_model).subscribe(res=>{this.listface = res;});
        this.api.getdata('cars/getListModel&brand_id='+this.car_brand+'&model_id='+this.car_model).subscribe(res=>{this.listmodel = res;});

        this.todo = {
          type_id:this.car_type_id,
          brand_id:this.car_brand,
          generation_id:this.car_model,
          face_id:this.car_body,
          model_id:this.sub_model,
          year_id:this.car_year,
          cc_id:this.car_cc,
          gear_id:this.car_gear,
          mile:this.car_mile,
          color:this.car_color,
          price:this.car_price,
          license:this.car_label,
          detail:this.car_detail,
          image:this.car_images
        }
      }
    );
  }

  ngOnInit() {
  }
  
  editForm(form:any){
    this.storage.get('token').then((data)=>{
      this.token = data;
      this.api.getdata('cars/getBand&id='+form.value.brand_id).subscribe(res=>{
        this.val_brand = res;
        this.api.getdata('cars/getGeneration&id='+form.value.generation_id).subscribe(res=>{
          this.val_gen = res;
          this.title = form.value.year_id+" "+this.val_brand.text+" "+this.val_gen.text;
          this.api.getdata('cars/editCar&token='+this.token+'&id='+this.car_id+'&title='+this.title+'&type_id='+form.value.type_id+'&brand_id='+form.value.brand_id+'&generation_id='+form.value.generation_id+'&face_id='+form.value.face_id+'&model_id='+form.value.model_id+'&year_id='+form.value.year_id+'&cc_id='+form.value.cc_id+'&gear_id='+form.value.gear_id+'&color='+form.value.color+'&mile='+form.value.mile+'&license='+form.value.license+'&detail='+form.value.detail+'&price='+form.value.price+'&image='+form.value.image).subscribe(
            res=>{
              console.log(res);
            },err=>{
              console.log(err);
            }
          );
        });
      });
    });
  }
}
