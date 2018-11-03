import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserData: any = {
    username:'',
    password:''
  };

  // loginUserData = {}
  constructor(
    private router: Router,
    private ls : LoginService) { }

  ngOnInit() {
  }

  loginUser(){
    this.ls.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token',res.token)
        this.router.navigate(['/dashboard'])
      },
    err => console.log(err)
    )
//    console.log(this.loginUserData)
  }
}