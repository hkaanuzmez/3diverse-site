export default function CartPage(){
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Sepetim</h1>
      <div className="rounded border border-brand-border p-4 space-y-2">
        <div className="flex justify-between text-sm"><span>Ara Toplam</span><span>₺149</span></div>
        <div className="flex justify-between text-sm"><span>Kargo</span><span>₺29</span></div>
        <div className="flex justify-between text-sm"><span>Kapıda Ödeme</span><span>₺20</span></div>
        <div className="flex justify-between font-semibold"><span>Genel Toplam</span><span>₺198</span></div>
        <a href="/checkout" className="inline-block mt-3 bg-gradient-to-r from-brand-primary to-brand-secondary px-4 py-2 rounded">Ödemeye Geç</a>
      </div>
    </div>
  )
}
