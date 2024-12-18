import { Component } from '@angular/core';
import { CallproductsService } from '../../shared/service/callproducts.service';

@Component({
  selector: 'app-mainhome',
  templateUrl: './mainhome.component.html',
  styleUrl: './mainhome.component.css'
})
export class MainhomeComponent {

  products: any[] = []; // Array to hold product data

  constructor(private productService: CallproductsService) {
    this.fetchProducts(); // Fetch products directly in the constructor
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe({
      next: (response) => {
        this.products = response.data; // Adjust based on API response structure
        console.log('Fetched products:', this.products); // Log products to the console

      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
    });
  }
}
