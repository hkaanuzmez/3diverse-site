export default function ContactPage(){
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">İletişim</h1>
        <form className="space-y-3">
          <input className="w-full bg-brand-surface border border-brand-border rounded p-2" placeholder="Ad Soyad"/>
          <input className="w-full bg-brand-surface border border-brand-border rounded p-2" placeholder="E-posta"/>
          <input className="w-full bg-brand-surface border border-brand-border rounded p-2" placeholder="Konu"/>
          <textarea className="w-full bg-brand-surface border border-brand-border rounded p-2" placeholder="Mesaj" rows={5}></textarea>
          <button className="bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-2 rounded">Gönder</button>
        </form>
      </div>
      <div className="rounded border border-brand-border p-4">
        <div className="text-sm text-gray-300 space-y-2">
          <div>E-posta: diverse3d@outlook.com</div>
          <div>WhatsApp: (admin panelinden eklenecek)</div>
          <div>Harita: Yok</div>
        </div>
      </div>
    </div>
  )
}
