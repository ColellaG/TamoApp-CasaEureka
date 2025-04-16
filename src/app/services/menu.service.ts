import { Injectable } from '@angular/core';
import { Menu, MenuCategory, MenuItem } from '../interfaces/menu.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menus: Menu[] = [
    {
      id: 1,
      name: 'Menú de Cafetería',
      type: 'cafeteria',
      categories: [
        {
          id: 1,
          name: 'Bebidas Calientes',
          items: [
            {
              id: 1,
              name: 'Café Americano',
              description: 'Café negro tradicional',
              price: 2.50,
              category: 'Bebidas Calientes'
            },
            {
              id: 2,
              name: 'Cappuccino',
              description: 'Café con leche espumada',
              price: 3.00,
              category: 'Bebidas Calientes'
            }
          ]
        },
        {
          id: 2,
          name: 'Postres',
          items: [
            {
              id: 3,
              name: 'Croissant',
              description: 'Croissant de mantequilla',
              price: 2.00,
              category: 'Postres'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      name: 'Menú de Cena',
      type: 'cena',
      categories: [
        {
          id: 3,
          name: 'Entradas',
          items: [
            {
              id: 4,
              name: 'Ensalada César',
              description: 'Lechuga, pollo, crutones y aderezo césar',
              price: 8.00,
              category: 'Entradas'
            }
          ]
        },
        {
          id: 4,
          name: 'Platos Principales',
          items: [
            {
              id: 5,
              name: 'Pasta Alfredo',
              description: 'Fettuccine con salsa cremosa',
              price: 12.00,
              category: 'Platos Principales'
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  getMenus(): Observable<Menu[]> {
    return of(this.menus);
  }

  getMenuByType(type: 'cafeteria' | 'cena'): Observable<Menu | undefined> {
    return of(this.menus.find(menu => menu.type === type));
  }
}
