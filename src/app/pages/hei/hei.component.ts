import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddheiComponent } from 'src/app/dialogs/addhei/addhei.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-hei',
  templateUrl: './hei.component.html',
  styleUrls: ['./hei.component.scss']
})
export class HeiComponent implements OnInit {

hei:any
high:any

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getHigher().subscribe((res: any)=>{
      console.log(res)
      this.hei=res
      this.high=this.hei.data
    });
}
openmodal(){
  let modal = this.dialog.open(AddheiComponent, {
    width: '600px'
  })
}
}
