import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Copyright English Kids Talks 2018';
  constructor(
    private login : LoginService
  ){}
  // @ViewChild('sidenav') sidenav: MatSidenav;

  // reason = '';

  // close(reason: string) {
  //   this.reason = reason;
  //   this.sidenav.close();
  // }
}
