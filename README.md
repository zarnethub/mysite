# Website personal branding Fajar Sidik (@zarnethub)

Statis: HTML + CSS + JS biasa, tanpa build dan tanpa dependency.

## Cara buka
Klik dua kali `index.html`, atau di VS Code pakai ekstensi Live Server.

## Struktur
- `index.html` : semua isi halaman (hero, tentang, keahlian & jasa, cara kerja, FAQ, kontak). Portofolio belum dipasang.
- `css/style.css` : tampilan (warna di bagian `:root` paling atas)
- `js/main.js` : menu HP, tombol jasa & form → WhatsApp. Nomor WA ada di baris `WA_NUMBER`.
- `assets/` : favicon.svg, og-image.png (gambar saat link dibagikan)

## Ganti kontak
WhatsApp: cari `6289531295151` di index.html dan main.js. Email: cari `zarnethub@gmail.com`.

## Online (gratis) lewat Netlify
1. Buka https://app.netlify.com/drop
2. Seret folder `site` ke halaman itu → langsung dapat link `xxx.netlify.app`.
3. Untuk domain sendiri: Site settings → Domain management → Add domain.

## QA (28 Okt 2026, Playwright)
- 360 / 768 / 1280 px: tanpa scroll horizontal, tanpa error console.
- Semua tombol/link utama ≥ 44 px.
- Form: kosong → pesan "Isi nama dulu ya."; terisi → membuka wa.me dengan pesan terisi.
- Belum: Lighthouse. Link Instagram/TikTok @zarnethub sudah dikonfirmasi pemilik.
