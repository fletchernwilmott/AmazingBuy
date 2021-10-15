import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../service/category';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  categories!: Category[];
  id!: number;
  constructor(private cs: CategoryService, private router: Router) {}
  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories() {
    this.cs.getAllCategories().subscribe((res) => (this.categories = res));
  }

  handleTabClick(id: number) {
    this.router.navigate(['home', id]);
  }
}
