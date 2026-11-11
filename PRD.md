# PRD — Website Profil Revize

| Item        | Keterangan                                   |
| ----------- | -------------------------------------------- |
| Produk      | Website profil creative agency Revize  |
| Pemilik     | [NAMA_PEMILIK]                               |
| Status      | Draf v1                                      |
| Tanggal     | 12 November 2026                             |

Hal yang masih ditandai `[...]` perlu diisi sebelum peluncuran. Daftarnya ada di bagian 12.

---

## 1. Ringkasan

Revize adalah creative agency yang membuat website dan identitas brand untuk UMKM. Website ini adalah etalase utama agency: menjelaskan layanan, menunjukkan kualitas kerja, dan mengubah pengunjung menjadi calon klien yang menghubungi lewat WhatsApp atau form.

Website ini sekaligus menjadi **portofolio pertama** yang dilihat calon klien. Kualitas tampilan, kecepatan, dan animasinya harus mencerminkan kualitas jasa yang dijual.

---

## 2. Masalah dan tujuan

**Masalah yang dihadapi calon klien (pemilik UMKM):**
- Usahanya ramai secara offline atau di Instagram, tapi belum punya website sendiri.
- Sulit ditemukan di Google, informasi harga dan layanan tersebar di chat WhatsApp.
- Ragu memakai jasa web karena takut mahal, ribet, atau hasilnya tidak jelas.

**Tujuan website:**
1. Menjelaskan layanan dan paket dengan bahasa yang mudah dipahami pemilik UMKM.
2. Membangun kepercayaan lewat portofolio, proses kerja yang jelas, dan tampilan profesional.
3. Menghasilkan prospek (leads) lewat WhatsApp dan form kontak.
4. Mudah ditemukan di Google untuk kata kunci lokal (misalnya "jasa pembuatan website UMKM Jakarta").

---

## 3. Target pengguna

**Persona utama: Pemilik UMKM**
- Usia 25–50 tahun, mengelola usaha kuliner, salon, laundry, bengkel, katering, toko, atau jasa lain.
- Mengakses dari ponsel (perkiraan 80% atau lebih).
- Tidak paham istilah teknis. Yang dipedulikan: berapa biayanya, berapa lama, dan apa untungnya untuk usaha.
- Datang dari: Google, Instagram, rekomendasi, atau pesan penawaran dari Revize.

**Persona kedua: Pengambil keputusan di bisnis menengah**
- Membandingkan beberapa agency. Melihat portofolio dan proses kerja secara detail.

---

## 4. Metrik keberhasilan

| Metrik                                  | Target awal (3 bulan pertama) |
| --------------------------------------- | ----------------------------- |
| Klik tombol WhatsApp + form terkirim    | [ANGKA] per bulan             |
| Rasio pengunjung → kontak               | ≥ 2%                          |
| Lighthouse Performance (mobile)         | ≥ 90                          |
| Lighthouse Accessibility, SEO, Best Practices | ≥ 95                    |
| LCP (mobile)                            | < 2,5 detik                   |
| CLS                                     | < 0,1                         |
| Halaman utama terindeks Google          | Ya, dalam 4 minggu            |

Pengukuran: Google Search Console + analitik ringan yang ramah privasi (misalnya Vercel Analytics atau Plausible). Klik WhatsApp dan pengiriman form dicatat sebagai event.

---

## 5. Ruang lingkup

### MVP (rilis pertama)
- Halaman: Beranda, Layanan, Portofolio (daftar + detail), Tentang, Kontak, 404.
- Tombol WhatsApp di header, hero, akhir setiap halaman, dan tombol mengambang di mobile.
- Form kontak (Web3Forms).
- Portofolio dikelola lewat file Markdown (Content Collections).
- SEO dasar: meta per halaman, Open Graph, sitemap, robots.txt, JSON-LD.
- Animasi: smooth scroll, animasi teks hero, reveal saat scroll, 1–3 efek khas dari React Bits.

### Tidak termasuk MVP (fase berikutnya)
- Blog / artikel.
- CMS visual (Sanity, Decap).
- Dua bahasa (Indonesia–Inggris).
- Kalkulator harga interaktif.
- Halaman studi kasus panjang dengan video.
- Transisi antarhalaman (view transitions).

---

## 6. Peta situs dan isi halaman

### 6.1 Beranda `/`
Urutan section:

