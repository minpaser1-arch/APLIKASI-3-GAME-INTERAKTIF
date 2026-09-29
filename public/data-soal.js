/**
 * ============================================================================
 * BANK SOAL RESMI - MADRASAH CERIA (MADRASAH IBTIDAIYAH)
 * File: data-soal.js
 * 
 * PANDUAN PENGGUNAAN & EDIT:
 * 1. Setiap soal memiliki format:
 *    - id: angka pengenal unik
 *    - pertanyaan: teks soal
 *    - pilihan: array 4 opsi jawaban ["A", "B", "C", "D"]
 *    - jawaban: indeks jawaban benar (0 = A, 1 = B, 2 = C, 3 = D)
 *    - pembahasan: penjelasan edukatif mengapa jawaban tersebut benar
 *    - kategori: mata pelajaran (Tahfidz Qur'an, Al-Qur'an Hadits, Akidah Akhlak, Fikih, SKI, Bahasa Arab, Matematika, Bahasa Indonesia, IPAS, Pendidikan Pancasila, SBDP, PJOK)
 *    - fase: Fase A (Kelas 1-2), Fase B (Kelas 3-4), Fase C (Kelas 5-6)
 * 2. Anda dapat menambah, mengedit, atau mengganti soal langsung di file ini.
 * ============================================================================
 */

// BANK SOAL GAME 1: ULAR TANGGA (50 SOAL)
const bankSoalUlarTangga = [
  {
    id: 1,
    pertanyaan: "Surah Al-Fatihah terdiri dari berapa ayat?",
    pilihan: ["5 ayat", "6 ayat", "7 ayat", "8 ayat"],
    jawaban: 2,
    pembahasan: "Surah Al-Fatihah memiliki 7 ayat dan disebut sebagai Ummul Qur'an.",
    kategori: "Tahfidz Qur'an",
    fase: "Fase A",
    kelas: 1
  },
  {
    id: 2,
    pertanyaan: "Simbol sila pertama Pancasila yang mencerminkan Ketuhanan Yang Maha Esa adalah...",
    pilihan: ["Pohon Beringin", "Bintang Emas", "Kepala Banteng", "Rantai"],
    jawaban: 1,
    pembahasan: "Bintang emas berlatar perisai hitam adalah lambang sila pertama Pancasila.",
    kategori: "Pendidikan Pancasila",
    fase: "Fase A",
    kelas: 1
  },
  {
    id: 3,
    pertanyaan: "Sebelum shalat fardhu kita diwajibkan bersuci dengan...",
    pilihan: ["Mandi bola", "Wudhu atau Tayammum", "Memotong kuku", "Menyisir rambut"],
    jawaban: 1,
    pembahasan: "Wudhu adalah syarat sah shalat untuk menghilangkan hadas kecil.",
    kategori: "Fikih",
    fase: "Fase A",
    kelas: 2
  },
  {
    id: 4,
    pertanyaan: "Nabi Muhammad SAW lahir pada tanggal 12 Rabiul Awwal di kota...",
    pilihan: ["Madinah", "Kairo", "Mekkah", "Yerusalem"],
    jawaban: 2,
    pembahasan: "Nabi Muhammad SAW dilahirkan di Mekkah pada Tahun Gajah.",
    kategori: "SKI",
    fase: "Fase B",
    kelas: 3
  },
  {
    id: 5,
    pertanyaan: "Arti dari kosakata bahasa Arab 'Qolamun' (قَلَمٌ) adalah...",
    pilihan: ["Buku", "Pulpen / Pena", "Penghapus", "Penggaris"],
    jawaban: 1,
    pembahasan: "Qolamun artinya pulpen atau pena.",
    kategori: "Bahasa Arab",
    fase: "Fase B",
    kelas: 3
  },
  {
    id: 6,
    pertanyaan: "Gerakan berlari, melompat, dan berjalan termasuk kategori gerak...",
    pilihan: ["Non-Lokomotor", "Lokomotor", "Manipulatif", "Statik"],
    jawaban: 1,
    pembahasan: "Gerak lokomotor adalah gerak yang berpindah tempat.",
    kategori: "PJOK",
    fase: "Fase A",
    kelas: 2
  },
  {
    id: 7,
    pertanyaan: "Kata santun dalam Bahasa Indonesia saat meminta bantuan orang lain adalah...",
    pilihan: ["Hei", "Cepat", "Tolong", "Sini"],
    jawaban: 2,
    pembahasan: "Kata 'Tolong' adalah ungkapan santun meminta bantuan.",
    kategori: "Bahasa Indonesia",
    fase: "Fase A",
    kelas: 1
  },
  {
    id: 8,
    pertanyaan: "Karya seni tempel potongan kertas atau biji-bijian pada gambar disebut...",
    pilihan: ["Patung", "Anyaman", "Kolase", "Pahat"],
    jawaban: 2,
    pembahasan: "Kolase adalah karya seni dua dimensi tempel.",
    kategori: "SBDP",
    fase: "Fase A",
    kelas: 2
  },
  {
    id: 9,
    pertanyaan: "Hasil perhitungan Matematika dari 15 x 6 adalah...",
    pilihan: ["75", "90", "85", "100"],
    jawaban: 1,
    pembahasan: "15 x 6 = 90.",
    kategori: "Matematika",
    fase: "Fase B",
    kelas: 3
  },
  {
    id: 10,
    pertanyaan: "Dalam pelajaran IPAS, zat hijau daun pembuat makanan pada tumbuhan disebut...",
    pilihan: ["Stomata", "Klorofil", "Xilem", "Floem"],
    jawaban: 1,
    pembahasan: "Klorofil menyerap cahaya untuk fotosintesis.",
    kategori: "IPAS",
    fase: "Fase B",
    kelas: 4
  }
];

