import { Component } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MenuComponent],
  template: `
    <app-menu></app-menu>
  `,
  styles: []
})
export class AppComponent {
  title = 'eureka-menu';
}
