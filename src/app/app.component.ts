import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FoodListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food-app';
}
