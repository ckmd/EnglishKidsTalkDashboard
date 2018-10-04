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
    // getItems(){
    // 	return[
    // 	{"id":2,
    // 	"item_category_id":1,
    // 	"name":"Topi Sombrero",
    // 	"item_desc":"Topi ajaib squidward",
    // 	"star":123,
    // 	"image":"https://farm8.static.flickr.com/7665/17161058117_46d594da68_b.jpg",
    // 	"x_coordinate":123,
    // 	"y_coordinate":123,
    // 	"createdAt":"2018-10-03T15:31:40.963Z",
    // 	"updatedAt":"2018-10-03T15:31:40.963Z",
    // 	"itemCategory":null},
    // 	 {"id":3,
    // 	"item_category_id":1,
    // 	"name":"Topi Sombrero baru",
    // 	"item_desc":"Topi ajaib squidward",
    // 	"star":123,
    // 	"image":"https://farm8.static.flickr.com/7665/17161058117_46d594da68_b.jpg",
    // 	"x_coordinate":123,
    // 	"y_coordinate":123,
    // 	"createdAt":"2018-10-03T15:31:40.963Z",
    // 	"updatedAt":"2018-10-03T15:31:40.963Z",
    // 	"itemCategory":null}
    // 	{"id":2,
    // 	"item_category_id":1,
    // 	"name":"Topi Sombrero baru sekali",
    // 	"item_desc":"Topi ajaib squidward",
    // 	"star":123,
    // 	"image":"https://farm8.static.flickr.com/7665/17161058117_46d594da68_b.jpg",
    // 	"x_coordinate":123,
    // 	"y_coordinate":123,
    // 	"createdAt":"2018-10-03T15:31:40.963Z",
    // 	"updatedAt":"2018-10-03T15:31:40.963Z",
    // 	"itemCategory":null},
    // 	 {"id":3,
    // 	"item_category_id":1,
    // 	"name":"Topi Sombrero baru baru sekali",
    // 	"item_desc":"Topi ajaib squidward",
    // 	"star":123,
    // 	"image":"https://farm8.static.flickr.com/7665/17161058117_46d594da68_b.jpg",
    // 	"x_coordinate":123,
    // 	"y_coordinate":123,
    // 	"createdAt":"2018-10-03T15:31:40.963Z",
    // 	"updatedAt":"2018-10-03T15:31:40.963Z",
    // 	"itemCategory":null}
    // ];
    // }
}
