import { Product as Item } from '../interfaces/product.interface';

export class Product implements Item {
    id?: number;
    title: string;
    price: number;
    stock: number;
    rating: number;
    imagem: string;
    readonly quantity?: number;
    _quantity: number;
    description: string;
    slug:string;

    constructor(properties?: {
            id?: number, title: string, price: number, stock: number, rating: number, imagem: string, quantity?: number, description: string, slug: string
        }) {
        if ( properties ) {
            Object.assign(this, properties);
            if (!properties.quantity) {
                this._quantity = 1;
            } else {
                this._quantity = properties.quantity;
            }
        }
    }

    increment(quantity?: number) {
        if ( quantity > 1 ) {
            this.addToQUantity((quantity - 1));
        } else {
            this._quantity++;
        }
    }

    addToQUantity(quantity: number): void {
        this._quantity = this._quantity + quantity;
    }

    decrement() {
        this._quantity--;
    }

    getQuantity(): number {
        return this._quantity;
    }

    getImagem() {
        return this.imagem.split('?')[0];
    }

    getThumb() {
        return this.imagem;
    }
}
