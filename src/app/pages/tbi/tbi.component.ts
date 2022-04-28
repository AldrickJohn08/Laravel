import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { AddtbiComponent } from '../addtbi/addtbi.component';

@Component({
  selector: 'app-tbi',
  templateUrl: './tbi.component.html',
  styleUrls: ['./tbi.component.scss']
})
export class TbiComponent implements OnInit {

  tbi:any
  techno:any

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getTechnology().subscribe((res: any)=>{
      console.log(res)
      this.tbi=res
      this.techno=this.tbi.data
    });
  }
  openmodal(){
    let modal = this.dialog.open(AddtbiComponent, {
      width: '600px'
    })
  }
}
