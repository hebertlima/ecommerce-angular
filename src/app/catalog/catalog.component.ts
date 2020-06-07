import { Component, OnInit } from '@angular/core';
import Unsplash, {toJson } from 'unsplash-js';
import { ProductsService } from '../shared';
import { Product } from '../shared/models';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  products = [];

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
   this.loadData();
  }

  private loadData() {
    this.productService.get().subscribe((items: Product[]) => {
      this.products = items;
    });
  }

  public trackProducts(index, product){
    return product.id;
  }
}
