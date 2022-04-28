import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { AddrdfComponent } from '../addrdf/addrdf.component';

@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.scss']
})
export class RdfComponent implements OnInit {

rnd:any
research:any

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getResearch().subscribe((res: any)=>{
      console.log(res)
      this.rnd=res
      this.research=this.rnd.data
    });
  }
  openmodal(){
    let modal = this.dialog.open(AddrdfComponent, {
      width: '600px'
    })
  }
}
