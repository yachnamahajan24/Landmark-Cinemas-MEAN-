import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: [
  ],
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageContent = {
    header: {
      title: 'My Movie List',
      body: 'Here is a list of the movies playing'
    }
  };

}
