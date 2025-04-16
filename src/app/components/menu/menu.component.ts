import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu.service';
import { Menu, MenuCategory } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MenuComponent implements OnInit {
  selectedMenuType: 'cafeteria' | 'cena' = 'cafeteria';
  currentMenu: Menu | undefined;
  expandedCategories: Set<number> = new Set();

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(): void {
    this.menuService.getMenuByType(this.selectedMenuType).subscribe(menu => {
      this.currentMenu = menu;
      this.expandedCategories.clear();
    });
  }

  toggleMenuType(): void {
    this.selectedMenuType = this.selectedMenuType === 'cafeteria' ? 'cena' : 'cafeteria';
    this.loadMenu();
  }

  toggleCategory(categoryId: number): void {
    if (this.expandedCategories.has(categoryId)) {
      this.expandedCategories.delete(categoryId);
    } else {
      this.expandedCategories.add(categoryId);
    }
  }

  isCategoryExpanded(categoryId: number): boolean {
    return this.expandedCategories.has(categoryId);
  }
}
