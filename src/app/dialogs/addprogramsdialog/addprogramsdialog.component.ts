import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-addprogramsdialog',
  templateUrl: './addprogramsdialog.component.html',
  styleUrls: ['./addprogramsdialog.component.scss']
})
export class AddprogramsdialogComponent implements OnInit {

  add:any
  user = new User();

  constructor(private route:Router, private dataService:DataService) { }

  ngOnInit(): void {
  }
    insertData(){
    this.dataService.insertData(this.user).subscribe(res=> {
      console.log(res);
    })
}
}
