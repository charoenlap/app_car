import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-favorites-del',
  templateUrl: './favorites-del.page.html',
  styleUrls: ['./favorites-del.page.scss'],
})
export class FavoritesDelPage implements OnInit {
  car_id:any;
  datadel:any;
  constructor(public api:RestApiService,public route:Router,public router:ActivatedRoute) {
    this.car_id = this.router.snapshot.paramMap.get('id');
    this.api.getdata('cars/delCar&car_id='+this.car_id).subscribe(
      res=>{
        console.log(res);
        this.datadel = res;
        if(this.datadel.result == "success"){
          this.route.navigate(['/favorites']);
        };
      },err=>{
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
