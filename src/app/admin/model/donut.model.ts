export interface Donut {
    id?: string,
    name: string,
    description: string,
    icon: string,
    price: number,
    promo?: 'new' | 'limited'
}
//id is optional because it gets created after the backend operation
