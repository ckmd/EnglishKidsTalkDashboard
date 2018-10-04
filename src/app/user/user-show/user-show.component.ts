import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {

	public users = [];
  constructor(private userService : UserService) {
   }

  ngOnInit() {
  	this.userService.getUsers()
  	.subscribe(data => this.users = data);
  }

}
