export const site = {
  name: "Revize",
  whatsapp: "6280000000000", // TODO: nomor WhatsApp bisnis (format 62..., tanpa + dan spasi)
  email: "halo@revize.id", // TODO: email final
  instagram: "revize.id", // TODO: username Instagram final
  area: "Seluruh Indonesia (online)", // TODO: area layanan final
};

export const nav = [
  { label: "Layanan", href: "/layanan" },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
