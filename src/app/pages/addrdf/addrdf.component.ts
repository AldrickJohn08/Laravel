import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addrdf',
  templateUrl: './addrdf.component.html',
  styleUrls: ['./addrdf.component.scss']
})
export class AddrdfComponent implements OnInit {

  name:any
  sector:any
  address:any
  office:any
  email:any
  contact:any

  constructor() { }

  ngOnInit(): void {
  }
rdf(){
    console.log(this.name)
    console.log(this.sector)
    console.log(this.address)
    console.log(this.office)
    console.log(this.email)
    console.log(this.contact)
  }
}
