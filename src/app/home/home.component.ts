import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  navigateAndDisplay() {
    // console.log('We are here');
    this.route.navigate(['/view', this.name]);
  }

}