1. **Header**: logo, menu (Layanan, Portofolio, Tentang, Kontak), tombol "Konsultasi gratis" (lime). Di mobile: menu hamburger layar penuh.
2. **Hero** (latar violet, motif garis lengkung plum):
   - Label kecil: "Creative agency untuk UMKM".
   - Judul besar dengan animasi teks per kata. Contoh: "Brand yang berani, website yang diingat."
   - Satu kalimat penjelas.
   - Dua tombol: "Mulai proyek" (WhatsApp, lime) dan "Lihat portofolio" (outline).
   - Elemen visual: oval/pill berisi cuplikan karya, bergerak pelan saat scroll.
3. **Marquee**: teks berjalan berisi jenis usaha yang dilayani (Kuliner · Salon · Laundry · Katering · Bengkel · Toko Online). Bukan logo klien palsu.
4. **Layanan**: 3–4 kartu (Website Company Profile, Landing Page, Katalog Online, Branding & Logo). Setiap kartu: ikon, judul, 1–2 kalimat manfaat, "Mulai dari Rp[HARGA]" atau "Hubungi untuk harga".
5. **Portofolio unggulan**: 3 proyek terbaik, kartu besar dengan gambar dalam frame oval/rounded, tautan ke detail.
6. **Proses kerja**: 4 langkah bernomor (Konsultasi → Desain → Pengembangan → Online & dukungan), dengan perkiraan durasi.
7. **Kenapa kami**: 3–4 poin (harga jelas di depan, selesai dalam [X] hari, mobile-first, dukungan setelah online).
8. **Testimoni**: hanya testimoni asli. Kalau belum ada, section ini disembunyikan.
9. **FAQ**: 5–6 pertanyaan umum (berapa biaya, berapa lama, apakah termasuk domain dan hosting, apakah bisa diubah sendiri, bagaimana pembayaran).
10. **CTA penutup** (latar lime, teks ink): ajakan konsultasi gratis + tombol WhatsApp.
11. **Footer** (latar ink): logo, tautan menu, kontak, media sosial, hak cipta.

### 6.2 Layanan `/layanan`
- Penjelasan tiap layanan: apa yang didapat, cocok untuk siapa, perkiraan waktu pengerjaan.
- Tabel atau kartu paket harga (minimal 3 paket) dengan daftar fitur. Harga `[HARGA]`.
- Apa yang termasuk dan tidak termasuk (domain, hosting, revisi, maintenance).
- CTA WhatsApp dengan pesan otomatis yang menyebut paket yang dipilih.

### 6.3 Portofolio `/portofolio` dan `/portofolio/[slug]`
- Daftar: grid kartu proyek, filter sederhana per kategori (opsional, hanya jika proyek > 6).
- Detail per proyek: judul, kategori, klien (atau label "Proyek konsep"), tantangan, solusi, hasil, galeri gambar, tautan ke website (jika ada), proyek lain.

Struktur data (frontmatter Markdown):
```yaml
title: "Nama proyek"
client: "Nama klien"        # kosongkan jika proyek konsep
concept: false              # true = tampilkan label "Proyek konsep"
category: "Kuliner"
year: 2026
cover: "./cover.jpg"
url: "https://..."          # opsional
featured: true              # tampil di beranda
summary: "Satu kalimat ringkasan"
```

### 6.4 Tentang `/tentang`
- Cerita singkat agency dan alasan fokus ke UMKM.
- Nilai kerja (3 poin).
- Profil pemilik / tim (foto, nama, peran).
- CTA.

### 6.5 Kontak `/kontak`
- Tombol WhatsApp besar (utama).
- Form: nama, nama usaha, jenis usaha (pilihan), nomor WhatsApp, kebutuhan (pilihan layanan), pesan. Validasi di sisi klien, pesan sukses dan gagal yang jelas, perlindungan spam (honeypot Web3Forms).
- Email, Instagram, jam operasional, area layanan.

### 6.6 404
- Pesan ramah dengan gaya brand, tombol kembali ke beranda.

---

## 7. Kebutuhan fungsional

