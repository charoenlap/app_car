import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-carall',
  templateUrl: './carall.page.html',
  styleUrls: ['./carall.page.scss'],
})
export class CarallPage implements OnInit {

  listcar:any;
  list:any;
  token:any;
  constructor(private storage: Storage,public api: RestApiService) {
    this.storage.get('token').then((data)=>{
      this.token = data;
    });
    this.api.getdata('cars/getListCarall').subscribe(
      res=>{
        this.list = res;
        this.listcar = this.list.cars;
        // console.log(this.listcar);
      },err=>{
        console.log(err);
      }
    );
  }
  ngOnInit() {
  }

}
