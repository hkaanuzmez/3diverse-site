'use client'
import { useEffect } from 'react'
export default function ProductDetail(){
  useEffect(()=>{ import('@google/model-viewer') },[])
  return (
    <section style={{display:'grid', gridTemplateColumns:'1fr', gap:24}}>
      <div style={{border:'1px solid #27272A', borderRadius:12, padding:8}}>
        <model-viewer src="/sample.glb" camera-controls ar ar-modes="webxr scene-viewer quick-look" style={{width:'100%', height:'420px'}}></model-viewer>
      </div>
      <div>
        <h1 style={{fontSize:24, fontWeight:700}}>Örnek Ürün Başlığı</h1>
        <p style={{color:'#cbd5e1'}}>Kısa açıklama.</p>
        <div style={{marginTop:12, fontSize:18, fontWeight:700}}>₺149 <span style={{color:'#9CA3AF', textDecoration:'line-through', marginLeft:8}}>₺179</span></div>
        <div style={{marginTop:16, display:'flex', gap:12}}>
          <button style={{padding:'10px 16px', borderRadius:8, background:'linear-gradient(90deg,#6A00F4,#C86BFA)', color:'#fff'}}>Sepete Ekle</button>
          <a href="/checkout" style={{padding:'10px 16px', borderRadius:8, border:'1px solid #F59E0B', color:'#F59E0B'}}>Hemen Sipariş Ver</a>
        </div>
      </div>
    </section>
  )
}
