import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announce',
  templateUrl: './announce.page.html',
  styleUrls: ['./announce.page.scss'],
})
export class AnnouncePage implements OnInit {

  constructor() { }
  car = [
  	{img: 'assets/images/car/jazz.jpeg'},
  	{img: 'assets/images/car/jazz.jpeg'},
  	{img: 'assets/images/car/jazz.jpeg'}
  ];
  ngOnInit() {
  }

}
