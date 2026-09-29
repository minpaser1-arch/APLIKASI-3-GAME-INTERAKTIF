import { Question } from '../types';

// ============================================================================
// GAME 1: ULAR TANGGA (50 SOAL PILIHAN GANDA)
// Topik: Al-Qur'an Hadits, Akidah Akhlak, Fikih, SKI, Bahasa Arab, Sains/Tematik MI
// ============================================================================
export const soalUlarTangga: Question[] = [
  {
    id: 1,
    pertanyaan: "Surah Al-Fatihah terdiri dari berapa ayat?",
    pilihan: ["5 ayat", "6 ayat", "7 ayat", "8 ayat"],
    jawaban: 2,
    pembahasan: "Surah Al-Fatihah memiliki 7 ayat dan disebut sebagai Ummul Qur'an (Induk Al-Qur'an).",
    kategori: "Tahfidz Qur'an"
  },
  {
    id: 2,
    pertanyaan: "Simbol sila pertama Pancasila yang mencerminkan Ketuhanan Yang Maha Esa adalah...",
    pilihan: ["Pohon Beringin", "Bintang Emas", "Kepala Banteng", "Rantai"],
    jawaban: 1,
    pembahasan: "Bintang emas berlatar perisai hitam adalah lambang sila pertama Pancasila.",
    kategori: "Pendidikan Pancasila"
  },
  {
    id: 3,
    pertanyaan: "Sebelum melaksanakan shalat, seorang muslim diwajibkan untuk bersuci dengan cara...",
    pilihan: ["Mandi bola", "Wudhu atau Tayammum", "Memotong kuku", "Menyisir rambut"],
    jawaban: 1,
    pembahasan: "Wudhu adalah syarat sah shalat untuk menghilangkan hadas kecil. Jika tidak ada air, diganti tayammum.",
    kategori: "Fikih"
  },
  {
    id: 4,
    pertanyaan: "Nabi Muhammad SAW lahir pada tanggal 12 Rabiul Awwal di kota...",
    pilihan: ["Madinah", "Kairo", "Mekkah", "Yerusalem"],
    jawaban: 2,
    pembahasan: "Nabi Muhammad SAW lahir di kota Mekkah pada Tahun Gajah.",
    kategori: "SKI"
  },
  {
    id: 5,
    pertanyaan: "Arti dari kosakata bahasa Arab 'Qolamun' (قَلَمٌ) adalah...",
    pilihan: ["Buku", "Pulpen / Pena", "Penghapus", "Penggaris"],
    jawaban: 1,
    pembahasan: "Qolamun artinya pulpen atau pena.",
    kategori: "Bahasa Arab"
  },
  {
    id: 6,
    pertanyaan: "Dalam pelajaran PJOK, gerakan berlari, melompat, dan berjalan termasuk kategori gerak...",
    pilihan: ["Non-Lokomotor", "Lokomotor", "Manipulatif", "Statik"],
    jawaban: 1,
    pembahasan: "Gerak lokomotor adalah gerakan berpindah tempat dari satu titik ke titik lain.",
    kategori: "PJOK"
  },
  {
    id: 7,
    pertanyaan: "Dalam Bahasa Indonesia, kata santun yang diucapkan saat kita meminta bantuan orang lain adalah...",
    pilihan: ["Hei", "Cepat", "Tolong", "Sini"],
    jawaban: 2,
    pembahasan: "Kata 'Tolong' adalah ungkapan santun saat membutuhkan bantuan orang lain.",
    kategori: "Bahasa Indonesia"
  },
  {
    id: 8,
    pertanyaan: "Karya seni rupa dua dimensi yang dibuat dengan teknik menempel potongan kertas atau biji-bijian disebut...",
    pilihan: ["Patung", "Anyaman", "Kolase", "Pahat"],
    jawaban: 2,
    pembahasan: "Kolase adalah karya seni tempel dengan berbagai bahan (kertas, biji, daun) pada bidang datar.",
    kategori: "SBDP"
  },
  {
    id: 9,
    pertanyaan: "Hasil perhitungan matematika dari 15 x 6 adalah...",
    pilihan: ["75", "90", "85", "100"],
    jawaban: 1,
    pembahasan: "15 x 6 = 90.",
    kategori: "Matematika"
  },
  {
    id: 10,
    pertanyaan: "Dalam mata pelajaran IPAS, zat hijau pada daun yang berfungsi menyerap sinar matahari untuk fotosintesis adalah...",
    pilihan: ["Stomata", "Klorofil", "Xilem", "Floem"],
    jawaban: 1,
    pembahasan: "Klorofil adalah zat hijau daun tempat berlangsungnya pembuatan makanan pada tumbuhan.",
    kategori: "IPAS"
  },
  {
    id: 11,
    pertanyaan: "Hukum bacaan Nun Sukun (نْ) bertemu huruf Ba (ب) disebut...",
    pilihan: ["Izhar", "Idgham Bighunnah", "Iqlab", "Ikhfa Haqiqi"],
    jawaban: 2,
    pembahasan: "Iqlab terjadi ketika nun sukun atau tanwin bertemu huruf ba, bunyinya berubah menjadi mim.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 12,
    pertanyaan: "Asmaul Husna 'Ar-Rahman' artinya Allah Maha...",
    pilihan: ["Penyayang", "Pengasih", "Mendengar", "Melihat"],
    jawaban: 1,
    pembahasan: "Ar-Rahman artinya Maha Pengasih kepada semua makhluk di dunia.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 13,
    pertanyaan: "Puasa wajib yang dikerjakan oleh umat Islam selama satu bulan penuh dilaksanakan pada bulan...",
    pilihan: ["Sya'ban", "Ramadhan", "Syawwal", "Dzulhijjah"],
    jawaban: 1,
    pembahasan: "Puasa wajib fardhu 'ain dilaksanakan pada bulan suci Ramadhan.",
    kategori: "Fikih"
  },
  {
    id: 14,
    pertanyaan: "Ibu kandung Nabi Muhammad SAW bernama...",
    pilihan: ["Siti Khadijah", "Siti Aminah", "Siti Aisyah", "Halimatus Sa'diyah"],
    jawaban: 1,
    pembahasan: "Ibu kandung Nabi Muhammad SAW bernama Siti Aminah binti Wahab.",
    kategori: "SKI"
  },
  {
    id: 15,
    pertanyaan: "Arti kata 'Kitabun' (كِتَابٌ) dalam bahasa Indonesia adalah...",
    pilihan: ["Meja", "Pintu", "Buku", "Papan tulis"],
    jawaban: 2,
    pembahasan: "Kitabun berarti buku.",
    kategori: "Bahasa Arab"
  },
  {
    id: 16,
    pertanyaan: "Benda langit yang menjadi pusat tata surya kita adalah...",
    pilihan: ["Bulan", "Bumi", "Matahari", "Mars"],
    jawaban: 2,
    pembahasan: "Matahari adalah bintang yang menjadi pusat tata surya dikelilingi planet-planet.",
    kategori: "Tematik MI"
  },
  {
    id: 17,
    pertanyaan: "Sikap terpuji selalu berkata benar dan tidak berbohong dinamakan...",
    pilihan: ["Kadzib", "Jujur (Siddiq)", "Khianat", "Sombong"],
    jawaban: 1,
    pembahasan: "Jujur atau Siddiq adalah sifat para nabi dan akhlak mulia dalam Islam.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 18,
    pertanyaan: "Jumlah rakaat shalat Maghrib adalah...",
    pilihan: ["2 rakaat", "3 rakaat", "4 rakaat", "5 rakaat"],
    jawaban: 1,
    pembahasan: "Shalat Maghrib berjumlah 3 rakaat.",
    kategori: "Fikih"
  },
  {
    id: 19,
    pertanyaan: "Wahyu pertama diturunkan kepada Nabi Muhammad SAW bertempat di...",
    pilihan: ["Gua Hira", "Gua Tsur", "Masjid Nabawi", "Padang Arafah"],
    jawaban: 0,
    pembahasan: "Wahyu pertama (Surah Al-'Alaq 1-5) turun di Gua Hira melalui Malaikat Jibril.",
    kategori: "SKI"
  },
  {
    id: 20,
    pertanyaan: "Bahasa Arab dari 'Matahari' adalah...",
    pilihan: ["Qomarun", "Syamsun", "Najmun", "Samaa'un"],
    jawaban: 1,
    pembahasan: "Syamsun (شَمْسٌ) artinya matahari.",
    kategori: "Bahasa Arab"
  },
  {
    id: 21,
    pertanyaan: "Bunyi bacaan tahmid adalah...",
    pilihan: ["Subhanallah", "Alhamdulillah", "Allahu Akbar", "Laa ilaaha illallah"],
    jawaban: 1,
    pembahasan: "Tahmid adalah ucapan Alhamdulillah (Segala puji bagi Allah).",
    kategori: "Akidah Akhlak"
  },
  {
    id: 22,
    pertanyaan: "Najis air kencing bayi laki-laki di bawah 2 tahun yang hanya minum ASI termasuk najis...",
    pilihan: ["Mukhaffafah (Ringan)", "Mutawassithah (Sedang)", "Mughalladhah (Berat)", "Ghaib"],
    jawaban: 0,
    pembahasan: "Termasuk najis mukhaffafah, cara mensucikannya cukup dengan memercikkan air bersih.",
    kategori: "Fikih"
  },
  {
    id: 23,
    pertanyaan: "Sahabat yang menemani Nabi Muhammad SAW saat hijrah dan bersembunyi di Gua Tsur adalah...",
    pilihan: ["Umar bin Khattab", "Abu Bakar Ash-Shiddiq", "Utsman bin Affan", "Ali bin Abi Thalib"],
    jawaban: 1,
    pembahasan: "Abu Bakar Ash-Shiddiq RA adalah sahabat setia yang menemani Nabi saat hijrah ke Madinah.",
    kategori: "SKI"
  },
  {
    id: 24,
    pertanyaan: "Huruf Qalqalah ada 5 yang disingkat dalam kata...",
    pilihan: ["Baju di toko (ب، ج، د، ط، ق)", "Buku saya baru", "Kucing hitam manis", "Gajah lari cepat"],
    jawaban: 0,
    pembahasan: "Huruf qalqalah adalah Qaf, Tha, Ba, Jim, Dal (baju di toko).",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 25,
    pertanyaan: "Hasil dari 25 x 4 adalah...",
    pilihan: ["80", "90", "100", "120"],
    jawaban: 2,
    pembahasan: "25 x 4 = 100.",
    kategori: "Tematik MI"
  },
  {
    id: 26,
    pertanyaan: "Adab makan menurut ajaran Islam hendaknya menggunakan tangan...",
    pilihan: ["Kiri", "Kanan", "Kedua tangan", "Sembarang"],
    jawaban: 1,
    pembahasan: "Rasulullah SAW mengajarkan makan dan minum dengan tangan kanan dan membaca bismillah.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 27,
    pertanyaan: "Zakat yang wajib dikeluarkan setiap muslim menjelang hari raya Idul Fitri adalah zakat...",
    pilihan: ["Zakat Mal", "Zakat Fitrah", "Zakat Perniagaan", "Zakat Emas"],
    jawaban: 1,
    pembahasan: "Zakat fitrah wajib ditunaikan sebelum shalat Idul Fitri untuk mensucikan diri dan membantu fakir miskin.",
    kategori: "Fikih"
  },
  {
    id: 28,
    pertanyaan: "Kota tujuan hijrah Nabi Muhammad SAW dan kaum muslimin dari Mekkah bernama Yatsrib, yang kemudian diubah menjadi...",
    pilihan: ["Baghdad", "Madinah Al-Munawwarah", "Damaskus", "Kufah"],
    jawaban: 1,
    pembahasan: "Yatsrib diubah namanya menjadi Madinah Al-Munawwarah (Kota yang Bercahaya).",
    kategori: "SKI"
  },
  {
    id: 29,
    pertanyaan: "Bahasa Arab untuk 'Kepala' adalah...",
    pilihan: ["'Ainun", "Anfun", "Ro'sun", "Yadun"],
    jawaban: 2,
    pembahasan: "Ro'sun (رَأْسٌ) artinya kepala.",
    kategori: "Bahasa Arab"
  },
  {
    id: 30,
    pertanyaan: "Proses tumbuhan hijau membuat makanannya sendiri dengan bantuan cahaya matahari disebut...",
    pilihan: ["Respirasi", "Fotosintesis", "Adaptasi", "Metamorfosis"],
    jawaban: 1,
    pembahasan: "Fotosintesis adalah proses pembentukan makanan pada tumbuhan berdaun hijau.",
    kategori: "Tematik MI"
  },
  {
    id: 31,
    pertanyaan: "Surah An-Nas diturunkan untuk memohon perlindungan kepada Allah dari kejahatan...",
    pilihan: ["Orang zalim", "Bisikan setan dan manusia", "Binatang buas", "Bencana alam"],
    jawaban: 1,
    pembahasan: "Surah An-Nas berisi permohonan perlindungan dari waswas/bisikan setan dan jin serta manusia.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 32,
    pertanyaan: "Malaikat yang bertugas meniup sangkakala pada hari kiamat adalah...",
    pilihan: ["Malaikat Jibril", "Malaikat Mikail", "Malaikat Israfil", "Malaikat Ridwan"],
    jawaban: 2,
    pembahasan: "Malaikat Israfil ditiupkan tugas meniup sangkakala kiamat dan kebangkitan.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 33,
    pertanyaan: "Gerakan berdiri kembali setelah ruku' dalam shalat disebut...",
    pilihan: ["Sujud", "I'tidal", "Tasyahud", "Salam"],
    jawaban: 1,
    pembahasan: "I'tidal adalah gerakan bangkit dari ruku' seraya membaca 'Sami'allahu liman hamidah'.",
    kategori: "Fikih"
  },
  {
    id: 34,
    pertanyaan: "Masjid pertama yang dibangun oleh Rasulullah SAW saat perjalanan hijrah adalah Masjid...",
    pilihan: ["Masjid Nabawi", "Masjid Quba", "Masjidil Aqsa", "Masjidil Haram"],
    jawaban: 1,
    pembahasan: "Masjid Quba adalah masjid pertama yang dibangun Rasulullah SAW atas dasar takwa.",
    kategori: "SKI"
  },
  {
    id: 35,
    pertanyaan: "Ucapan 'Syukron' (شُكْرًا) dalam bahasa Arab dijawab dengan...",
    pilihan: ["Afwan (عَفْوًا)", "Ahlan wa sahlan", "Shobahun nuur", "Ma'as salamah"],
    jawaban: 0,
    pembahasan: "Ucapan terima kasih 'Syukron' dijawab dengan 'Afwan' (sama-sama).",
    kategori: "Bahasa Arab"
  },
  {
    id: 36,
    pertanyaan: "Bagian tubuh ikan yang digunakan untuk bernapas di dalam air adalah...",
    pilihan: ["Paru-paru", "Insang", "Sirip", "Sisik"],
    jawaban: 1,
    pembahasan: "Ikan bernapas menggunakan insang untuk menyerap oksigen dalam air.",
    kategori: "Tematik MI"
  },
  {
    id: 37,
    pertanyaan: "Hadits nabi berbunyi 'Thoharatu syatrul iimaan', artinya kebersihan itu sebagian dari...",
    pilihan: ["Kekayaan", "Kesehatan", "Iman", "Kecerdasan"],
    jawaban: 2,
    pembahasan: "Kebersihan adalah sebagian dari iman (HR. Muslim).",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 38,
    pertanyaan: "Sifat mustahil bagi Allah 'Fana' artinya...",
    pilihan: ["Rusak / binasa", "Bodoh", "Tuli", "Bisu"],
    jawaban: 0,
    pembahasan: "Fana artinya dapat binasa/rusak, mustahil bagi Allah karena Allah itu Baqa' (Kekal).",
    kategori: "Akidah Akhlak"
  },
  {
    id: 39,
    pertanyaan: "Batas minimal jumlah hewan atau harta yang wajib dizakati disebut...",
    pilihan: ["Haul", "Nisab", "Kifarah", "Fidyah"],
    jawaban: 1,
    pembahasan: "Nisab adalah ukuran minimal kepemilikan harta yang terkena kewajiban zakat.",
    kategori: "Fikih"
  },
  {
    id: 40,
    pertanyaan: "Khalifah pertama dari Khulafaur Rasyidin yang memimpin umat Islam setelah Nabi wafat adalah...",
    pilihan: ["Umar bin Khattab", "Abu Bakar Ash-Shiddiq", "Utsman bin Affan", "Ali bin Abi Thalib"],
    jawaban: 1,
    pembahasan: "Abu Bakar Ash-Shiddiq adalah khalifah pertama (632–634 M).",
    kategori: "SKI"
  },
  {
    id: 41,
    pertanyaan: "Bahasa Arab dari 'Sekolah' adalah...",
    pilihan: ["Baitun", "Masjidun", "Madrosatun", "Ghurfatun"],
    jawaban: 2,
    pembahasan: "Madrosatun (مَدْرَسَةٌ) artinya sekolah atau madrasah.",
    kategori: "Bahasa Arab"
  },
  {
    id: 42,
    pertanyaan: "Bangun datar yang memiliki 4 sisi sama panjang dan 4 sudut siku-siku adalah...",
    pilihan: ["Persegi panjang", "Persegi / Bujur sangkar", "Trapesium", "Jajar genjang"],
    jawaban: 1,
    pembahasan: "Persegi memiliki 4 sisi sama panjang dan 4 sudut 90 derajat.",
    kategori: "Tematik MI"
  },
  {
    id: 43,
    pertanyaan: "Hukum bacaan Izhar Halqi dibaca dengan cara...",
    pilihan: ["Mendengung", "Samar-samar", "Jelas dan terang", "Membalik bunyi"],
    jawaban: 2,
    pembahasan: "Izhar berarti jelas atau terang tanpa mendengung.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 44,
    pertanyaan: "Menghormati orang tua dan tidak berkata 'Ah' atau membentak termasuk wujud...",
    pilihan: ["Birrul Walidain", "Uququl Walidain", "Sombong", "Riya'"],
    jawaban: 0,
    pembahasan: "Birrul Walidain adalah berbakti dan menghormati kedua orang tua.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 45,
    pertanyaan: "Panggilan suci yang menandakan waktu shalat fardhu telah masuk adalah...",
    pilihan: ["Iqamah", "Adzan", "Takbir", "Tasbih"],
    jawaban: 1,
    pembahasan: "Adzan adalah panggilan dan pemberitahuan masuknya waktu shalat.",
    kategori: "Fikih"
  },
  {
    id: 46,
    pertanyaan: "Istri pertama Rasulullah SAW yang setia mendukung dakwah beliau bernama...",
    pilihan: ["Aisyah binti Abu Bakar", "Khadijah binti Khuwailid", "Hafshah binti Umar", "Fathimah Az-Zahra"],
    jawaban: 1,
    pembahasan: "Sayyidah Khadijah RA adalah istri pertama Rasulullah SAW dan wanita pertama yang memeluk Islam.",
    kategori: "SKI"
  },
  {
    id: 47,
    pertanyaan: "Bahasa Arab 'Ustadzun' (أُسْتَاذٌ) artinya...",
    pilihan: ["Murid", "Guru laki-laki", "Kepala madrasah", "Satpam"],
    jawaban: 1,
    pembahasan: "Ustadzun berarti bapak guru atau pengajar laki-laki.",
    kategori: "Bahasa Arab"
  },
  {
    id: 48,
    pertanyaan: "Benda yang dapat ditarik oleh magnet umumnya terbuat dari...",
    pilihan: ["Kayu", "Plastik", "Besi atau baja", "Kaca"],
    jawaban: 2,
    pembahasan: "Magnet menarik benda feromagnetik seperti besi, baja, dan nikel.",
    kategori: "Tematik MI"
  },
  {
    id: 49,
    pertanyaan: "Surah Al-Kautsar menceritakan tentang nikmat Allah yang sangat...",
    pilihan: ["Sedikit", "Banyak dan berlimpah", "Terbatas", "Sementara"],
    jawaban: 1,
    pembahasan: "Al-Kautsar artinya nikmat yang banyak dan berlimpah ruah.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 50,
    pertanyaan: "Malaikat yang bertugas menjaga pintu Surga adalah...",
    pilihan: ["Malaikat Malik", "Malaikat Ridwan", "Malaikat Munkar", "Malaikat Nakir"],
    jawaban: 1,
    pembahasan: "Malaikat Ridwan adalah malaikat yang bertugas menjaga pintu Surga.",
    kategori: "Akidah Akhlak"
  }
];

