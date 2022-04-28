import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddpriorityComponent } from 'src/app/dialogs/addpriority/addpriority.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-priority',
  templateUrl: './priority.component.html',
  styleUrls: ['./priority.component.scss']
})
export class PriorityComponent implements OnInit {

prio:any
priority:any

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getSector().subscribe((res: any)=>{
      console.log(res)
      this.prio=res
      this.priority=this.prio.data
    });
  }
  openmodal(){
    let modal = this.dialog.open(AddpriorityComponent, {
      width: '600px'
    })
  }
}
