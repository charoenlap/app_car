import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.page.html',
  styleUrls: ['./save.page.scss'],
})
export class SavePage implements OnInit {

  listcar:any;
  constructor(public api: RestApiService) {
    this.api.getdata('cars/getListWishlist').subscribe(
      res=>{
        this.listcar = res;
      }
    );
  }

  ngOnInit() {
  }

}
