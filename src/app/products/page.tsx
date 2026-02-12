import Link from 'next/link'
const mock = Array.from({length: 8}).map((_,i)=>({slug:`ornek-urun-${i+1}`, title:`Örnek Ürün ${i+1}`, price:149}))
export default function ProductsPage(){
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Ürünler</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {mock.map(p => (
          <Link href={`/products/${p.slug}`} key={p.slug} className="rounded-lg border border-brand-border p-4 block hover:border-brand-secondary">
            <div className="h-32 bg-brand-surface/40 rounded mb-2"/>
            <div className="text-sm">{p.title}</div>
            <div className="text-xs text-gray-400">₺{p.price}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
