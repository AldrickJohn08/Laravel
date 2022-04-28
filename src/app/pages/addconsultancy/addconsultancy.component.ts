import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addconsultancy',
  templateUrl: './addconsultancy.component.html',
  styleUrls: ['./addconsultancy.component.scss']
})
export class AddconsultancyComponent implements OnInit {

  name:any
  area:any
  specialty:any
  affiliation:any
  remarks:any
  province:any

  constructor() { }

  ngOnInit(): void {
  }
consul(){
    console.log(this.name)
    console.log(this.area)
    console.log(this.specialty)
    console.log(this.affiliation)
    console.log(this.remarks)
    console.log(this.province)
}
}
