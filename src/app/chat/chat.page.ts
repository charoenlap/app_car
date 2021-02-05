import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  listcontact:any;
  facebook:any;
  mail:any;
  line:any;
  constructor(public api: RestApiService) {
    this.api.getdata('information/contact').subscribe(res => {
      this.listcontact = res;
      this.facebook = this.listcontact.facebook;
      this.mail = this.listcontact.mail;
      this.line = this.line;
    }, err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
