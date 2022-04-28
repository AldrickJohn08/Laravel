import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddeconomicComponent } from 'src/app/dialogs/addeconomic/addeconomic.component';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.component.html',
  styleUrls: ['./economic.component.scss']
})
export class EconomicComponent implements OnInit {

eco:any
economic:any

  constructor(private router:Router, private dataService:DataService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.dataService.getEconomic().subscribe((res: any)=>{
      console.log(res)
      this.eco=res
      this.economic=this.eco.data
    });
  }
openmodal(){
  let modal = this.dialog.open(AddeconomicComponent, {
    width: '600px'
  })
}
}
