import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestuploadPage } from './testupload.page';

const routes: Routes = [
  {
    path: '',
    component: TestuploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestuploadPageRoutingModule {}
