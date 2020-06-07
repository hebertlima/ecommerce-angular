import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { RouterModule } from '@angular/router';
import { SharedModule, ProductsService } from '../shared';
import { ProductResolver } from '../shared/resolvers/product-resolver.service';

const ProductDetailRouting: ModuleWithProviders = RouterModule.forChild([{
  path: '',
  component: ProductDetailComponent,
  resolve: {
    product: ProductResolver
  }
}]);

@NgModule({
  imports: [
    CommonModule,
    ProductDetailRouting,
    SharedModule
  ],
  providers: [
    ProductResolver,
    ProductsService
  ],
  declarations: [ProductDetailComponent]
})
export class ProductDetailModule { }
