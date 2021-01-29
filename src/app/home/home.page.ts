import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
	brands = [
		{img: 'assets/images/logo/honda-logo-1700x1150.png',link: 'searchcar'},
		{img: 'assets/images/logo/Mitsubishi-logo-2000x2500.png',link: 'searchcar'},
		{img: 'assets/images/logo/Mercedes-Benz-logo-2011-1920x1080.png',link: 'searchcar'},
		{img: 'assets/images/logo/lamborghini-logo-1000x1100.png',link: 'searchcar'},
		{img: 'assets/images/logo/Suzuki-logo-5000x2500.png',link: 'searchcar'},
		{img: 'assets/images/logo/Chevrolet-logo-2013-2560x1440.png',link: 'searchcar'},
		{img: 'assets/images/logo/ford-logo-2017.png',link: 'searchcar'},
		{img: 'assets/images/logo/Jeep-logo-green-3840x2160.png',link: 'searchcar'},
		{img: 'assets/images/logo/Kia-logo-2560x1440.png',link: 'searchcar'}
	];
}
