import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addeconomic',
  templateUrl: './addeconomic.component.html',
  styleUrls: ['./addeconomic.component.scss']
})
export class AddeconomicComponent implements OnInit {

  type:any
  sector:any
  location:any

  constructor() { }

  ngOnInit(): void {
  }
  economic(){
    console.log(this.type)
    console.log(this.sector)
    console.log(this.location)
}
}