| ID   | Kebutuhan                                                                                     |
| ---- | --------------------------------------------------------------------------------------------- |
| F-01 | Semua tombol WhatsApp membuka `wa.me/[NOMOR]` dengan pesan awal yang sesuai konteks halaman.  |
| F-02 | Form kontak terkirim ke email pemilik lewat Web3Forms dan menampilkan status sukses/gagal.    |
| F-03 | Proyek baru cukup ditambah lewat satu file Markdown + gambar, tanpa mengubah kode.            |
| F-04 | Proyek dengan `featured: true` otomatis tampil di beranda (maksimal 3).                       |
| F-05 | Menu mobile bisa dibuka/ditutup dengan tombol dan tombol Esc, fokus keyboard terjaga.         |
| F-06 | Tombol WhatsApp mengambang muncul di mobile setelah pengguna melewati hero.                   |
| F-07 | Klik WhatsApp dan pengiriman form tercatat sebagai event analitik.                            |
| F-08 | Sitemap dan robots.txt dibuat otomatis saat build.                                            |

---

## 8. Kebutuhan non-fungsional

**Performa**
- Output statis. JavaScript hanya untuk animasi dan island React.
- Font self-hosted (Fontsource), `font-display: swap`, hanya subset yang dipakai.
- Gambar dioptimasi otomatis (`astro:assets`), format modern (WebP/AVIF), ukuran responsif.
- Maksimal 3 efek berat di beranda. Efek di bawah layar pertama dimuat dengan `client:visible`.

**Aksesibilitas (WCAG 2.1 AA)**
- Kontras sesuai aturan di CLAUDE.md.
- Semua fungsi bisa dipakai dengan keyboard, fokus terlihat jelas.
- `prefers-reduced-motion` mematikan smooth scroll dan animasi masuk.
- Struktur heading berurutan, `alt` pada semua gambar bermakna, label pada semua field form.

**SEO**
- `title` dan `description` unik per halaman. Gambar Open Graph per halaman (default + per proyek).
- JSON-LD `ProfessionalService` dengan nama, area layanan, kontak.
- URL bersih berbahasa Indonesia (`/layanan`, `/portofolio/nama-proyek`).

**Kompatibilitas**
- Chrome, Safari (iOS), Firefox, Edge versi terbaru. Android Chrome sebagai prioritas utama.
- Lebar layar 360px sampai 1920px.

---

## 9. Arah desain

**Kesan:** berani, energik, modern, tapi tetap rapi dan profesional.

**Palet** (detail dan aturan kontras di CLAUDE.md):

| Token  | Hex       | Peran                                  |
| ------ | --------- | -------------------------------------- |
| violet | `#6C3BF5` | Warna identitas, hero, section utama   |
| lime   | `#C5F73D` | CTA, highlight, aksen                  |
| plum   | `#4B1590` | Motif garis lengkung, hover            |
| ink    | `#1F1F1F` | Teks, section gelap, footer            |
| cream  | `#FBF4EE` | Latar utama                            |

**Tipografi:** Unbounded (judul, tebal dan lebar), Manrope (isi). Ukuran judul hero 56–96px di desktop, 40–48px di mobile.

**Bentuk dan motif:** pill dan oval untuk tombol, badge, dan frame gambar. Garis lengkung tebal warna plum di atas violet sebagai motif latar (mengacu pada referensi stationery yang dipilih).

