import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public height: number;
  constructor() { }

  ngOnInit() {
    this.height = 100;
  }

  onResize(event) {
    // this.height += 1;
    // console.log('message');
  }
}
