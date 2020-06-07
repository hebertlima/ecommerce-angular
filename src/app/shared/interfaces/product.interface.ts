export interface Product {
    id?: number;
    title: string;
    price: number;
    stock: number;
    rating: number;
    imagem: string;
    readonly quantity?: number;
    description: string;
    slug:string;

    increment(quantity?: number): void;
    decrement(): void;
    getQuantity(): number;
    getImagem(): string;
    getThumb(): string;
    addToQUantity(quantity: number): void;
}
