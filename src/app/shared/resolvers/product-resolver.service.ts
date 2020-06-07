import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve } from '@angular/router';
import { ProductsService } from '../services';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class ProductResolver implements Resolve<Product> {

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<any> {
    return this.productService.show(route.params['product']).pipe(tap(product => !product.length ? this.router.navigateByUrl('/') : null ),catchError((error) => this.router.navigateByUrl('/')));
  }
}
