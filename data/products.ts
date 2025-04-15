export type Product = {
    id: string
    name: string
    category: string
    description: string
    features: string[]
    image: string
    price?: string
}

export const products: Product[] = [
    {
        id: '1',
        name: 'ABC Dry Chemical Fire Extinguisher',
        category: 'Fire Extinguishers',
        description:
            'Multipurpose fire extinguisher suitable for Class A, B, and C fires.',
        features: [
            'Suitable for multiple fire types',
            'Easy to operate',
            'Includes mounting bracket',
            'Regular maintenance available',
        ],
        image: '/products/extinguisher-abc.jpg',
        price: 'Contact for Price',
    },
    {
        id: '2',
        name: 'Addressable Fire Alarm Panel',
        category: 'Fire Alarm Systems',
        description:
            'Advanced fire alarm control panel with addressable technology.',
        features: [
            'LCD Display',
            'Multiple zone support',
            'Battery backup',
            'Remote monitoring capability',
        ],
        image: '/products/alarm-panel.jpg',
        price: 'Contact for Price',
    },
    // Add more products as needed...
]

export const categories = [
    'All Products',
    'Fire Extinguishers',
    'Fire Alarm Systems',
    'Fire Suppression Systems',
    'Fire Hoses',
    'Safety Equipment',
]
