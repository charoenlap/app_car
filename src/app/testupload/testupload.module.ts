import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestuploadPageRoutingModule } from './testupload-routing.module';

import { TestuploadPage } from './testupload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestuploadPageRoutingModule
  ],
  declarations: [TestuploadPage]
})
export class TestuploadPageModule {}
