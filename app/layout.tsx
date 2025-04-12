import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Durga Fire Control',
    description: 'Leading Fire Safety Solutions Provider in Nepal',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    )
}
