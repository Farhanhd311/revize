// Single source for packages, add-ons, maintenance and renewals (from LAYANAN.md).
// false hides every price on the site (cards fall back to "Tanya harga paket ini").
export const SHOW_PRICES = true;
// Intro price for the first 5 clients; set to false once that quota is used up.
export const INTRO_PRICING = true;

export const rupiah = (n: number) => `Rp ${n.toLocaleString("id-ID")}`;

export const packages = [
  {
    id: "start",
    name: "Revize Start",
    short: "Start",
    body: "Landing page (website satu halaman) ibarat brosur digital: pelanggan cukup scroll, lalu chat Anda di WhatsApp.",
    fit: "bengkel, les privat, toko kue",
    icon: "M12 3v3M12 18v3M3 12h3M18 12h3M12 7a5 5 0 1 0 0 10a5 5 0 1 0 0-10z",
    introPrice: 1_000_000,
    price: 1_500_000,
    renewal: 350_000,
    duration: "3–5 hari kerja",
    revisions: 2,
    features: [
      "1 halaman panjang, pengunjung cukup scroll",
      "Tampilan sesuai warna dan logo usaha Anda",
      "Tombol chat WhatsApp dan peta lokasi",
      "Alamat website sendiri selama 1 tahun",
      "Terdaftar di Google",
    ],
  },
  {
    id: "profil",
    name: "Revize Profil",
    short: "Profil",
    body: "Company profile (website beberapa halaman) ibarat ruang pamer, supaya usaha Anda terlihat resmi dan dipercaya.",
    fit: "katering, salon, jasa renovasi",
    icon: "M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM3 9h18",
    introPrice: 2_500_000,
    price: 3_500_000,
    renewal: 500_000,
    duration: "7–14 hari kerja",
    revisions: 3,
    recommended: true,
    features: [
      "Semua isi Start",
      "Hingga 6 halaman: Beranda, Tentang, Layanan, Galeri, FAQ, Kontak",
      "Bantuan menyusun kata-kata di website",
      "Form kontak yang langsung masuk ke email",
      "Laporan jumlah pengunjung",
      "Gratis perawatan 1 bulan",
    ],
  },
  {
    id: "katalog",
    name: "Revize Katalog",
    short: "Katalog",
    body: "Katalog online ibarat etalase toko: semua produk tampil lengkap, pembeli tinggal pesan lewat WhatsApp.",
    fit: "toko kue, butik, toko oleh-oleh",
    icon: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
    introPrice: 4_500_000,
    price: 6_000_000,
    renewal: 750_000,
    duration: "14–21 hari kerja",
    revisions: 3,
    features: [
      "Semua isi Profil",
      "Katalog hingga 50 produk, lengkap dengan foto dan harga",
      "Tombol \"Pesan via WhatsApp\" di setiap produk",
      "Ganti produk, harga, dan foto sendiri lewat HP",
      "Pelatihan singkat cara memakainya",
      "Gratis perawatan 2 bulan",
    ],
  },
  {
    id: "custom",
    name: "Revize Custom",
    short: "Custom",
    body: "Website dengan fitur khusus, misalnya pelanggan booking jadwal sendiri atau bayar langsung di website.",
    fit: "salon, klinik, tempat kursus",
    icon: "M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6-4.5-4.2 6.1-.7z",
    duration: "Sesuai kebutuhan",
    features: [
      "Booking jadwal online",
      "Bayar langsung di website",
      "Akun member untuk pelanggan",
      "Dua bahasa",
      "Terhubung dengan sistem yang sudah Anda pakai",
    ],
  },
];

// The three fixed packages, compared side by side (Custom is quoted per project).
export const fixedPackages = packages.slice(0, 3);

