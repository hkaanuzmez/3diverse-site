export default function Home(){
  return (
    <section>
      <h1 style={{fontSize:32,fontWeight:800, background:'linear-gradient(90deg,#6A00F4,#C86BFA)', WebkitBackgroundClip:'text', color:'transparent'}}>Katman Katman Üretimin Yeni Adresi</h1>
      <p style={{color:'#cbd5e1', marginTop:8}}>3D baskı ürünlerde kalite, hız ve özel tasarım.</p>
      <div style={{marginTop:16}}>
        <a href="/products" style={{padding:'10px 16px', borderRadius:8, background:'linear-gradient(90deg,#6A00F4,#C86BFA)', color:'#fff'}}>Ürünleri Keşfet</a>
      </div>
      <div style={{marginTop:24, border:'1px solid #27272A', borderRadius:12, padding:16, display:'flex', justifyContent:'center'}}>
        <img src="/logo-icon.svg" alt="logo" height={120} style={{opacity:.85}}/>
      </div>
    </section>
  )
}
