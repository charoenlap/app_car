import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  datahelp:any;
  constructor(public api: RestApiService) {
    this.api.getdata('information/help').subscribe(
      res=>{
        this.datahelp = res;
      },err=>{
        console.log(err);
      }
    );
  }

  ngOnInit() {
  }

}
