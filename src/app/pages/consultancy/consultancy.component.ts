import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { AddconsultancyComponent } from '../addconsultancy/addconsultancy.component';

@Component({
  selector: 'app-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.scss']
})
export class ConsultancyComponent implements OnInit {

  consult:any
  consultancy:any

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getConsultancy().subscribe((res: any)=>{
      console.log(res)
      this.consult=res
      this.consultancy=this.consult.data
    });
  }
openmodal(){
    let modal = this.dialog.open(AddconsultancyComponent, {
      width: '600px'
    })
  }
}
