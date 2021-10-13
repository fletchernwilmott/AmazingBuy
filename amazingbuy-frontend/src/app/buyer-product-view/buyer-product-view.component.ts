import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-buyer-product-view',
  templateUrl: './buyer-product-view.component.html',
  styleUrls: ['./buyer-product-view.component.css'],
})
export class BuyerProductViewComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 5, rows: 4, color: 'lightblue' },
    { text: 'Two', cols: 5, rows: 4, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 2, color: 'purple' },
  ];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  constructor() {}

  ngOnInit(): void {}
}
