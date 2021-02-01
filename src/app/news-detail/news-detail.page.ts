import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  news:any;
  news_id:any;
  constructor(public api: RestApiService,public route: ActivatedRoute) { 
  	this.news_id = this.route.snapshot.paramMap.get('id');
  	this.api.getdata('information/getNewsDetail&news_id='+this.news_id).subscribe(res => {
      this.news = res;
      // loading.dismiss();
      
    }, err => {
      console.log(err);
      // loading.dismiss();
    });
  }

  ngOnInit() {
  }

}
