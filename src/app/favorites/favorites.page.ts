import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  listcar:any;
  car_id:any;
  addwishlist:any;
  constructor(public api: RestApiService, public router: ActivatedRoute) {
    this.api.getdata('cars/getListWishlist').subscribe(
      res=>{
        this.listcar = res;
      },err=>{
        console.log(err);
      }
    );
    this.car_id = this.router.snapshot.paramMap.get('id');
    this.api.getdata('cars/addWishlist&car_id='+this.car_id).subscribe(
      res=>{
        this.addwishlist = res;
        console.log(this.addwishlist);
      },err=>{
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
