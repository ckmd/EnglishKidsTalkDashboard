import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
	url = 'http://ekita-api.herokuapp.com/api/items';

    constructor(private http: HttpClient){}
    getItems(){
    	return this.http.get(`${this.url}`);
    }
}
