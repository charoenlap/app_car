import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Storage } from '@ionic/storage';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.page.html',
  styleUrls: ['./profile-setting.page.scss'],
})
export class ProfileSettingPage implements OnInit {
  
  dataedit:any;
  token:any;
  status_detail:any;
  datauser:any;
  dataUserEdit:any;
  status_update:any;
  profile_photo:any;
  type:any;
  name:any;
  surname:any;
  id_card:any;
  phone:any;
  phone1:any;
  line:any;


  profile = {};
  // profile:dataUserDetail;

  constructor(public api:RestApiService,private storage: Storage,public route:Router) {
    this.storage.get('token').then((data) => {
      this.token = data;
      this.api.getdata('profile/getProfile&token='+this.token).subscribe(
        res=>{
          // console.log(res);
          this.datauser = res;
          this.profile = {
            profile_photo:this.datauser.Profile_photo,
            type:this.datauser.Type,
            name:this.datauser.Name,
            surname:this.datauser.Surname,
            id_card:this.datauser.Id_card,
            phone:this.datauser.Phone,
            phone1:this.datauser.Phone1,
            line:this.datauser.Line
          }
        },err=>{
          console.log(err);
        }
      );
    });
  }

  ngOnInit() {
  }
  profileEdit(form:any){
    this.storage.get('token').then((data)=>{
      this.token = data;
      this.api.getdata('profile/getProfile&token='+this.token).subscribe(
        res=>{
          this.dataUserEdit = res;
          // console.log(this.token);
          // this.api.getdata('profile/editProfile&token='+this.token+'&name='+form.value.name+'&surname='+form.value.surname+'&middle_name='+this.dataUserEdit.Middle_name+'&profile_photo='+form.value.Profile_photo+'&id_card='+form.value.id_card+'&id_card_photo='+this.dataUserEdit.Id_card_photo+'&name_card_photo='+this.dataUserEdit.Name_card_photo+'&sex='+this.dataUserEdit.Sex+'&birth_date='+this.dataUserEdit.Birth_date+'&company='+this.dataUserEdit.Company+'&company_description='+this.dataUserEdit.Company_description+'&company_phone='+this.dataUserEdit.Company_phone+'&company_photo='+this.dataUserEdit.Company_photo+'&company_image_map='+this.dataUserEdit.Company_image_map+'&company_google_map='+this.dataUserEdit.Company_google_map+'&address='+this.dataUserEdit.Address+'&state='+this.dataUserEdit.State+'&country='+this.dataUserEdit.Country+'&post_code='+this.dataUserEdit.Post_code+'&phone='+form.value.phone+'&phone1='+form.value.phone1+'&line='+form.value.line+'&fax='+this.dataUserEdit.Fax+'&mobile='+this.dataUserEdit.Mobile+'&email='+this.dataUserEdit.Email+'&email1='+this.dataUserEdit.Email1+'&website='+this.dataUserEdit.Website).subscribe(
          this.api.getdata('profile/editProfile&token='+this.token+'&profile_photo='+form.value.profile_photo+'&name='+form.value.name+'&surname='+form.value.surname+'&id_card='+form.value.id_card+'&phone='+form.value.phone+'&phone1='+form.value.phone1+'&line='+form.value.line).subscribe(
            res=>{
              // console.log(res);
              this.status_update = res;
              if(this.status_update.result == "success"){
                this.route.navigate(['/profile']);
              }
            },err=>{
              console.log(err);
            }
          );
        }
      )
    });
  }
}
