import { t } from '@/lib/i18n'
export default function HomePage(){
  return (
    <div className="space-y-10">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{t('home.title')}</h1>
          <p className="text-gray-300 mb-6">3D baskı ürünlerde kalite, hız ve özel tasarım seçenekleri.</p>
          <a href="/products" className="inline-block bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-5 py-3 rounded-md">{t('home.cta')}</a>
        </div>
        <div className="relative h-64 md:h-80 rounded-lg border border-brand-border flex items-center justify-center">
          <img src="/logo-icon.svg" alt="3Diverse" className="h-40 opacity-80"/>
        </div>
      </section>
    </div>
  )
}
