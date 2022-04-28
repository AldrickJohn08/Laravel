import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  title="Welcome to LINC Calabarzon"
  username:any
  password:any
  result:any
  users:any
  constructor(private router:Router, private api:DataService) { }

  ngOnInit(): void {
    this.api.getData().subscribe((res) => {
      this.users=res
      console.log(this.users.results)
    });
  }
  onsubmit(){
    let data={
      username:this.username, password:this.password
    }
    this.api.login(data).subscribe((res) => {
      this.result=res
      if (this.result.status == true) {
        this.router.navigate(['/admin/programs'])
      } else {
      alert(this.result.message)
      }
    });
  }
}
