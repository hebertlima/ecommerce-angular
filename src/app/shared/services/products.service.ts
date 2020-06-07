import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Product } from '../models';

@Injectable()
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  get(): Observable<Product[]> {
    return this.http.get<Product[]>('/assets/products.json');
  }

  show(slug: string) : Observable<Product[]> {
    return this.http.get<Product[]>('/assets/products.json').pipe(map(products => products.filter(product => product.slug == slug)));
  }
}