// ============================================================================
// GAME 2: SIAPA INGIN MENJADI JUTAWAN (50 SOAL BERTINGKAT 1 - 15)
// ============================================================================
export const soalJutawan: Question[] = [
  // Tingkat 1 (100 poin - Mudah)
  {
    id: 101,
    tingkat: 1,
    pertanyaan: "Berapakah jumlah rukun Islam yang wajib diamalkan setiap muslim?",
    pilihan: ["3 perkara", "4 perkara", "5 perkara", "6 perkara"],
    jawaban: 2,
    pembahasan: "Rukun Islam ada 5: Syahadat, Shalat, Zakat, Puasa, dan Haji bagi yang mampu.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 102,
    tingkat: 1,
    pertanyaan: "Kitab suci yang diturunkan kepada Nabi Muhammad SAW adalah...",
    pilihan: ["Taurat", "Zabur", "Injil", "Al-Qur'an"],
    jawaban: 3,
    pembahasan: "Al-Qur'an adalah mukjizat terbesar yang diturunkan kepada Nabi Muhammad SAW.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 103,
    tingkat: 1,
    pertanyaan: "Berapa rakaat shalat Shubuh dikerjakan?",
    pilihan: ["2 rakaat", "3 rakaat", "4 rakaat", "1 rakaat"],
    jawaban: 0,
    pembahasan: "Shalat Shubuh dikerjakan sebanyak 2 rakaat di pagi hari.",
    kategori: "Fikih"
  },
  // Tingkat 2 (200 poin - Mudah)
  {
    id: 104,
    tingkat: 2,
    pertanyaan: "Malaikat diciptakan oleh Allah SWT dari...",
    pilihan: ["Tanah", "Cahaya (Nur)", "Api", "Air"],
    jawaban: 1,
    pembahasan: "Malaikat diciptakan dari cahaya, jin dari api, dan manusia dari tanah.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 105,
    tingkat: 2,
    pertanyaan: "Sebelum membaca Al-Qur'an, kita disunnahkan membaca ta'awudz dan...",
    pilihan: ["Hamdalah", "Basmalah", "Takbir", "Istighfar"],
    jawaban: 1,
    pembahasan: "Basmalah (Bismillahirrahmanirrahim) dibaca saat hendak memulai amal kebaikan.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 106,
    tingkat: 2,
    pertanyaan: "Nabi pertama sekaligus manusia pertama yang diciptakan Allah adalah Nabi...",
    pilihan: ["Nabi Nuh AS", "Nabi Ibrahim AS", "Nabi Adam AS", "Nabi Musa AS"],
    jawaban: 2,
    pembahasan: "Nabi Adam AS adalah bapak seluruh umat manusia.",
    kategori: "SKI"
  },
  // Tingkat 3 (300 poin - Mudah)
  {
    id: 107,
    tingkat: 3,
    pertanyaan: "Arah kiblat umat Islam ketika melaksanakan shalat menghadap ke...",
    pilihan: ["Kuil Shaolin", "Masjidil Aqsa", "Ka'bah di Mekkah", "Matahari terbit"],
    jawaban: 2,
    pembahasan: "Ka'bah di Masjidil Haram kota Mekkah adalah kiblat shalat kaum muslimin.",
    kategori: "Fikih"
  },
  {
    id: 108,
    tingkat: 3,
    pertanyaan: "Arti dari kalimat syahadat 'Asyhadu alla ilaha illallah' adalah...",
    pilihan: [
      "Allah Maha Besar di langit",
      "Tiada Tuhan selain Allah",
      "Muhammad utusan Allah",
      "Segala puji bagi Allah"
    ],
    jawaban: 1,
    pembahasan: "Artinya: 'Aku bersaksi bahwa tiada sesembahan yang berhak disembah selain Allah'.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 109,
    tingkat: 3,
    pertanyaan: "Bahasa Arab untuk 'Buku Tulis' adalah...",
    pilihan: ["Daftarun (دَفْتَرٌ)", "Qolamun", "Kursiyyun", "Baabun"],
    jawaban: 0,
    pembahasan: "Daftarun berarti buku tulis atau buku catatan.",
    kategori: "Bahasa Arab"
  },
  // Tingkat 4 (500 poin - Menuju Titik Aman 1)
  {
    id: 110,
    tingkat: 4,
    pertanyaan: "Hewan unta diciptakan Allah dengan punuk di punggungnya yang berfungsi menyimpan...",
    pilihan: ["Air murni", "Lemak cadangan energi", "Daging ekstra", "Garam mineral"],
    jawaban: 1,
    pembahasan: "Punuk unta menyimpan lemak yang dapat diubah menjadi energi dan air saat melintasi gurun.",
    kategori: "Tematik MI"
  },
  {
    id: 111,
    tingkat: 4,
    pertanyaan: "Surah pendek di juz 30 yang menceritakan tentang pasukan gajah yang dihancurkan adalah surah...",
    pilihan: ["Al-Fil", "Al-Quraisy", "Al-Lahab", "Al-Humazah"],
    jawaban: 0,
    pembahasan: "Surah Al-Fil menceritakan pasukan Raja Abrahah bergajah yang dihancurkan burung Ababil.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 112,
    tingkat: 4,
    pertanyaan: "Nama paman Nabi Muhammad SAW yang merawat dan membela beliau dengan penuh kasih sayang adalah...",
    pilihan: ["Abu Jahal", "Abu Lahab", "Abu Thalib", "Hamzah bin Abdul Muthalib"],
    jawaban: 2,
    pembahasan: "Abu Thalib mengasuh Nabi SAW setelah kakek beliau, Abdul Muthalib, wafat.",
    kategori: "SKI"
  },
  // Tingkat 5 (1.000 poin - TITIK AMAN 1!)
  {
    id: 113,
    tingkat: 5,
    pertanyaan: "Rukun wudhu yang dilakukan setelah membasuh muka adalah...",
    pilihan: ["Membasuh kedua telinga", "Membasuh kedua tangan sampai siku", "Mengusap kepala", "Membasuh kaki"],
    jawaban: 1,
    pembahasan: "Urutan rukun wudhu: Niat -> Membasuh muka -> Membasuh kedua tangan sampai siku -> Mengusap sebagian kepala -> Membasuh kaki sampai mata kaki -> Tertib.",
    kategori: "Fikih"
  },
  {
    id: 114,
    tingkat: 5,
    pertanyaan: "Berapa jumlah Malaikat yang wajib diketahui oleh setiap muslim?",
    pilihan: ["5 malaikat", "10 malaikat", "25 malaikat", "99 malaikat"],
    jawaban: 1,
    pembahasan: "Ada 10 malaikat utama yang wajib diimani beserta tugas-tugasnya.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 115,
    tingkat: 5,
    pertanyaan: "Ayah Nabi Muhammad SAW bernama Abdullah, beliau wafat ketika Nabi SAW...",
    pilihan: ["Berumur 6 tahun", "Masih dalam kandungan ibunda", "Sudah berusia 25 tahun", "Berumur 12 tahun"],
    jawaban: 1,
    pembahasan: "Abdullah bin Abdul Muthalib wafat saat Nabi Muhammad SAW masih di dalam kandungan Siti Aminah.",
    kategori: "SKI"
  },
  // Tingkat 6 (2.000 poin - Menengah)
  {
    id: 116,
    tingkat: 6,
    pertanyaan: "Hukum bacaan Mim Sukun (مْ) bertemu huruf Ba (ب) dinamakan...",
    pilihan: ["Ikhfa Haqiqi", "Ikhfa Syafawi", "Idgham Mimi", "Izhar Halqi"],
    jawaban: 1,
    pembahasan: "Ikhfa Syafawi terjadi bila mim sukun bertemu huruf ba, dibaca samar dengan dengung.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 117,
    tingkat: 6,
    pertanyaan: "Kitab Zabur diturunkan oleh Allah SWT kepada Nabi...",
    pilihan: ["Nabi Musa AS", "Nabi Isa AS", "Nabi Dawud AS", "Nabi Ibrahim AS"],
    jawaban: 2,
    pembahasan: "Kitab Zabur diturunkan kepada Nabi Dawud AS.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 118,
    tingkat: 6,
    pertanyaan: "Shalat sunnah yang dikerjakan khusus pada malam hari di bulan suci Ramadhan adalah...",
    pilihan: ["Shalat Dhuha", "Shalat Tahajjud", "Shalat Tarawih", "Shalat Istikharah"],
    jawaban: 2,
    pembahasan: "Shalat Tarawih dikerjakan sesudah Isya khusus pada malam bulan Ramadhan.",
    kategori: "Fikih"
  },
  // Tingkat 7 (4.000 poin - Menengah)
  {
    id: 119,
    tingkat: 7,
    pertanyaan: "Peristiwa perjalanan malam Nabi Muhammad SAW dari Masjidil Haram ke Masjidil Aqsa lalu ke Sidratul Muntaha disebut...",
    pilihan: ["Hijrah", "Fathu Makkah", "Isra Mi'raj", "Bai'at Aqabah"],
    jawaban: 2,
    pembahasan: "Isra Mi'raj adalah mukjizat perjalanan Nabi di mana beliau menerima perintah shalat 5 waktu.",
    kategori: "SKI"
  },
  {
    id: 120,
    tingkat: 7,
    pertanyaan: "Dalam ilmu IPA, planet terdekat dari matahari dalam tata surya adalah...",
    pilihan: ["Venus", "Merkurius", "Bumi", "Mars"],
    jawaban: 1,
    pembahasan: "Merkurius adalah planet pertama paling dekat dengan matahari.",
    kategori: "Tematik MI"
  },
  {
    id: 121,
    tingkat: 7,
    pertanyaan: "Bahasa Arab untuk kata 'Pintu' adalah...",
    pilihan: ["Naafidzatun", "Baabun (بَابٌ)", "Jidaarun", "Saqfun"],
    jawaban: 1,
    pembahasan: "Baabun artinya pintu.",
    kategori: "Bahasa Arab"
  },
  // Tingkat 8 (8.000 poin - Menengah)
  {
    id: 122,
    tingkat: 8,
    pertanyaan: "Sifat wajib bagi para Rasul yang berarti 'Menyampaikan wahyu' adalah...",
    pilihan: ["Siddiq", "Amanah", "Tabligh", "Fathanah"],
    jawaban: 2,
    pembahasan: "Tabligh berarti menyampaikan seluruh wahyu Allah tanpa ada yang disembunyikan.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 123,
    tingkat: 8,
    pertanyaan: "Batas waktu diperbolehkannya makan sahur berakhir ketika terbit...",
    pilihan: ["Matahari pagi", "Fajar Shiddiq (Waktu Shubuh)", "Bintang kejora", "Waktu Isya"],
    jawaban: 1,
    pembahasan: "Mulai puasa ditandai dengan terbitnya fajar shiddiq (masuk waktu shalat Shubuh).",
    kategori: "Fikih"
  },
  {
    id: 124,
    tingkat: 8,
    pertanyaan: "Kaum muslimin asli Madinah yang menyambut dan menolong kaum Muhajirin disebut kaum...",
    pilihan: ["Quraisy", "Anshar", "Khazraj", "Aus"],
    jawaban: 1,
    pembahasan: "Kaum Anshar (penolong) adalah penduduk Madinah yang menyambut kaum Muhajirin Mekkah.",
    kategori: "SKI"
  },
  // Tingkat 9 (16.000 poin - Menengah Menantang)
  {
    id: 125,
    tingkat: 9,
    pertanyaan: "Hukum membaca huruf Alif Lam (ال) pada kata 'Asy-Syamsu' (الشَّمْسُ) adalah...",
    pilihan: ["Idzhar Qomariyah", "Idgham Syamsiyah", "Iqlab", "Ghunnah"],
    jawaban: 1,
    pembahasan: "Idgham Syamsiyah: huruf lam dimasukkan/dilebur ke dalam huruf berikutnya (Syin).",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 126,
    tingkat: 9,
    pertanyaan: "Zat hijau pada daun yang berperan penting dalam proses fotosintesis disebut...",
    pilihan: ["Klorofil", "Karoten", "Stomata", "Xilem"],
    jawaban: 0,
    pembahasan: "Klorofil adalah zat hijau daun yang menyerap energi sinar matahari.",
    kategori: "Tematik MI"
  },
  {
    id: 127,
    tingkat: 9,
    pertanyaan: "Berapa jumlah rakaat shalat fardhu sehari semalam jika dijumlahkan secara keseluruhan?",
    pilihan: ["15 rakaat", "17 rakaat", "20 rakaat", "23 rakaat"],
    jawaban: 1,
    pembahasan: "Shubuh(2) + Dzuhur(4) + Ashar(4) + Maghrib(3) + Isya(4) = 17 rakaat.",
    kategori: "Fikih"
  },
  // Tingkat 10 (32.000 poin - TITIK AMAN 2!)
  {
    id: 128,
    tingkat: 10,
    pertanyaan: "Siapakah sahabat Rasulullah SAW yang bergelar 'Dzun Nurain' (Pemilik Dua Cahaya)?",
    pilihan: ["Abu Bakar Ash-Shiddiq", "Umar bin Khattab", "Utsman bin Affan", "Ali bin Abi Thalib"],
    jawaban: 2,
    pembahasan: "Utsman bin Affan bergelar Dzun Nurain karena menikahi dua putri Rasulullah SAW (Ruqayyah dan Ummu Kultsum).",
    kategori: "SKI"
  },
  {
    id: 129,
    tingkat: 10,
    pertanyaan: "Asmaul Husna 'Al-Adl' (العَدْلُ) memiliki arti bahwa Allah Maha...",
    pilihan: ["Bijaksana", "Adil", "Agung", "Suci"],
    jawaban: 1,
    pembahasan: "Al-Adl artinya Maha Adil dalam menetapkan hukum dan membalas perbuatan makhluk-Nya.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 130,
    tingkat: 10,
    pertanyaan: "Hukum bacaan Ra (ر) yang dibaca tebal disebut dengan istilah...",
    pilihan: ["Tarqiq", "Tafkhim", "Tas-hil", "Imalah"],
    jawaban: 1,
    pembahasan: "Tafkhim berarti tebal (gembung di mulut), sedangkan tarqiq berarti tipis.",
    kategori: "Al-Qur'an Hadits"
  },
  // Tingkat 11 (64.000 poin - Sukar)
  {
    id: 131,
    tingkat: 11,
    pertanyaan: "Perjanjian damai bersejarah antara kaum muslimin dan kaum Quraisy pada tahun ke-6 Hijriyah adalah...",
    pilihan: ["Piagam Madinah", "Perjanjian Hudaibiyah", "Bai'at Ridhwan", "Fathu Makkah"],
    jawaban: 1,
    pembahasan: "Perjanjian Hudaibiyah disepakati pada tahun 6 H sebagai gencatan senjata 10 tahun.",
    kategori: "SKI"
  },
  {
    id: 132,
    tingkat: 11,
    pertanyaan: "Jika keliling sebuah persegi adalah 36 cm, berapakah panjang sisi persegi tersebut?",
    pilihan: ["6 cm", "8 cm", "9 cm", "12 cm"],
    jawaban: 2,
    pembahasan: "Keliling persegi = 4 x sisi. Sisi = 36 / 4 = 9 cm.",
    kategori: "Tematik MI"
  },
  {
    id: 133,
    tingkat: 11,
    pertanyaan: "Berapa banyak jumlah nabi dan rasul yang namanya secara eksplisit disebutkan dalam Al-Qur'an?",
    pilihan: ["10 nabi", "20 nabi", "25 nabi", "99 nabi"],
    jawaban: 2,
    pembahasan: "Ada 25 nabi dan rasul yang wajib diimani yang namanya tercantum dalam Al-Qur'an.",
    kategori: "Akidah Akhlak"
  },
  // Tingkat 12 (125.000 poin - Sukar)
  {
    id: 134,
    tingkat: 12,
    pertanyaan: "Najis mughalladhah (berat) seperti air liur anjing disucikan dengan cara dibasuh 7 kali, yang salah satunya dicampur...",
    pilihan: ["Sabun wangi", "Tanah / debu suci", "Garam", "Minyak wangi"],
    jawaban: 1,
    pembahasan: "Dibasuh sebanyak 7 kali dengan air mengalir dan salah satunya dicampur debu/tanah yang suci.",
    kategori: "Fikih"
  },
  {
    id: 135,
    tingkat: 12,
    pertanyaan: "Hadits yang diriwayatkan oleh Imam Bukhari dan Imam Muslim bersama-sama disebut dengan istilah...",
    pilihan: ["Hadits Hasan", "Muttafaq 'Alaih", "Hadits Dha'if", "Hadits Qudsi"],
    jawaban: 1,
    pembahasan: "Muttafaq 'Alaih artinya disepakati kesahihannya oleh kedua tokoh besar: Bukhari dan Muslim.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 136,
    tingkat: 12,
    pertanyaan: "Siapakah nama panglima perang muslim termuda berusia 17 tahun yang ditunjuk Rasulullah SAW sebelum beliau wafat?",
    pilihan: ["Usamah bin Zaid", "Thariq bin Ziyad", "Khalid bin Walid", "Sa'ad bin Abi Waqqas"],
    jawaban: 0,
    pembahasan: "Usamah bin Zaid RA dipercaya memimpin pasukan besar melawan tentara Romawi.",
    kategori: "SKI"
  },
  // Tingkat 13 (250.000 poin - Sangat Sukar)
  {
    id: 137,
    tingkat: 13,
    pertanyaan: "Berapa lamakah masa kekhalifahan Abu Bakar Ash-Shiddiq memimpin kaum muslimin?",
    pilihan: ["Sekitar 2 tahun", "Sekitar 5 tahun", "Sekitar 10 tahun", "Sekitar 12 tahun"],
    jawaban: 0,
    pembahasan: "Abu Bakar menjabat khalifah selama kurang lebih 2 tahun (632-634 M / 11-13 H).",
    kategori: "SKI"
  },
  {
    id: 138,
    tingkat: 13,
    pertanyaan: "Bentuk jamak (plural) dari kata 'Qolamun' (قَلَمٌ) dalam bahasa Arab adalah...",
    pilihan: ["Aqlaamun (أَقْلَامٌ)", "Qalamani", "Kutubun", "Qilamun"],
    jawaban: 0,
    pembahasan: "Jamak taksir dari Qolamun adalah Aqlaamun (pulpen-pulpen).",
    kategori: "Bahasa Arab"
  },
  {
    id: 139,
    tingkat: 13,
    pertanyaan: "Dalam rukun haji, ritual bermalam di Muzdalifah dan melempar jumrah dilakukan pada bulan...",
    pilihan: ["Muharram", "Ramadhan", "Dzulhijjah", "Safar"],
    jawaban: 2,
    pembahasan: "Ibadah haji dilaksanakan pada bulan Dzulhijjah, puncaknya wukuf di Arafah tanggal 9 Dzulhijjah.",
    kategori: "Fikih"
  },
  // Tingkat 14 (500.000 poin - Sangat Menantang)
  {
    id: 140,
    tingkat: 14,
    pertanyaan: "Surah dalam Al-Qur'an yang satu-satunya TIDAK diawali dengan kalimat Basmalah adalah surah...",
    pilihan: ["Surah At-Taubah", "Surah Al-Baqarah", "Surah Maryam", "Surah Yasin"],
    jawaban: 0,
    pembahasan: "Surah At-Taubah (Bara'ah) tidak diawali bismillah karena berisi pemutusan hubungan dan peringatan tegas kepada kaum musyrikin.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 141,
    tingkat: 14,
    pertanyaan: "Sahabat Nabi yang dijuluki 'Babul 'Ilmi' (Gerbang Ilmu Pengetahuan) adalah...",
    pilihan: ["Umar bin Khattab", "Ali bin Abi Thalib", "Zaid bin Tsabit", "Mu'adz bin Jabal"],
    jawaban: 1,
    pembahasan: "Rasulullah SAW bersabda: 'Aku adalah kota ilmu dan Ali adalah pintunya'.",
    kategori: "SKI"
  },
  {
    id: 142,
    tingkat: 14,
    pertanyaan: "Sifat 'Al-Mukhalafatu lil Hawaditsi' (Berbeda dengan makhluk ciptaan-Nya) termasuk sifat wajib Allah yang bergolongan...",
    pilihan: ["Nafsiyah", "Salbiyah", "Ma'ani", "Ma'nawiyah"],
    jawaban: 1,
    pembahasan: "Sifat Salbiyah menafikan sifat-sifat kekurangan: Qidam, Baqa, Mukhalafatu lil hawaditsi, Qiyamuhu binafsihi, Wahdaniyah.",
    kategori: "Akidah Akhlak"
  },
  // Tingkat 15 (1.000.000 POIN - GRAND PRIZE JUTAWAN MADRASAH!)
  {
    id: 143,
    tingkat: 15,
    pertanyaan: "Pada tahun berapakah Piagam Madinah (Mitsaq Al-Madinah) sebagai konstitusi pertama di dunia disepakati oleh Rasulullah SAW?",
    pilihan: ["622 Masehi (1 H)", "624 Masehi (2 H)", "628 Masehi (6 H)", "630 Masehi (8 H)"],
    jawaban: 0,
    pembahasan: "Piagam Madinah disusun pada tahun 622 M (1 H) tak lama setelah Rasulullah SAW tiba dan mempersaudarakan kaum muslimin di Madinah.",
    kategori: "SKI"
  },
  {
    id: 144,
    tingkat: 15,
    pertanyaan: "Berapa jumlah ayat suci Al-Qur'an dan jumlah surah yang terdapat di dalam mushaf standar Utsmani?",
    pilihan: ["114 Surah & 6.236 Ayat", "110 Surah & 6.666 Ayat", "120 Surah & 6.000 Ayat", "114 Surah & 6.300 Ayat"],
    jawaban: 0,
    pembahasan: "Al-Qur'an terdiri dari 114 Surah, 30 Juz, dan 6.236 Ayat (hitungan standar Kufah).",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 145,
    tingkat: 15,
    pertanyaan: "Pohon yang disebutkan dalam Al-Qur'an yang tumbuh di dasar neraka Jahim dengan buah menyerupai kepala setan bernama pohon...",
    pilihan: ["Pohon Tin", "Pohon Zaqqum", "Pohon Sidr", "Pohon Khuldi"],
    jawaban: 1,
    pembahasan: "Pohon Zaqqum (QS. As-Saffat: 62-65) adalah makanan penghuni neraka yang sangat pahit dan panas.",
    kategori: "Akidah Akhlak"
  },
  // Soal Cadangan Jutawan Tambahan untuk Variasi Acak
  {
    id: 146,
    tingkat: 6,
    pertanyaan: "Siapakah ibu susuan pertama Nabi Muhammad SAW dari Bani Sa'ad?",
    pilihan: ["Halimatus Sa'diyah", "Tsuwaibah Al-Aslamiyah", "Ummu Aiman", "Fathimah binti Asad"],
    jawaban: 0,
    pembahasan: "Halimatus Sa'diyah mengasuh dan menyusui Nabi Muhammad SAW di perkampungan padang pasir.",
    kategori: "SKI"
  },
  {
    id: 147,
    tingkat: 8,
    pertanyaan: "Berapakah jumlah takbir pada rakaat pertama shalat Idul Fitri setelah takbiratul ihram?",
    pilihan: ["3 kali", "5 kali", "7 kali", "9 kali"],
    jawaban: 2,
    pembahasan: "Sunnah takbir shalat Id pada rakaat pertama adalah 7 kali, dan rakaat kedua 5 kali.",
    kategori: "Fikih"
  },
  {
    id: 148,
    tingkat: 9,
    pertanyaan: "Hewan mamalia terbesar yang hidup di laut dan bernapas dengan paru-paru adalah...",
    pilihan: ["Ikan Hiu Putih", "Paus Biru", "Lumba-lumba Hidung Botol", "Gajah Laut"],
    jawaban: 1,
    pembahasan: "Paus biru adalah hewan mamalia terbesar di bumi.",
    kategori: "Tematik MI"
  },
  {
    id: 149,
    tingkat: 11,
    pertanyaan: "Surah Al-Qadr diturunkan menerangkan tentang kemuliaan malam...",
    pilihan: ["Malam Nisfu Sya'ban", "Malam Lailatul Qadr", "Malam Isra Mi'raj", "Malam Tahun Baru Hijriyah"],
    jawaban: 1,
    pembahasan: "Lailatul Qadr adalah malam yang lebih baik daripada seribu bulan.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 150,
    tingkat: 13,
    pertanyaan: "Siapakah sahabat nabi yang ditugaskan sebagai ketua tim pembukuan dan kodifikasi mushaf Al-Qur'an pada masa Khalifah Utsman?",
    pilihan: ["Zaid bin Tsabit RA", "Abdullah bin Mas'ud RA", "Mu'adz bin Jabal RA", "Ubay bin Ka'ab RA"],
    jawaban: 0,
    pembahasan: "Zaid bin Tsabit RA adalah penghafal Al-Qur'an dan juru tulis wahyu yang memimpin penulisan mushaf.",
    kategori: "SKI"
  }
];

