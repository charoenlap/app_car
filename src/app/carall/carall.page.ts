import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carall',
  templateUrl: './carall.page.html',
  styleUrls: ['./carall.page.scss'],
})
export class CarallPage implements OnInit {

  constructor() { }

  cars = [
  	{car: 'Jazz 01'},
  	{car: 'Jazz 02'},
  	{car: 'Jazz 03'},
  	{car: 'Jazz 04'},
  	{car: 'Jazz 05'},
  	{car: 'Jazz 06'},
  ]

  ngOnInit() {
  }

}
