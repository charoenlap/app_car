import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.page.html',
  styleUrls: ['./profile-setting.page.scss'],
})
export class ProfileSettingPage implements OnInit {
  dataedit:any;
  
  constructor(public api:RestApiService,private storage: Storage,) {
    
  }

  ngOnInit() {
  }
  async profileedit(image:any,type:any,name:any,lname:any,no_card:any,email:any,phone:any,tel:any,line:any){
    this.api.getdata('profile/editProfile&image='+image+'&type='+type+'&name='+name+'&lname='+lname+'&no_card='+no_card+'&email='+email+'&phone='+phone+'&tel='+tel+'&line='+line).subscribe(
      res=>{
        this.dataedit = res;
        console.log(this.dataedit);
      },err=>{
        console.log(err);
      }
    );
  }
}
