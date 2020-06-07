export interface Product {
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

    increment(quantity?: number): void;
    decrement(): void;
    getImagem(): string;
    getThumb(): string;
    addToQUantity(quantity: number): void;
}
