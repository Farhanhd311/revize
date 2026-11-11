# CLAUDE.md — Website Profil Revize

Website profil untuk creative agency Revize: jasa pembuatan website dan branding untuk UMKM.
Spesifikasi lengkap ada di `PRD.md`. Baca PRD sebelum mengerjakan fitur atau halaman baru.

Bahasa konten website: **Bahasa Indonesia**. Bahasa komentar kode: bebas (Inggris disarankan).

Panduan bawaan Astro (dev server, tautan dokumentasi) ada di file berikut, ikuti juga:
@AGENTS.md

---

## 1. Stack (jangan tambah dependensi baru tanpa bertanya)

| Kebutuhan        | Pilihan                                                                 |
| ---------------- | ----------------------------------------------------------------------- |
| Framework        | Astro (versi stabil terbaru), output statis                             |
| Styling          | Tailwind CSS v4 (via `npx astro add tailwind`), token di `@theme`       |
| Animasi utama    | GSAP + ScrollTrigger (+ SplitText untuk animasi teks)                   |
| Smooth scroll    | Lenis, disinkronkan dengan GSAP ticker                                  |
| Komponen efek    | React Bits, **hanya sebagai React island** (`@astrojs/react`)           |
| Konten portofolio| Astro Content Collections (Markdown)                                    |
| Form kontak      | Web3Forms (tanpa backend) + tombol WhatsApp                             |
| SEO              | `@astrojs/sitemap`, meta/OG per halaman, JSON-LD `ProfessionalService`  |
| Font             | `@fontsource-variable/unbounded` (judul), `@fontsource-variable/manrope` (isi) |
| Hosting          | Vercel atau Netlify (static)                                            |

Aturan stack:
- **GSAP adalah satu-satunya library animasi utama.** Jangan memasang `motion` kecuali sebuah komponen React Bits yang dipilih benar-benar membutuhkannya, dan sebutkan alasannya.
- **Default-nya `.astro`.** Pakai React hanya untuk komponen React Bits. Jangan menulis section biasa dalam React.
- Directive island: `client:visible` untuk efek di bawah layar pertama, `client:load` hanya untuk efek di hero.
- Tidak memakai `ClientRouter` (view transitions) di MVP.
- Tidak ada Three.js / WebGL berat di MVP.

---

## 2. Perintah

```bash
npx astro dev --background   # jalankan dev server di background (jangan pakai npm run dev biasa)
npx astro dev status         # cek status server
npx astro dev logs           # lihat log jika ada error
npx astro dev stop           # hentikan server
npm run build                # wajib lolos sebelum menyatakan tugas selesai
npm run preview              # cek hasil build
```

---

## 3. Design tokens

Taruh di `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  --color-violet: #6C3BF5;   /* warna identitas utama */
  --color-lime:   #C5F73D;   /* aksen: CTA, highlight */
  --color-plum:   #4B1590;   /* motif garis, hover, bayangan di atas violet */
  --color-ink:    #1F1F1F;   /* teks utama, section gelap */
  --color-cream:  #FBF4EE;   /* latar utama */

  --font-display: "Unbounded Variable", sans-serif;
  --font-sans:    "Manrope Variable", sans-serif;
}
```

Aturan warna (60-30-10):
- 60% `cream` + `ink` (latar dan teks), 30% `violet` (hero, section penting, footer), 10% `lime` (CTA dan highlight saja).
- Jangan pakai warna di luar token. Jangan memakai palet dari skill UI UX Pro Max; palet di atas sudah final.

Kombinasi teks yang diizinkan:
- Aman untuk semua ukuran: `ink` di atas `lime`, `ink` di atas `cream`, `cream` di atas `ink`, `cream`/putih di atas `violet`, `violet` di atas `cream`.
- Hanya untuk teks besar/tebal (≥24px atau ≥18px bold): `lime` di atas `violet`, `violet` di atas `lime`.

Bahasa visual:
- Judul memakai `font-display`, besar, tebal, rapat (tracking sedikit negatif).
- Bentuk khas: **pill dan oval** (tombol, badge, frame gambar), **garis lengkung tebal** warna `plum` di atas `violet` sebagai motif latar.
- Banyak ruang kosong. Maksimal lebar konten ±1280px.

---

## 4. Animasi

Inisialisasi Lenis + GSAP di satu tempat saja: `src/lib/motion.ts`, dipanggil sekali dari `BaseLayout.astro`.

```ts
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduce) {
  const lenis = new Lenis();
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}
```

Prinsip gerak:
- Halus dan singkat: durasi 0.6–1.2 detik, easing `power3.out` / `expo.out`. Tidak ada efek memantul berlebihan.
- Animasi masuk hanya sekali (`once: true`), jangan diulang saat scroll balik.
- Animasikan `transform` dan `opacity` saja. Jangan animasikan `width`, `height`, `top`, `left`.
- **Wajib menghormati `prefers-reduced-motion`**: Lenis mati, animasi masuk langsung tampil tanpa transisi.
- Konten tidak boleh disembunyikan hanya oleh JS. Kalau JS gagal, semua teks tetap terlihat.
- Batas: **maksimal 3 efek "berat"** (komponen React Bits, efek kursor, background bergerak) di seluruh beranda.

---

## 5. Skill yang dipakai

- **ui-ux-pro-max**: untuk keputusan layout, hierarki, spacing, dan aksesibilitas. Palet dan font tetap mengikuti bagian 3.
- **ponytail**: aktif sepanjang sesi. Tulis kode paling sedikit yang menyelesaikan tugas. Jangan membuat abstraksi, util, atau konfigurasi "untuk nanti". Tapi aksesibilitas, validasi form, dan SEO **bukan** bloat.
- **GSAP / Lenis**: ikuti pola di bagian 4.
- **react-bits**: pasang komponen via `npx shadcn@latest add @react-bits/<Nama>-TS-TW`. Pilih varian Tailwind + TypeScript. Sesuaikan warnanya ke token. Cek dependensinya sebelum memasang.

Kalau dua skill bertentangan, prioritasnya: **aksesibilitas > performa > PRD > estetika > jumlah kode**.

---

## 6. Struktur folder

```
src/
  components/
    layout/        Header.astro, Footer.astro, Button.astro
    sections/      Hero.astro, Services.astro, Work.astro, Process.astro, ...
    react/         komponen React Bits (island) saja
  content/
    portfolio/     *.md (satu file per proyek)
  content.config.ts
  layouts/         BaseLayout.astro
  lib/             motion.ts
  pages/           index, layanan, portofolio/index, portofolio/[slug], tentang, kontak, 404
  styles/          global.css
public/            favicon, og-image, gambar statis
```

---

## 7. Aturan kerja

- Kerjakan per section atau per halaman. Setelah satu bagian selesai: jalankan `npm run build`, lalu cek tampilan di lebar 375px, 768px, dan 1440px.
- Mobile-first. Semua elemen interaktif minimal 44×44px.
- Gambar memakai `<Image />` dari `astro:assets`, dengan `alt` yang deskriptif dan ukuran yang jelas.
- Setiap halaman wajib punya `title`, `description`, dan gambar OG.
- Teks yang belum final ditandai `TODO:`. Jangan mengarang testimoni, nama klien, logo klien, atau angka statistik. Proyek konsep wajib diberi label "Proyek konsep".
- Nomor WhatsApp, email, dan kunci Web3Forms diambil dari `src/config.ts` (bukan di-hardcode di banyak tempat). Kunci Web3Forms lewat env `PUBLIC_WEB3FORMS_KEY`.
- Jangan menghapus atau menulis ulang section yang tidak diminta.
