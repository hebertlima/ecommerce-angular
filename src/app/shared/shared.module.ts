import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from "angular-feather";
import { allIcons } from 'angular-feather/icons';
import { HeaderComponent, CartComponent, CardProductComponent } from './layout';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    RouterModule,
    HttpClientModule
  ],
  declarations: [
    CardProductComponent,
    HeaderComponent,
    CartComponent
  ],
  exports: [
    FeatherModule,
    RouterModule,
    HttpClientModule,
    CardProductComponent,
    HeaderComponent,
    CartComponent
  ]
})
export class SharedModule { }
