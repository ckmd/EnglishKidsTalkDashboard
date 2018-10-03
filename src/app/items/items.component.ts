import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { ItemsService } from '../service/items.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

	selectedItem: Item;
	items: Item[];

 	printedOption: string;
	selectedOption: string;
 	selectedCategory: string;
 	selectedTopic: string;

  options = [
    { name: "easy", value: 1 },
    { name: "medium", value: 2 },
    { name: "hard", value: 3 }
  ]

  categories = [{name: "vocabulary"},{name: "speaking"},{name: "writing"}]
  topics = [{name: "animal"},{name: "furniture"},{name: "vehicle"}]

  //untuk mencetak option yang dipilih
  print() {
    this.printedOption = this.selectedOption;
  }

   // constructor(private itemService: ItemService) { }
   constructor (private itemsService : ItemsService, private router : Router){}

  ngOnInit() {
     this.getItems();
  }
  
  getItems(): void {
  	this.itemsService.getItems();
  }

//   add(selectedOption: string, selectedCategory: string, selectedTopic: string, title: string, answer: string, xp: number, image: string, sound: string): void {
//   title = title.trim();
//   if (!title) { return; }
//   this.itemService.addItem({ title } as Item)
//     .subscribe(item => {
//       this.items.push(item);
//     });
// }
}