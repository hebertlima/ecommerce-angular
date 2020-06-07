import { Product as Item } from '../interfaces/product.interface';

export class Product implements Item {
    id?: number;
    title: string;
    price: number;
    stock: number;
    rating: number;
    imagem: string;
    quantity?: number;
    description: string;
    slug:string;
    brand: string;

    constructor(properties?: {
            id?: number, title: string, price: number, stock: number, rating: number, imagem: string, quantity?: number, description: string, slug: string, brand: string
        }) {
        if ( properties ) {
            Object.assign(this, properties);
            this.quantity = properties.quantity || 1;
        }
    }

    increment(quantity?: number) {
        if ( quantity >= 2 ) {
            this.addToQUantity(quantity);
        } else {
            this.quantity++;
        }
    }

    addToQUantity(quantity: number): void {
        this.quantity = this.quantity + quantity;
    }

    decrement() {
        this.quantity--;
    }

    getImagem() {
        return this.imagem.split('?')[0];
    }

    getThumb() {
        return this.imagem;
    }
}
