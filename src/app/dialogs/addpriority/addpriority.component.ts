import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpriority',
  templateUrl: './addpriority.component.html',
  styleUrls: ['./addpriority.component.scss']
})
export class AddpriorityComponent implements OnInit {

  type:any
  sector:any
  location:any

  constructor() { }

  ngOnInit(): void {
  }
micro(){
    console.log(this.type)
    console.log(this.sector)
    console.log(this.location)
}
}
