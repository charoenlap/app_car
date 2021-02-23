import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileSettingPageRoutingModule } from './profile-setting-routing.module';

import { ProfileSettingPage } from './profile-setting.page';
import { ImagePicker } from '@ionic-native/image-picker/ngx';	

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileSettingPageRoutingModule
  ],
  providers: [
  	ImagePicker
  ],
  declarations: [ProfileSettingPage]
})
export class ProfileSettingPageModule {}
