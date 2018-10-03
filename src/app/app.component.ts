import { Component } from '@angular/core';
// import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/Map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-kita Admin Dashboard';
  // private apiUrl = 'http://ekita-api.herokuapp.com/api/items';
  // data: any = {};

  // constructor(private http: Http){
  // 	console.log('hello fellow user');
  // 	this.getContacts();
  // 	this.getData();
  // }

  // getData(){
  // 	return this.http.get(this.apiUrl)
  // 	.map((res: Response) => res.json())
  // }

  // getContacts(){
  // 	this.getData().subscribe(data => {
  // 		console.log(data);
  // 		this.data = data
  // 	})
  // }
}
