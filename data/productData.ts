import productsData from '@/data/products.json';

export default function ProductData() {
    return {
        products: productsData.products,
        getByCategory: (category: string) => {
            return productsData.products.filter((p: any) => p.category === category);
        },
        categories: ['shirts', 'shorts', 'hoodies'],
    };
}