// BANK SOAL GAME 2: SIAPA INGIN MENJADI JUTAWAN (CONTOH TINGKAT 1-10)
const bankSoalJutawan = [
  {
    id: 101,
    tingkat: 1,
    pertanyaan: "Berapakah jumlah rukun Islam yang wajib diamalkan?",
    pilihan: ["3 perkara", "4 perkara", "5 perkara", "6 perkara"],
    jawaban: 2,
    pembahasan: "Rukun Islam ada 5 perkara.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 102,
    tingkat: 2,
    pertanyaan: "Malaikat diciptakan oleh Allah SWT dari...",
    pilihan: ["Tanah", "Cahaya (Nur)", "Api", "Air"],
    jawaban: 1,
    pembahasan: "Malaikat diciptakan dari cahaya.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 103,
    tingkat: 3,
    pertanyaan: "Arah kiblat umat Islam ketika shalat menghadap ke...",
    pilihan: ["Kuil Shaolin", "Masjidil Aqsa", "Ka'bah di Mekkah", "Matahari terbit"],
    jawaban: 2,
    pembahasan: "Ka'bah di Mekkah adalah kiblat kaum muslimin.",
    kategori: "Fikih"
  },
  {
    id: 104,
    tingkat: 4,
    pertanyaan: "Pusat tata surya kita adalah...",
    pilihan: ["Bulan", "Bumi", "Matahari", "Jupiter"],
    jawaban: 2,
    pembahasan: "Matahari adalah pusat tata surya.",
    kategori: "Tematik MI"
  },
  {
    id: 105,
    tingkat: 5,
    pertanyaan: "Rukun wudhu yang dilakukan setelah membasuh muka adalah...",
    pilihan: ["Membasuh telinga", "Membasuh kedua tangan sampai siku", "Mengusap kepala", "Membasuh kaki"],
    jawaban: 1,
    pembahasan: "Rukun ketiga wudhu adalah membasuh kedua tangan sampai siku.",
    kategori: "Fikih"
  }
];

// BANK SOAL GAME 3: IFP (INTERACTIVE FUN PRACTICE)
const bankSoalIFP = [
  {
    id: 201,
    pertanyaan: "Apa arti bacaan 'Inna lillahi wa inna ilaihi raji'un'?",
    pilihan: [
      "Segala puji bagi Allah",
      "Sesungguhnya kami milik Allah dan kepada-Nyalah kami kembali",
      "Maha Suci Allah yang Maha Agung",
      "Tidak ada daya dan kekuatan kecuali dari Allah"
    ],
    jawaban: 1,
    pembahasan: "Kalimat istirja' diucapkan saat tertimpa musibah.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 202,
    pertanyaan: "Nun mati bertemu huruf Hamzah (ء) dibaca secara...",
    pilihan: ["Izhar Halqi (Jelas)", "Idgham Bighunnah", "Ikhfa", "Iqlab"],
    jawaban: 0,
    pembahasan: "Huruf hamzah termasuk huruf izhar halqi.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 203,
    pertanyaan: "Gelar Umar bin Khattab 'Al-Faruq' berarti...",
    pilihan: ["Pembeda yang benar dan bathil", "Pedang Allah", "Dermawan", "Singa padang pasir"],
    jawaban: 0,
    pembahasan: "Al-Faruq bermakna pemisah kebenaran dan kebatilan.",
    kategori: "SKI"
  }
];

// Ekspor objek global untuk penggunaan web standar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { bankSoalUlarTangga, bankSoalJutawan, bankSoalIFP };
}
