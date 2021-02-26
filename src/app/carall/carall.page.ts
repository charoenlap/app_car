import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carall',
  templateUrl: './carall.page.html',
  styleUrls: ['./carall.page.scss'],
})
export class CarallPage implements OnInit {

  listcar:any;
  list:any;
  token:any;
  page:any;
  pagePrev:any;
  pageNext:any;
  pageNumber:any;
  constructor(private storage: Storage,public api: RestApiService,public route:ActivatedRoute) {
    this.storage.get('token').then((data)=>{
      this.token = data;
    });
    this.pageNumber = this.route.snapshot.paramMap.get('id');
    this.api.getdata('cars/getListCarall&page='+this.pageNumber).subscribe(
      res=>{
        this.list = res;
        this.listcar = this.list.cars;
        this.page = this.list.page;
        this.pagePrev = this.list.page_prev;
        this.pageNext = this.list.page_next;
        // console.log(this.listcar);
      },err=>{
        console.log(err);
      }
    );
  }
  ngOnInit() {
  }
  nextpage(){

  }

}
