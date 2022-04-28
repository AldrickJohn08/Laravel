import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { AddssfComponent } from '../addssf/addssf.component';

@Component({
  selector: 'app-ssf',
  templateUrl: './ssf.component.html',
  styleUrls: ['./ssf.component.scss']
})
export class SsfComponent implements OnInit {

ssf:any
shared:any

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getShared().subscribe((res: any)=>{
      console.log(res)
      this.ssf=res
      this.shared=this.ssf.data
    });
  }
  openmodal(){
    let modal = this.dialog.open(AddssfComponent, {
      width: '600px'
    })
  }
}
