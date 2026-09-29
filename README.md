# 🏫 Madrasah Ceria - Portal Belajar & Game Edukasi MI

> **Website Edukasi Interaktif Jenjang Madrasah Ibtidaiyah (MI)**  
> Memadukan kumpulan materi pelajaran Islam & Umum (Kurikulum Kemenag) dengan 3 permainan edukatif interaktif: **Ular Tangga**, **Siapa Ingin Menjadi Jutawan**, dan **Kuis IFP**.

---

## 🎯 Fitur Utama

1. **Beranda**: Sambutan hangat, pembagian Fase A–C Kurikulum Merdeka Madrasah, kartu 12 mata pelajaran, mutiara hadits, dan info kampus madrasah.
2. **Kumpulan Materi MI (Fase A - C & Kelas 1 - 6)**: 
   - **Pembagian Fase**:
     - **Fase A**: Kelas 1 & Kelas 2 (Fondasi Literasi, Numerasi, Adab & Karakter)
     - **Fase B**: Kelas 3 & Kelas 4 (Penguatan Konsep & Keterampilan)
     - **Fase C**: Kelas 5 & Kelas 6 (Penalaran, Sains Lanjut & Kemandirian)
   - **Mata Pelajaran Lengkap**:
     - 📐 **Matematika**: Bilangan cacah, penjumlahan/pengurangan, perkalian/pembagian, pecahan, dan bangun ruang.
     - ✍️ **Bahasa Indonesia**: Suku kata, kalimat santun, teks eksplanasi ilmiah, dan pidato.
     - 🔬 **IPAS**: Metamorfosis hewan, bagian tumbuhan & fotosintesis, energi, dan sistem organ manusia.
     - 🇮🇩 **Pendidikan Pancasila**: Simbol Garuda, nilai Pancasila, hak & kewajiban, dan keragaman nusantara.
     - 🎨 **SBDP**: Pola irama, seni rupa dua dimensi/kolase, musik tradisional, dan poster edukasi.
     - ⚽ **PJOK**: Gerak lokomotor & non-lokomotor, kebugaran jasmani, dan permainan bola besar.
     - 👑 **Tahfidz Qur'an**: Surah Al-Mu'awwidzat (An-Nas, Al-Falaq, Al-Ikhlas), Ad-Dhuha s/d Al-Bayyinah, hingga An-Naba' & An-Nazi'at.
     - 📖 **Al-Qur'an Hadits, Akidah Akhlak, Fikih, SKI, dan Bahasa Arab**.
3. **3 Game Edukatif (Total 150 Soal Nyata)**:
   - 🎲 **Ular Tangga Santri**: Papan 10×10 (100 petak), dadu acak 1–6, animasi pion santri, tangga berkah, rintangan ular, dan 50 soal pilihan ganda acak. Benar lanjut giliran, salah mundur 2 langkah.
   - 💰 **Siapa Ingin Menjadi Jutawan**: 15 tingkat tangga hadiah (100 s/d 1.000.000 poin), 2 titik aman (soal 5 & 10), 3 bantuan realistis (50:50, Tanya Teman, Polling Penonton kelas), dan tombol bawa pulang hadiah.
   - ✨ **Kuis IFP Interaktif**: 10 soal acak per sesi dari 50 bank soal, skor real-time, timer fleksibel (15 detik, 30 detik, atau santai), kombo streak bonus, dan evaluasi hasil lengkap dengan pembahasan.
4. **Tentang Kami**: Profil madrasah, visi misi, 6 pilar karakter santri, tenaga pendidik, fasilitas, dan kontak.
5. **Bantuan & Panduan**: Panduan cara main 3 game, cara upload ke GitHub & Vercel, dan panduan edit bank soal.

---

## 💻 Cara Menjalankan di Komputer Lokal

1. **Clone atau Unduh Repositori**:
   ```bash
   git clone https://github.com/USERNAME/belajar-madrasah.git
   cd belajar-madrasah
   ```

2. **Pasang Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Server Lokal**:
   ```bash
   npm run dev
   ```
   Buka peramban di `http://localhost:3000`.

---

## 🚀 Panduan Upload ke GitHub & Vercel

### Langkah 1: Siapkan di GitHub
1. Buat repositori baru di GitHub dengan nama: `belajar-madrasah`.
2. Buka terminal di folder proyek ini dan jalankan perintah:
   ```bash
   git init
   git add .
   git commit -m "feat: inisialisasi portal edukasi madrasah ceria"
   git branch -M main
   git remote add origin https://github.com/USERNAME/belajar-madrasah.git
   git push -u origin main
   ```

### Langkah 2: Onlinekan Melalui Vercel
1. Kunjungi **[vercel.com](https://vercel.com)** dan masuk dengan akun GitHub Anda.
2. Klik **Add New** → **Project**.
3. Pilih repositori **belajar-madrasah** dari daftar repositori Anda.
4. Pada kolom pengaturan Framework, pilih **Vite** (atau biarkan default terdeteksi otomatis).
5. Klik tombol **Deploy**.
6. Selesai! Website Anda langsung online di alamat:
   `https://belajar-madrasah.vercel.app`

---

## ✏️ Panduan Mengedit & Menambah Soal

Bank soal tersimpan di file:
- `public/data-soal.js` (untuk versi statis mandiri)
- `src/data/soal.ts` (untuk komponen aplikasi React)

Contoh struktur soal:
```javascript
{
  id: 1,
  pertanyaan: "Surah Al-Fatihah terdiri dari berapa ayat?",
  pilihan: ["5 ayat", "6 ayat", "7 ayat", "8 ayat"],
  jawaban: 2, // Indeks 2 berarti opsi C ("7 ayat")
  pembahasan: "Surah Al-Fatihah memiliki 7 ayat dan disebut Ummul Qur'an.",
  kategori: "Al-Qur'an Hadits"
}
```

*Catatan:*
- `pilihan`: Array berisi 4 opsi jawaban.
- `jawaban`: Indeks jawaban yang benar (`0` = A, `1` = B, `2` = C, `3` = D).
- Setelah mengedit, lakukan `git commit` dan `git push` ke GitHub. Vercel akan otomatis memperbarui situs secara langsung!

---

## 🕌 Lisensi & Hak Cipta
Didedikasikan untuk kemajuan pendidikan anak bangsa dan santri Madrasah Ibtidaiyah di seluruh pelosok Indonesia. Bebas dikembangkan dan dimanfaatkan untuk kegiatan belajar-mengajar.
