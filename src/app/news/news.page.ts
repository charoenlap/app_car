import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  constructor() { }
  	new = [
		{img: 'assets/images/banner/banner.jpg'},
		{img: 'assets/images/banner/banner.jpg'},
		{img: 'assets/images/banner/banner.jpg'}
	];

  ngOnInit() {
  }

}
