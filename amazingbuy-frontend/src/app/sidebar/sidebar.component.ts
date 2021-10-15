import { Component, OnInit } from '@angular/core';
import { Category } from '../service/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}

<<<<<<< HEAD
  categories!: Category[];

  constructor(private cs: CategoryService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.cs.getAllCategories().subscribe((res) => (this.categories = res));
  }

  //filter items by category
  onClick(){}


=======
  ngOnInit(): void {}
  handleClick() {}
>>>>>>> 6163c9c127987b4eb9379dfa890f98919849c3a5
}
