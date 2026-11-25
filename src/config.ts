export const site = {
  name: "Revize",
  whatsapp: "6285213252639", // format 62..., tanpa + dan spasi
  email: "revizecre@gmail.com",
  instagram: "revize.cre",
  tiktok: "revize.cre",
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
