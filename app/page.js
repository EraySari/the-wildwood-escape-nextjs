import Image from "next/image";
import background from "@/public/background.png";
import Link from "next/link";

export default function Page() {
  return (
    <main className="mt-28">
      <Image
        src={background}
        fill // en yakin relative konumlu üst öge icin absolute olarak ayarlanir
        placeholder="blur"
        quality={100}
        alt="A cabin at night with mountains"
        className="object-cover object-top"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-8xl font-medium text-maincolor mb-10 tracking-tight">
          Embrace the Silence
        </h1>
        <Link href="/cabins" className="bg-yellow text-night font-semibold p-6">
          Explore luxury cabins
        </Link>
      </div>
    </main>
  );
}

// En Uygun Buton Renkleri
// 1️⃣ Kehribar Sarısı (#D4A373) → Ahşap ve sıcak ışıkla uyumlu
// 2️⃣ Orman Yeşili (#3A5A40) → Doğal ve sakin
// 3️⃣ Koyu Lacivert (#1B263B) → Gece havasını destekler
// 4️⃣ Mat Beyaz (#F5F5F5) → Lüks ve şık

// Öneri:

// Sarı veya yeşil tonları "Reserve Now" gibi ana aksiyon butonları için ideal.
// Lacivert veya beyaz bilgi butonlarında kullanılabilir.
// 🎨 Website Teması (Cabin Booking için)
// 🔹 Arka Plan & UI: Koyu yeşil, kahverengi, koyu mavi tonları
// 🔹 Metinler: Açık gri veya sıcak beyaz
// 🔹 Hover Efektleri: Opaklığı artırılmış sarı veya altın tonları

// Başlıklar (H1, H2, Öne Çıkan Metinler)
// 🔹 Sıcak Beyaz (#F5F5F5) → "Welcome to paradise" gibi büyük başlıklar için net ve şık görünüm sağlar.
// 🔹 Kehribar Sarısı (#D4A373) → Alt başlıklar veya vurgulu yazılar için uyumlu.

// ✅ Paragraf ve Açıklama Yazıları
// 🔹 Açık Gri (#BFC0C0) → Okunaklı ve modern bir his katar.
// 🔹 Koyu Bej (#EAE0D5) → Doğal ve ahşap detaylarla uyum sağlar.

// ✅ Linkler ve Buton Yazıları
// 🔹 Altın Sarısı (#E6B800) → CTA butonları için dikkat çeker.
// 🔹 Soğuk Gri (#A8B2C8) → Linkler için sade ve zarif durur.

// Özetle:

// Başlıklar için beyaz veya sarımsı tonlar
// Metinler için açık gri veya bej
// Butonlar için kontrastlı altın sarısı veya koyu tonlar
