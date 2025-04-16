export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface MenuCategory {
  id: number;
  name: string;
  items: MenuItem[];
}

export interface Menu {
  id: number;
  name: string;
  type: 'cafeteria' | 'cena';
  categories: MenuCategory[];
} 