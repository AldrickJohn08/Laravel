import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addhei',
  templateUrl: './addhei.component.html',
  styleUrls: ['./addhei.component.scss']
})
export class AddheiComponent implements OnInit {
  
  name:any
  address:any
  website:any
  number:any
  email:any
  
  constructor() { }

  ngOnInit(): void {
  }
  high(){
    console.log(this.name)
    console.log(this.address)
    console.log(this.website)
    console.log(this.number)
    console.log(this.email)
}
}
