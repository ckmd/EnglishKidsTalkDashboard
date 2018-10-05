import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
	private url = 'http://ekita-api.herokuapp.com/api/items';
    
    constructor(private http : HttpClient){
        // this.getItems().subscribe(data => {
        //     console.log(data)
        // });
    }
    public getItems(): Observable<Item[]>{
    	return this.http.get<Item[]>(this.url);
    }
        createItem(item: Item) {
        return this.http.post<Item[]>(this.url, item);
  }

    deleteItem(id: number) {
        return this.http.delete(this.url + '/' + id);
  }
}
