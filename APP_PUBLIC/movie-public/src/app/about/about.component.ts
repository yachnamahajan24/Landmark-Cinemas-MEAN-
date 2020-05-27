import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.comonent.css'],
  
})
export class AboutComponent implements OnInit {

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
