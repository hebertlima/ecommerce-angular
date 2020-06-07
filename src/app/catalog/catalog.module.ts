import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from "@angular/router";
import { CatalogComponent } from './catalog.component';
import { SharedModule, ProductsService } from '../shared';

const CatalogRouting: ModuleWithProviders = RouterModule.forChild([{
  path: '',
  component: CatalogComponent
}]);

@NgModule({
  imports: [
    CommonModule,
    CatalogRouting,
    SharedModule
  ],
  declarations: [CatalogComponent],
  providers: [ProductsService]
})
export class CatalogModule { }
