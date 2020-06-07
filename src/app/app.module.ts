import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule, CoreModule } from './shared';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { RouterModule } from '@angular/router';

const AppRouting: ModuleWithProviders = RouterModule.forRoot([{
  path: '',
  children: [
    {path: '', redirectTo: 'catalog', pathMatch: 'full'},
    {path:'catalog', loadChildren: () => import('./catalog/catalog.module').then(m => m.CatalogModule)},
    {path:'catalog/:product', loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailModule)}
  ]
}]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
