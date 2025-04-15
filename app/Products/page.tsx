'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Search, SlidersHorizontal } from 'lucide-react'
import { products, categories, type Product } from '@/data/products'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

export default function ProductsPage() {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('All Products')
    const [sortBy, setSortBy] = useState('name-asc')

    const filteredProducts = useMemo(() => {
        let filtered = [...products]

        // Filter by category
        if (selectedCategory !== 'All Products') {
            filtered = filtered.filter(
                (product) => product.category === selectedCategory
            )
        }

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(
                (product) =>
                    product.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase()) ||
                    product.description
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
            )
        }

        // Sort products
        switch (sortBy) {
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name))
                break
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name))
                break
            case 'category':
                filtered.sort((a, b) => a.category.localeCompare(b.category))
                break
        }

        return filtered
    }, [searchQuery, selectedCategory, sortBy])

    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                    Our Products
                </h1>
                <p className="text-lg text-muted-foreground">
                    Discover our comprehensive range of fire safety equipment
                    and solutions
                </p>
            </motion.div>

            {/* Filters Section */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search products..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                >
                    <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                        {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                                {category}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger>
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                        <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                        <SelectItem value="category">Category</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* No Results Message */}
            {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">
                        No products found matching your criteria
                    </p>
                </div>
            )}
        </div>
    )
}

function ProductCard({ product }: { product: Product }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Card className="h-full">
                <CardHeader>
                    <div className="aspect-square relative mb-4">
                        {/* Add Image component when you have product images */}
                        <div className="absolute inset-0 bg-secondary/20 rounded-lg" />
                    </div>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.category}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                    </p>
                    <ul className="space-y-2">
                        {product.features.map((feature, index) => (
                            <li
                                key={index}
                                className="text-sm flex items-center gap-2"
                            >
                                <div className="w-1 h-1 rounded-full bg-primary" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    {product.price && (
                        <p className="mt-4 text-sm font-medium text-primary">
                            {product.price}
                        </p>
                    )}
                </CardContent>
            </Card>
        </motion.div>
    )
}
