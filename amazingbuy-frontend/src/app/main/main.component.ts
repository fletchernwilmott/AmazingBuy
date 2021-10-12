import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 4, rows: 1, color: '#233D53' },
    { text: 'Two', cols: 1, rows: 8, color: '#064B73' },
    { text: 'Three', cols: 3, rows: 8, color: '#F9F3E6' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
