'use client'
import { useEffect } from 'react'
export default function ProductDetail(){
  useEffect(()=>{ import('@google/model-viewer') },[])
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-lg border border-brand-border p-2">
        <model-viewer src="/sample.glb" camera-controls ar ar-modes="webxr scene-viewer quick-look" style={{width:'100%',height:'420px'}}></model-viewer>
      </div>
      <div>
        <h1 className="text-2xl font-bold mb-2">Örnek Ürün Başlığı</h1>
        <div className="text-gray-300 mb-4">Kısa açıklama burada.</div>
        <div className="text-xl font-semibold mb-4">₺149 <span className="text-gray-500 line-through ml-2">₺179</span></div>
        <div className="flex gap-3 mb-6">
          <button className="bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-2 rounded">Sepete Ekle</button>
          <a href="/checkout" className="border border-brand-accent text-brand-accent px-4 py-2 rounded">Hemen Sipariş Ver</a>
        </div>
      </div>
    </div>
  )
}
