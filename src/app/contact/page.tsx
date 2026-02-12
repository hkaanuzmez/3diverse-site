export default function Contact(){
  return (
    <section style={{display:'grid', gridTemplateColumns:'1fr', gap:24}}>
      <div>
        <h1 style={{fontSize:24, fontWeight:700, marginBottom:12}}>İletişim</h1>
        <form style={{display:'grid', gap:12}}>
          <input placeholder="Ad Soyad" style={{background:'#16161C', border:'1px solid #27272A', borderRadius:8, padding:8}}/>
          <input placeholder="E-posta" style={{background:'#16161C', border:'1px solid #27272A', borderRadius:8, padding:8}}/>
          <input placeholder="Konu" style={{background:'#16161C', border:'1px solid #27272A', borderRadius:8, padding:8}}/>
          <textarea placeholder="Mesaj" rows={5} style={{background:'#16161C', border:'1px solid #27272A', borderRadius:8, padding:8}} />
          <button style={{padding:'10px 16px', borderRadius:8, background:'linear-gradient(90deg,#6A00F4,#C86BFA)', color:'#fff'}}>Gönder</button>
        </form>
      </div>
      <div style={{border:'1px solid #27272A', borderRadius:12, padding:12}}>
        <div style={{fontSize:14, color:'#cbd5e1'}}>E‑posta: diverse3d@outlook.com</div>
        <div style={{fontSize:14, color:'#9CA3AF'}}>WhatsApp: (admin panelinden eklenecek)</div>
      </div>
    </section>
  )
}
