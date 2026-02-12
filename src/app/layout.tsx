import './globals.css'
import type { Metadata } from 'next'
import { t } from '@/lib/i18n'

export const metadata: Metadata = { title: process.env.SITE_NAME || '3Diverse', description: '3D baskı ürünler için e-ticaret' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="dark">
      <body>
        <header className="border-b border-brand-border">
          <div className="container flex items-center gap-6 py-4">
            <img src="/logo-horizontal.svg" alt="3Diverse" className="h-10"/>
            <nav className="ml-auto flex gap-6 text-sm">
              <a href="/">{t('nav.home')}</a>
              <a href="/products">{t('nav.products')}</a>
              <a href="/contact">{t('nav.contact')}</a>
              <a href="/cart">{t('nav.cart')}</a>
            </nav>
          </div>
        </header>
        <main className="container py-8">{children}</main>
        <footer className="mt-20 border-t border-brand-border">
          <div className="container py-8 text-sm text-gray-400">© 2026 3Diverse</div>
        </footer>
      </body>
    </html>
  )
}
