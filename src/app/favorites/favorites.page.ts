import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  listcar:any;
  token:any;
  car_id:any;
  constructor(public api: RestApiService, public router: ActivatedRoute,private storage: Storage) {
    this.storage.get('token').then((data)=>{
      this.token = data;
      this.api.getdata('cars/getListWishlist&token='+this.token).subscribe(
        res=>{
          this.listcar = res;
          // console.log(this.listcar);
        },err=>{
          console.log(err);
        }
      );
    });
  }
  async doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete(
        this.storage.get('token').then((data)=>{
          this.token = data;
          this.api.getdata('cars/getListWishlist&token='+this.token).subscribe(
            res=>{
              this.listcar = res;
            }
          );
        })
      );
    }, 2000);
  }

  ngOnInit() {
  }

}
