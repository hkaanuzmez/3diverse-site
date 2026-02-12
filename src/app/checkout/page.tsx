export default function CheckoutPage(){
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-3">
        <h1 className="text-2xl font-bold">Ödeme Bilgileri</h1>
        <input className="w-full bg-brand-surface border border-brand-border rounded p-2" placeholder="Ad Soyad"/>
        <input className="w-full bg-brand-surface border border-brand-border rounded p-2" placeholder="Adres"/>
        <select className="w-full bg-brand-surface border border-brand-border rounded p-2">
          <option>Kredi Kartı (İyzico)</option>
          <option>Kredi Kartı (PayTR)</option>
          <option>Havale / EFT</option>
          <option>Kapıda Ödeme (+₺20)</option>
        </select>
        <button className="bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-2 rounded">Siparişi Tamamla</button>
      </div>
      <div className="rounded border border-brand-border p-4 h-fit">
        <div className="flex justify-between text-sm"><span>Ara Toplam</span><span>₺149</span></div>
        <div className="flex justify-between text-sm"><span>Kargo</span><span>₺29</span></div>
        <div className="flex justify-between text-sm"><span>Kapıda Ödeme</span><span>₺20</span></div>
        <div className="flex justify-between font-semibold"><span>Toplam</span><span>₺198</span></div>
      </div>
    </div>
  )
}
