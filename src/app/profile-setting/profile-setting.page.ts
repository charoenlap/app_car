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
  token:any;
  status_detail:any;
  constructor(public api:RestApiService,private storage: Storage,) {
    this.storage.get('token').then((data) => {
      this.token = data;
    });
  }

  ngOnInit() {
  }
  async profileedit(token:any,image:any,type:any,name:any,lname:any,no_card:any,email:any,phone:any,tel:any,line:any){
    this.api.getdata('profile/editProfile&token='+token+'&image='+image+'&type='+type+'&name='+name+'&lname='+lname+'&no_card='+no_card+'&email='+email+'&phone='+phone+'&tel='+tel+'&line='+line).subscribe(
      res=>{
        this.dataedit = res;
        if(this.dataedit.result == "success"){
          this.status_detail = this.dataedit.desc;
        }
      },err=>{
        console.log(err);
      }
    );
  }
}
