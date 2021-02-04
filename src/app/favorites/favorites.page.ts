import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  listcar:any;
  constructor(public api: RestApiService) {
    this.api.getdata('cars/getListWishlist').subscribe(
      res=>{
        this.listcar = res;
      },err=>{
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
