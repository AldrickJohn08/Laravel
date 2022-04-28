import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddprogramsdialogComponent } from 'src/app/dialogs/addprogramsdialog/addprogramsdialog.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  result:any;
  program:any;

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.dataService.getData().subscribe((res: any) => {
      this.result=res
      this.program=this.result.data
      console.log(this.program)
    });
    
  }

  openmodal(){
    let modal = this.dialog.open(AddprogramsdialogComponent, {
      width: '600px'
    })
  }
}