**Gerak:**
- Hero: judul muncul per kata (GSAP SplitText), tombol menyusul.
- Section: konten naik pelan dan muncul saat masuk layar, sekali saja.
- Motif garis lengkung: bergerak/tergambar perlahan mengikuti scroll (stroke-dashoffset).
- Proses kerja: garis lengkung lime menghubungkan 4 langkah, tergambar mengikuti scroll (GSAP ScrollTrigger scrub + stroke-dashoffset); setiap langkah muncul sekali saat garis mencapainya.
- CTA penutup: judul muncul per kata (GSAP SplitText, pola sama dengan hero).
- FAQ: `<details>` native, buka-tutup halus lewat CSS `interpolate-size`, ikon plus berputar jadi silang.
- Smooth scroll Lenis di seluruh halaman.
- Efek React Bits yang dipakai di beranda:
  - **Threads** (efek berat #1): background hero berupa garis lengkung mengalir, warna plum dan lime di atas violet, bereaksi pada mouse. Fallback: SVG garis lengkung statis.
  - **CurvedLoop** (efek berat #2): marquee teks di jalur melengkung, berisi jenis usaha yang dilayani.
  - **CircularText** (ringan): lencana berputar "REVIZE • CREATIVE AGENCY •" di hero.
  - **Magnet** (ringan): tombol CTA utama di hero dan tombol WhatsApp di CTA penutup.
  - **ScrollReveal** (ringan): judul section Layanan.
  - **VariableProximity** (ringan): kalimat besar di section Kenapa kami, memakai Unbounded Variable (sumbu `wght`). Hanya aktif di `pointer: fine`; di mobile dan reduced motion teks tampil statis.
- Slot efek berat #3 sengaja dikosongkan untuk Portofolio unggulan di Tahap 4.

---

## 10. Teknis

Stack lengkap dan aturan kode ada di `CLAUDE.md`. Ringkasnya: Astro + Tailwind CSS v4 + GSAP + Lenis + React Bits (island), Content Collections untuk portofolio, Web3Forms untuk form, deploy statis ke Vercel atau Netlify.

**Konfigurasi yang dibutuhkan:**
- `src/config.ts`: nama brand, nomor WhatsApp, email, Instagram, area layanan.
- Env: `PUBLIC_WEB3FORMS_KEY`.
- Domain: [DOMAIN] (misalnya .id atau .co.id).

---

## 11. Tahapan pengerjaan

| Tahap | Isi                                                                                   | Selesai jika                                   |
| ----- | ------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 1     | Setup project, token desain, font, BaseLayout, Header, Footer, `motion.ts`            | Build lolos, header/footer rapi di 3 ukuran    |
| 2     | Beranda: Hero + Marquee + Layanan                                                     | Animasi hero jalan, reduced motion dihormati   |
| 3     | Beranda: Proses, Kenapa kami, FAQ, CTA penutup (Testimoni disembunyikan sampai ada testimoni asli) | Lighthouse mobile ≥ 90             |
| 4     | Content Collections + Portofolio unggulan di beranda + halaman Portofolio (daftar dan detail) | Beranda lengkap, proyek baru cukup lewat file Markdown |
| 5     | Halaman Layanan, Tentang, Kontak (form + WhatsApp), 404                               | Form terkirim, semua tombol WA benar           |
| 6     | SEO (meta, OG, sitemap, JSON-LD), analitik, uji aksesibilitas dan lintas perangkat    | Semua target di bagian 4 tercapai              |
| 7     | Deploy, sambungkan domain, daftarkan ke Google Search Console                         | Website online di domain sendiri               |

---

## 12. Konten yang perlu disiapkan pemilik

- [ ] Logo Revize (SVG) dan favicon.
- [ ] Nomor WhatsApp bisnis, email, akun Instagram.
- [ ] Daftar layanan dan harga paket (atau rentang harga).
- [ ] Perkiraan waktu pengerjaan per paket.
- [ ] 3–6 proyek portofolio: gambar (min. 1600px lebar), deskripsi singkat. Proyek konsep boleh, asal diberi label.
- [ ] Testimoni asli beserta izin dari klien (jika ada).
- [ ] Foto pemilik / tim dan cerita singkat agency.
- [ ] Jawaban untuk 5–6 pertanyaan FAQ.
- [ ] Area layanan (misalnya Jabodetabek / seluruh Indonesia, online).

---

## 13. Risiko dan mitigasi

| Risiko                                                   | Mitigasi                                                                  |
| -------------------------------------------------------- | ------------------------------------------------------------------------- |
| Animasi terlalu banyak sehingga website berat dan lambat | Batas 3 efek berat, `client:visible`, target Lighthouse ≥ 90 dicek tiap tahap |
| Belum punya portofolio klien nyata                       | Pakai proyek konsep berlabel jelas; ganti dengan proyek nyata secepatnya  |
| Warna lime sulit dibaca                                  | Lime hanya untuk latar tombol/aksen atau teks besar di atas violet/ink    |
| Pengunjung bingung soal harga                            | Tampilkan harga "mulai dari" dan FAQ biaya secara terbuka                 |
| Lisensi komponen pihak ketiga                            | Cek lisensi React Bits (MIT + Commons Clause) sebelum dipakai ulang di proyek klien |

---

## 14. Pertanyaan terbuka

1. Domain final (misalnya revize.id atau revize.co.id)?
2. Apakah harga ditampilkan angka pasti atau "mulai dari"?
3. Apakah melayani branding (logo, identitas) di MVP, atau website saja?
4. Area layanan: hanya Jakarta, Jabodetabek, atau seluruh Indonesia secara online?
5. Analitik yang dipilih: Vercel Analytics, Plausible, atau Google Analytics?