// true = included, false = not included, string = shown as text
export const comparison: { label: string; values: (boolean | string)[] }[] = [
  { label: "Jumlah halaman", values: ["1 halaman panjang (hingga 7 bagian)", "Hingga 6 halaman", "Hingga 8 halaman + halaman produk"] },
  { label: "Desain khusus sesuai usaha Anda, dengan animasi", values: [true, true, true] },
  { label: "Tampil rapi di HP", values: [true, true, true] },
  { label: "Tombol WhatsApp dan peta lokasi", values: [true, true, true] },
  { label: "Alamat website sendiri (tahun pertama)", values: [".com atau .my.id", ".com atau .co.id", ".com atau .co.id"] },
  { label: "Terdaftar di Google", values: [true, true, true] },
  { label: "Setiap halaman diatur supaya mudah ditemukan Google", values: [false, true, true] },
  { label: "Bantuan menyusun kata-kata", values: [false, "Dasar", "Dasar"] },
  { label: "Form kontak yang masuk ke email", values: [false, true, true] },
  { label: "Laporan jumlah pengunjung", values: [false, true, true] },
  { label: "Katalog produk + pesan via WhatsApp", values: [false, false, "Hingga 50 produk"] },
  { label: "Ganti produk, harga, dan foto sendiri lewat HP", values: [false, false, true] },
  { label: "Jatah revisi (permintaan perubahan)", values: fixedPackages.map((p) => `${p.revisions}x`) },
  { label: "Perawatan gratis setelah online", values: [false, "1 bulan", "2 bulan"] },
  { label: "Waktu pengerjaan", values: fixedPackages.map((p) => p.duration) },
];

// price: number = rupiah, string = shown as is
export const addons: { name: string; note: string; price: number | string; from?: boolean; unit?: string }[] = [
  { name: "Halaman tambahan", note: "Untuk paket Profil dan Katalog.", price: 350_000, unit: "/ halaman" },
  { name: "Fitur edit isi sendiri", note: "Ganti teks dan foto sendiri lewat HP. Untuk paket Start dan Profil.", price: 1_000_000 },
  { name: "Produk tambahan di katalog", note: "Untuk katalog dengan lebih dari 50 produk.", price: 300_000, unit: "/ 25 produk" },
  { name: "Penulisan semua teks website", note: "Kami tulis semua kata-kata website dari wawancara singkat dengan Anda.", price: 500_000 },
  { name: "Desain logo", note: "2 pilihan desain, 2x revisi, file siap pakai.", price: 750_000 },
  { name: "Paket identitas brand", note: "Logo, warna, jenis huruf, dan panduan singkat cara memakainya.", price: 1_500_000 },
  { name: "Muncul di Google Maps", note: "Kami siapkan profil usaha Anda di Google Maps (Google Business Profile).", price: 250_000 },
  { name: "Email dengan nama usaha", note: "Contoh: halo@namausaha.com. Biaya langganan dibayar langsung ke penyedia.", price: 250_000 },
  { name: "Dua bahasa", note: "Website dalam bahasa Indonesia dan Inggris.", price: 1_500_000 },
  { name: "Booking jadwal online", note: "Pelanggan pilih jadwal sendiri. Cocok untuk salon, klinik, dan kursus.", price: 2_500_000, from: true },
  { name: "Bayar langsung di website", note: "Pelanggan bisa bayar online. Biaya per transaksi ditanggung pemilik usaha.", price: 3_000_000, from: true },
  { name: "Revisi tambahan", note: "Di luar jatah revisi paket.", price: 150_000, unit: "/ revisi" },
  { name: "Pengerjaan kilat", note: "Waktu pengerjaan dipangkas sekitar separuh.", price: "+30% dari harga paket" },
];

export const care = [
  {
    name: "Rawat Dasar",
    price: 150_000,
    features: [
      "Perpanjangan alamat dan tempat website kami urus",
      "Kami cek website tetap bisa dibuka setiap hari",
      "Cadangan data setiap bulan",
      "1 perubahan kecil per bulan, misalnya ganti harga atau foto",
    ],
  },
  {
    name: "Rawat Plus",
    price: 350_000,
    features: [
      "Semua isi Rawat Dasar",
      "Hingga 4 perubahan per bulan",
      "Laporan jumlah pengunjung setiap bulan",
      "Balasan WhatsApp lebih cepat (1 hari kerja)",
      "Cek kecepatan dan perbaikan kecil",
    ],
  },
];
