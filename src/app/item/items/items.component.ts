import { Component, OnInit } from '@angular/core';
import { Item } from '../../model/Item';
import { ItemsService } from '../../service/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

	public items =[];

   constructor(private itemsService: ItemsService) { }
   // constructor (private itemsService : ItemsService, private router : Router){}

  ngOnInit() {
    this.itemsService.getItems()
    .subscribe(data => this.items = data);
    // this.items = this.itemsService.getItems();
  }
    deleteItem(item: Item): void {
    this.itemsService.deleteItem(item.id)
      .subscribe( data => {
        this.items = this.items.filter(u => u !== item);
      });
  }
}