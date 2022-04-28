import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddmsmeComponent } from 'src/app/dialogs/addmsme/addmsme.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-msme',
  templateUrl: './msme.component.html',
  styleUrls: ['./msme.component.scss']
})
export class MsmeComponent implements OnInit {

msme:any
micro:any

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getMicro().subscribe((res: any)=>{
      console.log(res)
      this.msme=res
      this.micro=this.msme.data
    })
  }
  openmodal(){
    let modal = this.dialog.open(AddmsmeComponent, {
      width: '600px'
    })
  }
}
