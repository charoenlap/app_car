import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-save',
  templateUrl: './save.page.html',
  styleUrls: ['./save.page.scss'],
})
export class SavePage implements OnInit {
  listcar:any;
  token:any;
  constructor(public api: RestApiService,private storage:Storage) {
    this.storage.get('token').then((data)=>{
      this.token = data;
      this.api.getdata('cars/getListWishlist&token='+this.token).subscribe(
        res=>{
          this.listcar = res;
        }
      );
    });
  }

  ngOnInit() {
  }

}
