import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    MatCardContent,
  ],
})
export class FoodListComponent implements OnInit {
  foodItems: any[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.getFoodItems().subscribe((data: any) => {
      if (data && data.recipes && Array.isArray(data.recipes)) {
        this.foodItems = data.recipes;
      } else {
        console.error('Invalid data format:', data);
      }
    }, error => {
      console.error('Failed to fetch food items:', error);
    });
  }
}
