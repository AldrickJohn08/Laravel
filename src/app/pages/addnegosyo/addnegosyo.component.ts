import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addnegosyo',
  templateUrl: './addnegosyo.component.html',
  styleUrls: ['./addnegosyo.component.scss']
})
export class AddnegosyoComponent implements OnInit {

  address:any
  service:any
  contact:any
  position:any
  email:any
  telephone:any

  constructor() { }

  ngOnInit(): void {
  }
  negosyo(){
    console.log(this.address)
    console.log(this.service)
    console.log(this.contact)
    console.log(this.position)
    console.log(this.email)
    console.log(this.telephone)
  }
}
