export interface ProdcutCardInterface {
    productCounts?: boolean,
    InfoSection: boolean,
    badge: string | null,
    sales: string | null,
    imagePath: string,
    id?: string,
    title: string,
    price: number,
    pricewithoutDiscount: number
}