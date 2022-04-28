import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtbi',
  templateUrl: './addtbi.component.html',
  styleUrls: ['./addtbi.component.scss']
})
export class AddtbiComponent implements OnInit {
  
  name:any
  sector:any
  address:any
  office:any
  email:any
  contact:any
  constructor() { }

  ngOnInit(): void {
  }
  tbi(){
    console.log(this.name)
    console.log(this.sector)
    console.log(this.address)
    console.log(this.office)
    console.log(this.email)
    console.log(this.contact)
  }
}
