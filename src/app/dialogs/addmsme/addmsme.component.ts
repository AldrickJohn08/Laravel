import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmsme',
  templateUrl: './addmsme.component.html',
  styleUrls: ['./addmsme.component.scss']
})
export class AddmsmeComponent implements OnInit {

  sector:any
  company:any
  address:any
  products:any
  oic:any
  email:any

  constructor() { }

  ngOnInit(): void {
  }
  micro(){
    console.log(this.sector)
    console.log(this.company)
    console.log(this.address)
    console.log(this.products)
    console.log(this.oic)
    console.log(this.email)
}
}
