import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.comonent.css'],
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public pageContent = {
    header: {
      title:'',
      strapline:''
    },
    content : 'Landmark Cinemas offers a wide variety of alternative content, best experienced on the BIG SCREEN! From individual titles to series like the MET Opera.'
  };


}
