import '@/app/global.css'
import { RootProvider } from 'fumadocs-ui/provider'
import { Inter } from 'next/font/google'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';


export const metadata = {
    title: 'SandUI Documentation',
    description: 'Official Documentation for the Roblox SandUI UI Library',
    icons: {
        icon: `${basePath}/favicon.ico`,
    }
}

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body className="flex flex-col min-h-screen">
                <RootProvider search={{ enabled: false }}>
                    {children}
                </RootProvider>
            </body>
        </html>
    )
}
