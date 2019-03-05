import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  breakpoint = 1;

  ngOnInit() {
    // this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
  }

  onResize(event) {
    // this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
