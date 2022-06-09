import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showImage:boolean = true; 

  image:string ="https://images.unsplash.com/photo-1534371020656-6b85825f2b1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tYW5pYXxlbnwwfHwwfHw%3D&w=1000&q=80";

  afiseazaimaginea() {
    this.showImage = !this.showImage;}

  constructor() { }

  ngOnInit(): void {
  }

}
