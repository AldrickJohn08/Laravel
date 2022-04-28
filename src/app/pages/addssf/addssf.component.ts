import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addssf',
  templateUrl: './addssf.component.html',
  styleUrls: ['./addssf.component.scss']
})
export class AddssfComponent implements OnInit {

  facility:any
  cooperator:any
  address:any
  person:any
  number:any

  constructor() { }

  ngOnInit(): void {
  }
  share(){
    console.log(this.facility)
    console.log(this.cooperator)
    console.log(this.address)
    console.log(this.person)
    console.log(this.number)
}
}
