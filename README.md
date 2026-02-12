# 3Diverse – Vercel Final (Next.js 14 + Prisma + 3D Viewer)

Bu paket Vercel'de sorunsuz derlenmesi için hazırlanmıştır.

## Hızlı Kurulum (Vercel)
1) Bu repoyu GitHub'a yükle.
2) Vercel → Add New → Project → bu repoyu seç.
3) **Environment Variables** ekle:
```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/DB?sslmode=require
ADMIN_EMAIL=diverse3d@outlook.com
ADMIN_PASSWORD=GüçlüBirŞifre
SITE_NAME=3Diverse
```
4) **Build Command** otomatik: `prisma generate && next build` (vercel.json ile sabitlendi)
5) **Node sürümü**: 18 (package.json engines + .nvmrc)
6) Deploy → bitti.

## Lokal Kurulum
```
npm install
cp .env.example .env
# .env içinde DATABASE_URL/ADMIN bilgilerini doldur
npx prisma migrate dev --name init
npm run dev
```

## Yol Haritası
- `/products` ve `/products/[slug]` sayfaları iskelet
- `/contact` formu iskelet
- Admin için ayrı bir rota eklenebilir; bu pakette temel mağaza sayfaları yer alır.