// ============================================================================
// GAME 3: IFP (INTERACTIVE FUN PRACTICE) - 50 SOAL KUIS CEPAT INTERAKTIF
// ============================================================================
export const soalIFP: Question[] = [
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
    pembahasan: "Disebut kalimat istirja', diucapkan ketika tertimpa musibah atau kabar duka.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 202,
    pertanyaan: "Hukum bacaan Al-Qur'an ketika Nun Mati bertemu huruf Hamzah (ء) adalah...",
    pilihan: ["Izhar Halqi", "Idgham Bighunnah", "Ikhfa", "Iqlab"],
    jawaban: 0,
    pembahasan: "Hamzah termasuk 6 huruf halqi (ء، هـ، ع، ح، غ، خ) sehingga dibaca jelas (Izhar Halqi).",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 203,
    pertanyaan: "Berapa jumlah rukun wudhu yang wajib dipenuhi agar wudhu sah?",
    pilihan: ["4 rukun", "6 rukun", "8 rukun", "10 rukun"],
    jawaban: 1,
    pembahasan: "Rukun wudhu ada 6: niat, basuh muka, basuh tangan sampai siku, usap kepala, basuh kaki sampai mata kaki, dan tertib.",
    kategori: "Fikih"
  },
  {
    id: 204,
    pertanyaan: "Gelar khalifah Umar bin Khattab adalah 'Al-Faruq', yang artinya...",
    pilihan: ["Pembeda antara yang haq (benar) dan yang bathil", "Orang yang dermawan", "Pedang Allah", "Pemilik dua cahaya"],
    jawaban: 0,
    pembahasan: "Al-Faruq bermakna pemisah atau pembeda antara kebenaran dan kebatilan.",
    kategori: "SKI"
  },
  {
    id: 205,
    pertanyaan: "Bahasa Arab untuk 'Meja' adalah...",
    pilihan: ["Maktabun (مَكْتَبٌ)", "Kursiyyun", "Fashlun", "Hadiqotun"],
    jawaban: 0,
    pembahasan: "Maktabun artinya meja.",
    kategori: "Bahasa Arab"
  },
  {
    id: 206,
    pertanyaan: "Organ tubuh manusia yang berfungsi memompa darah ke seluruh tubuh adalah...",
    pilihan: ["Paru-paru", "Jantung", "Lambung", "Ginjal"],
    jawaban: 1,
    pembahasan: "Jantung memompa darah yang kaya oksigen ke seluruh bagian tubuh.",
    kategori: "Tematik MI"
  },
  {
    id: 207,
    pertanyaan: "Surah Al-Ma'un mengecam orang yang mendustakan agama, yaitu orang yang...",
    pilihan: ["Berbuat baik", "Menghardik anak yatim & enggan memberi makan orang miskin", "Rajin shalat tepat waktu", "Suka menabung"],
    jawaban: 1,
    pembahasan: "QS. Al-Ma'un: 'Tahukah kamu orang yang mendustakan agama? Yaitu orang yang menghardik anak yatim...'",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 208,
    pertanyaan: "Sikap meyakini bahwa segala sesuatu terjadi atas kehendak dan takdir Allah disebut beriman kepada...",
    pilihan: ["Qada dan Qadar", "Hari Akhir", "Malaikat", "Para Nabi"],
    jawaban: 0,
    pembahasan: "Rukun iman ke-6 adalah beriman kepada Qada dan Qadar Allah SWT.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 209,
    pertanyaan: "Shalat jamak yang menggabungkan dua shalat fardhu dan dikerjakan pada waktu shalat pertama disebut...",
    pilihan: ["Jamak Ta'khir", "Jamak Taqdim", "Shalat Qashar", "Shalat Hajat"],
    jawaban: 1,
    pembahasan: "Jamak Taqdim: mengerjakan dua shalat di waktu shalat yang pertama (misal Dzuhur & Ashar di waktu Dzuhur).",
    kategori: "Fikih"
  },
  {
    id: 210,
    pertanyaan: "Perang besar pertama antara kaum muslimin dan kaum musyrikin Quraisy terjadi di...",
    pilihan: ["Lembah Badar", "Bukit Uhud", "Khandaq", "Tabuk"],
    jawaban: 0,
    pembahasan: "Perang Badar terjadi pada tanggal 17 Ramadhan tahun 2 Hijriyah dengan kemenangan gemilang kaum muslimin.",
    kategori: "SKI"
  },
  {
    id: 211,
    pertanyaan: "Bahasa Arab untuk 'Ruang Kelas' adalah...",
    pilihan: ["Fashlun (فَصْلٌ)", "Idaarotun", "Maktabatun", "Ma'malun"],
    jawaban: 0,
    pembahasan: "Fashlun berarti ruang kelas.",
    kategori: "Bahasa Arab"
  },
  {
    id: 212,
    pertanyaan: "Pecahan senilai dari 1/2 adalah...",
    pilihan: ["2/4", "3/5", "1/3", "4/6"],
    jawaban: 0,
    pembahasan: "1/2 jika pembilang dan penyebut dikali 2 menghasilkan 2/4.",
    kategori: "Tematik MI"
  },
  {
    id: 213,
    pertanyaan: "Hadits Nabi menyebutkan: 'Innamal a'maalu bin...', kelanjutan kalimat hadits tersebut adalah...",
    pilihan: ["Niyyaat (نِّيَّاتِ)", "Katsrah", "Dunya", "Ikhlash"],
    jawaban: 0,
    pembahasan: "'Innamal a'maalu bin-niyyaat' (Sesungguhnya setiap amalan bergantung pada niatnya).",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 214,
    pertanyaan: "Asmaul Husna 'Al-Ghaffar' memiliki arti Allah Maha...",
    pilihan: ["Pengampun", "Pemberi Rezeki", "Mengetahui", "Kaya"],
    jawaban: 0,
    pembahasan: "Al-Ghaffar artinya Maha Pengampun terhadap dosa hamba-hamba-Nya.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 215,
    pertanyaan: "Menyapu muka dan kedua tangan dengan debu suci sebagai pengganti wudhu saat tidak ada air dinamakan...",
    pilihan: ["Tayammum", "Istinja", "Mandi Wajib", "Tathhir"],
    jawaban: 0,
    pembahasan: "Tayammum adalah rukhsah (keringanan) bersuci menggunakan debu yang suci.",
    kategori: "Fikih"
  },
  {
    id: 216,
    pertanyaan: "Siapakah paman Nabi yang sangat memusuhi dakwah Islam dan namanya tercela dalam Surah Al-Lahab?",
    pilihan: ["Abu Lahab", "Abu Thalib", "Hamzah", "Al-Abbas"],
    jawaban: 0,
    pembahasan: "Abu Lahab (Abdul Uzza) dan istrinya menentang keras dakwah Nabi SAW.",
    kategori: "SKI"
  },
  {
    id: 217,
    pertanyaan: "Bahasa Arab untuk 'Baju / Pakaian' adalah...",
    pilihan: ["Tsaubun (ثَوْبٌ)", "Qolansuwah", "Hizaa'un", "Jaurabun"],
    jawaban: 0,
    pembahasan: "Tsaubun berarti pakaian atau baju.",
    kategori: "Bahasa Arab"
  },
  {
    id: 218,
    pertanyaan: "Perubahan wujud benda dari cair menjadi gas akibat pemanasan disebut...",
    pilihan: ["Menguap", "Membeku", "Mencair", "Mengembun"],
    jawaban: 0,
    pembahasan: "Menguap adalah proses perubahan wujud zat dari cair menjadi gas.",
    kategori: "Tematik MI"
  },
  {
    id: 219,
    pertanyaan: "Malaikat yang bertugas menanyai manusia di alam kubur adalah...",
    pilihan: ["Munkar dan Nakir", "Raqib dan Atid", "Malik dan Ridwan", "Jibril dan Mikail"],
    jawaban: 0,
    pembahasan: "Malaikat Munkar dan Nakir bertugas menanyakan siapa Rabbmu, agamamu, dan nabimu di kubur.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 220,
    pertanyaan: "Surah Al-Kafirun menegaskan tentang sikap toleransi dan kemurnian aqidah dengan ayat penutup...",
    pilihan: ["Lakum diinukum wa liya diin", "Inna a'thoinaakal kautsar", "Walam yakun lahu kufuwan ahad", "Min syarri maa kholaq"],
    jawaban: 0,
    pembahasan: "'Lakum diinukum wa liya diin' (Untukmu agamamu, dan untukkulah agamaku).",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 221,
    pertanyaan: "Shalat sunnah yang dikerjakan saat terjadi gerhana matahari disebut shalat...",
    pilihan: ["Kusuf", "Khusuf", "Istisqa", "Tarawih"],
    jawaban: 0,
    pembahasan: "Kusuf untuk gerhana matahari, sedangkan Khusuf untuk gerhana bulan.",
    kategori: "Fikih"
  },
  {
    id: 222,
    pertanyaan: "Peristiwa penaklukan kota Mekkah secara damai tanpa pertumpahan darah oleh kaum muslimin dikenal dengan istilah...",
    pilihan: ["Fathu Makkah", "Hijratun Nabi", "Perang Khandaq", "Perjanjian Hudaibiyah"],
    jawaban: 0,
    pembahasan: "Fathu Makkah terjadi pada tahun 8 Hijriyah di mana berhala-berhala di sekitar Ka'bah dibersihkan.",
    kategori: "SKI"
  },
  {
    id: 223,
    pertanyaan: "Bahasa Arab untuk kata 'Jam' (waktu) adalah...",
    pilihan: ["Saa'atun (سَاعَةٌ)", "Yaumun", "Syahrun", "Sanatun"],
    jawaban: 0,
    pembahasan: "Saa'atun berarti jam atau waktu.",
    kategori: "Bahasa Arab"
  },
  {
    id: 224,
    pertanyaan: "Hewan yang mengalami metamorfosis sempurna dalam daur hidupnya adalah...",
    pilihan: ["Kupu-kupu", "Ayam", "Kucing", "Kambing"],
    jawaban: 0,
    pembahasan: "Kupu-kupu bermetamorfosis: telur -> ulat (larva) -> kepompong (pupa) -> kupu-kupu dewasa.",
    kategori: "Tematik MI"
  },
  {
    id: 225,
    pertanyaan: "Tanda waqaf 'Lazim' yang dilambangkan dengan huruf Mim (مـ) artinya...",
    pilihan: ["Harus berhenti", "Boleh berhenti boleh lanjut", "Dilarang berhenti", "Lebih utama terus"],
    jawaban: 0,
    pembahasan: "Waqaf Lazim bertanda mim kecil mengharuskan pembaca berhenti pada kata tersebut.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 226,
    pertanyaan: "Sifat 'Fathanah' yang dimiliki para nabi dan rasul berarti...",
    pilihan: ["Cerdas dan bijaksana", "Dapat dipercaya", "Selalu benar", "Pemberani"],
    jawaban: 0,
    pembahasan: "Fathanah artinya cerdas, sehingga para rasul mampu berdialog dan membimbing umatnya.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 227,
    pertanyaan: "Batas aurat laki-laki muslim saat shalat adalah antara...",
    pilihan: ["Pusar sampai lutut", "Dada sampai kaki", "Leher sampai mata kaki", "Hanya bagian paha"],
    jawaban: 0,
    pembahasan: "Aurat laki-laki dari pusar hingga lutut.",
    kategori: "Fikih"
  },
  {
    id: 228,
    pertanyaan: "Makam Rasulullah SAW dan kedua sahabatnya (Abu Bakar dan Umar) saat ini berada di dalam kawasan...",
    pilihan: ["Masjid Nabawi di Madinah", "Masjidil Haram di Mekkah", "Masjidil Aqsa di Palestina", "Masjid Quba"],
    jawaban: 0,
    pembahasan: "Makam Rasulullah SAW berada di bawah Kubah Hijau Masjid Nabawi, Madinah.",
    kategori: "SKI"
  },
  {
    id: 229,
    pertanyaan: "Bahasa Arab untuk 'Sepatu' adalah...",
    pilihan: ["Hizaa'un (حِذَاءٌ)", "Jaurabun", "Qomiisun", "Sirwaalun"],
    jawaban: 0,
    pembahasan: "Hizaa'un artinya sepatu, sedangkan jaurabun artinya kaos kaki.",
    kategori: "Bahasa Arab"
  },
  {
    id: 230,
    pertanyaan: "Sebuah segitiga memiliki alas 10 cm dan tinggi 6 cm. Luas segitiga tersebut adalah...",
    pilihan: ["30 cm²", "60 cm²", "16 cm²", "40 cm²"],
    jawaban: 0,
    pembahasan: "Luas segitiga = 1/2 x alas x tinggi = 1/2 x 10 x 6 = 30 cm².",
    kategori: "Tematik MI"
  },
  {
    id: 231,
    pertanyaan: "Surah Al-Alaq ayat 1 diawali dengan perintah suci, yaitu...",
    pilihan: ["Iqra' (Bacalah)", "Qul (Katakanlah)", "Subhana (Maha Suci)", "Alhamdu (Segala Puji)"],
    jawaban: 0,
    pembahasan: "'Iqra' bismi rabbikalladzii kholaq' (Bacalah dengan nama Tuhanmu yang menciptakan).",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 232,
    pertanyaan: "Mengucapkan kalimat 'Astagfirullahal 'adzim' disebut bacaan...",
    pilihan: ["Istighfar", "Tasbih", "Tahmid", "Hauqalah"],
    jawaban: 0,
    pembahasan: "Istighfar dibaca untuk memohon ampunan kepada Allah SWT.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 233,
    pertanyaan: "Membasuh telinga saat berwudhu hukumnya adalah...",
    pilihan: ["Sunnah", "Wajib / Rukun", "Makruh", "Haram"],
    jawaban: 0,
    pembahasan: "Membasuh telinga termasuk amalan sunnah dalam berwudhu.",
    kategori: "Fikih"
  },
  {
    id: 234,
    pertanyaan: "Siasat penggalian parit pada Perang Khandaq diusulkan oleh seorang sahabat mulia bernama...",
    pilihan: ["Salman Al-Farisi RA", "Bilal bin Rabah RA", "Khalid bin Walid RA", "Sa'ad bin Mu'adz RA"],
    jawaban: 0,
    pembahasan: "Salman Al-Farisi mengusulkan taktik perang parit yang lazim digunakan di Persia.",
    kategori: "SKI"
  },
  {
    id: 235,
    pertanyaan: "Bahasa Arab dari 'Bapak / Ayah' adalah...",
    pilihan: ["Abun (أَبٌ)", "Ummun", "Akhun", "Ukhtun"],
    jawaban: 0,
    pembahasan: "Abun artinya ayah atau bapak, sedangkan Ummun artinya ibu.",
    kategori: "Bahasa Arab"
  },
  {
    id: 236,
    pertanyaan: "Gaya yang menyebabkan benda jatuh ke bawah menuju pusat bumi disebut gaya...",
    pilihan: ["Gravitasi", "Gesek", "Pegas", "Magnet"],
    jawaban: 0,
    pembahasan: "Gaya gravitasi bumi menarik semua benda bermassa menuju pusat bumi.",
    kategori: "Tematik MI"
  },
  {
    id: 237,
    pertanyaan: "Hukum membaca nun sukun atau tanwin ketika bertemu huruf Ya, Nun, Mim, Wawu (ي ن م و) adalah...",
    pilihan: ["Idgham Bighunnah", "Idgham Bilaghunnah", "Izhar", "Ikhfa"],
    jawaban: 0,
    pembahasan: "Idgham Bighunnah adalah memasukkan suara dengan mendengung.",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 238,
    pertanyaan: "Sifat sombong atau merasa dirinya lebih mulia dari orang lain disebut...",
    pilihan: ["Takabbur", "Tawadhu'", "Qana'ah", "Ikhlas"],
    jawaban: 0,
    pembahasan: "Takabbur atau kibr adalah penyakit hati yang sangat dibenci Allah.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 239,
    pertanyaan: "Orang yang berhak menerima zakat (asnaf) dalam Al-Qur'an berjumlah...",
    pilihan: ["8 golongan", "5 golongan", "10 golongan", "12 golongan"],
    jawaban: 0,
    pembahasan: "Dalam QS. At-Taubah: 60, ada 8 golongan asnaf penerima zakat.",
    kategori: "Fikih"
  },
  {
    id: 240,
    pertanyaan: "Muadzin pertama dalam sejarah Islam yang memiliki suara merdu dan lantang adalah...",
    pilihan: ["Bilal bin Rabah RA", "Abdullah bin Ummi Maktum RA", "Abu Dzar Al-Ghifari RA", "Zaid bin Haritsah RA"],
    jawaban: 0,
    pembahasan: "Bilal bin Rabah RA dipilih langsung oleh Rasulullah SAW sebagai muadzin pertama.",
    kategori: "SKI"
  },
  {
    id: 241,
    pertanyaan: "Arti dari kosakata 'Baitun' (بَيْتٌ) adalah...",
    pilihan: ["Rumah", "Masjid", "Toko", "Pasar"],
    jawaban: 0,
    pembahasan: "Baitun artinya rumah.",
    kategori: "Bahasa Arab"
  },
  {
    id: 242,
    pertanyaan: "Simbol sila pertama Pancasila Republik Indonesia yang mencerminkan Ketuhanan Yang Maha Esa adalah...",
    pilihan: ["Bintang", "Rantai emas", "Pohon beringin", "Kepala banteng"],
    jawaban: 0,
    pembahasan: "Bintang emas berlatar hitam adalah lambang sila pertama.",
    kategori: "Tematik MI"
  },
  {
    id: 243,
    pertanyaan: "Al-Qur'an diturunkan secara berangsur-angsur kepada Nabi Muhammad SAW selama kurang lebih...",
    pilihan: ["23 tahun", "10 tahun", "15 tahun", "30 tahun"],
    jawaban: 0,
    pembahasan: "Diturunkan selama kurun waktu 22 tahun 2 bulan 22 hari (sekitar 23 tahun).",
    kategori: "Al-Qur'an Hadits"
  },
  {
    id: 244,
    pertanyaan: "Sikap rela menerima apa adanya segala pemberian dan ketentuan dari Allah disebut...",
    pilihan: ["Qana'ah", "Riya", "Kufur", "Tamak"],
    jawaban: 0,
    pembahasan: "Qana'ah adalah merasa cukup dan bersyukur atas rezeki yang diberikan Allah.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 245,
    pertanyaan: "Shalat sunnah yang dikerjakan saat memasuki masjid sebelum duduk dinamakan shalat...",
    pilihan: ["Tahiyyatul Masjid", "Rawatib", "Istisqa", "Hajat"],
    jawaban: 0,
    pembahasan: "Tahiyyatul masjid adalah shalat sunnah 2 rakaat sebagai penghormatan terhadap masjid.",
    kategori: "Fikih"
  },
  {
    id: 246,
    pertanyaan: "Tahun kelahiran Nabi Muhammad SAW disebut 'Tahun Gajah' karena bertepatan dengan penyerangan pasukan berkendara gajah yang dipimpin oleh raja...",
    pilihan: ["Abrahah", "Firaun", "Namrud", "Kisra"],
    jawaban: 0,
    pembahasan: "Raja Abrahah dari Yaman berniat menghancurkan Ka'bah dengan pasukan gajah.",
    kategori: "SKI"
  },
  {
    id: 247,
    pertanyaan: "Bahasa Arab untuk 'Mobil' adalah...",
    pilihan: ["Sayyaarotun (سَيَّارَةٌ)", "Darroojatun", "Thoo'irotun", "Safinatun"],
    jawaban: 0,
    pembahasan: "Sayyaarotun artinya mobil.",
    kategori: "Bahasa Arab"
  },
  {
    id: 248,
    pertanyaan: "Gas yang dihirup manusia saat bernapas dan dibutuhkan oleh tubuh adalah...",
    pilihan: ["Oksigen (O2)", "Karbondioksida (CO2)", "Nitrogen", "Helium"],
    jawaban: 0,
    pembahasan: "Manusia menghirup oksigen untuk proses metabolisme dan menghembuskan karbondioksida.",
    kategori: "Tematik MI"
  },
  {
    id: 249,
    pertanyaan: "Malaikat yang bertugas membagikan rezeki dan menurunkan air hujan adalah...",
    pilihan: ["Malaikat Mikail", "Malaikat Jibril", "Malaikat Israfil", "Malaikat Izrail"],
    jawaban: 0,
    pembahasan: "Malaikat Mikail bertugas mengatur pembagian rezeki dan menurunkan hujan atas izin Allah.",
    kategori: "Akidah Akhlak"
  },
  {
    id: 250,
    pertanyaan: "Ucapan 'Laa hawla wa laa quwwata illa billahil 'aliyyil 'adzim' disebut bacaan...",
    pilihan: ["Hauqalah", "Hamdalah", "Tasbih", "Tahlil"],
    jawaban: 0,
    pembahasan: "Kalimat Hauqalah adalah pengakuan kelemahan diri di hadapan kemahakuasaan Allah.",
    kategori: "Akidah Akhlak"
  }
];

// Helper to shuffle questions
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
