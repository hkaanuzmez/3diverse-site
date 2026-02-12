import Link from 'next/link'
const mock = Array.from({length: 8}).map((_,i)=>({slug:`ornek-urun-${i+1}`, title:`Örnek Ürün ${i+1}`, price:149}))
export default function Products(){
  return (
    <section>
      <h1 style={{fontSize:24, fontWeight:700, marginBottom:16}}>Ürünler</h1>
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:16}}>
        {mock.map(p => (
          <Link key={p.slug} href={`/products/${p.slug}`} style={{border:'1px solid #27272A', borderRadius:12, padding:12, color:'#e5e7eb'}}>
            <div style={{height:128, background:'#16161C', borderRadius:8, marginBottom:8}}/>
            <div style={{fontSize:14}}>{p.title}</div>
            <div style={{fontSize:12, color:'#9CA3AF'}}>₺{p.price}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
