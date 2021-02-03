import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  listcontact:any;
  constructor(public api: RestApiService) {
    this.api.getdata('information/contact').subscribe(res => {
      this.listcontact = res;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
