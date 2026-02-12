export const metadata = { title: process.env.SITE_NAME || '3Diverse' }
export default function Root({children}:{children:React.ReactNode}){
  return (<html lang="tr"><body style={{background:'#0F0F14',color:'#e5e7eb'}}>
    <header style={{borderBottom:'1px solid #27272A'}}>
      <div style={{maxWidth: '72rem', margin:'0 auto', padding:'12px 16px', display:'flex', gap:16, alignItems:'center'}}>
        <img src="/logo-horizontal.svg" alt="3Diverse" height={40}/>
        <nav style={{marginLeft:'auto', display:'flex', gap:16, fontSize:14}}>
          <a href="/">Ana Sayfa</a>
          <a href="/products">Ürünler</a>
          <a href="/contact">İletişim</a>
        </nav>
      </div>
    </header>
    <main style={{maxWidth:'72rem', margin:'0 auto', padding:'24px 16px'}}>{children}</main>
    <footer style={{borderTop:'1px solid #27272A'}}>
      <div style={{maxWidth:'72rem', margin:'0 auto', padding:'24px 16px', color:'#9CA3AF'}}>© 2026 3Diverse</div>
    </footer>
  </body></html>)
}
