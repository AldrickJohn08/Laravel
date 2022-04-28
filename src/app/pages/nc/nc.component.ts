import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { AddnegosyoComponent } from '../addnegosyo/addnegosyo.component';

@Component({
  selector: 'app-nc',
  templateUrl: './nc.component.html',
  styleUrls: ['./nc.component.scss']
})
export class NcComponent implements OnInit {

nc:any
negosyo:any

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getNegosyo().subscribe((res: any)=>{
      console.log(res)
      this.nc=res
      this.negosyo=this.nc.data
    });
  }
  openmodal(){
    let modal = this.dialog.open(AddnegosyoComponent, {
      width: '600px'
    })
  }
}
