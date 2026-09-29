import { MateriItem } from '../types';

export const kumpulanMateri: MateriItem[] = [
  // ==========================================================================
  // FASE A (KELAS 1 - 2)
  // ==========================================================================
  {
    id: 'tahfidz-1',
    judul: 'Tahfidz: Surah An-Nas, Al-Falaq, dan Al-Ikhlas (Al-Mu\'awwidzatain)',
    mapel: 'Tahfidz Qur\'an',
    kelas: 1,
    fase: 'Fase A',
    ringkasan: 'Menghafal 3 surah perlindungan pendek dengan makhraj huruf yang benar dan memahami keutamaannya sebelum tidur.',
    kontenLengkap: [
      'Surah Al-Ikhlas, Al-Falaq, dan An-Nas adalah surah-surah perlindungan utama dalam Al-Qur\'an.',
      'Surah Al-Ikhlas (4 ayat) menegaskan bahwa Allah itu Maha Esa dan tempat bergantung segala makhluk.',
      'Surah Al-Falaq (5 ayat) mengajarkan kita memohon perlindungan kepada Allah dari kejahatan malam, sihir, dan orang yang dengki.',
      'Surah An-Nas (6 ayat) mengajarkan kita berlindung kepada Raja manusia dari bisikan jahat setan yang tersembunyi.',
      'Sunnah Rasulullah SAW: Membaca ketiga surah ini sebanyak 3 kali setiap pagi, petang, dan sebelum tidur sambil meniupkan ke kedua telapak tangan lalu diusap ke seluruh badan.'
    ],
    poinPenting: [
      'Ketiga surah ini disebut Al-Mu\'awwidzat (surah-surah perlindungan)',
      'Membaca Surah Al-Ikhlas sebanding dengan sepertiga Al-Qur\'an',
      'Hafalkan dengan memperhatikan panjang pendek (mad thobi\'i)'
    ],
    doaAtauDalil: {
      arab: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ',
      latin: 'Qul huwallahu ahad, Allahush-shamad',
      arti: 'Katakanlah: Dialah Allah, Yang Maha Esa. Allah adalah Tuhan yang bergantung kepada-Nya segala sesuatu. (QS. Al-Ikhlas: 1-2)'
    },
    iconName: 'BookMarked',
    warna: 'emerald'
  },
  {
    id: 'pancasila-1',
    judul: 'Simbol & Nilai-nilai Luhur Garuda Pancasila',
    mapel: 'Pendidikan Pancasila',
    kelas: 1,
    fase: 'Fase A',
    ringkasan: 'Mengenal 5 simbol sila Pancasila pada perisai burung Garuda serta penerapannya di madrasah dan rumah.',
    kontenLengkap: [
      'Garuda Pancasila adalah lambang negara Republik Indonesia. Di dadanya terdapat perisai berisi 5 simbol sila:',
      '1. Bintang Emas (Sila ke-1: Ketuhanan Yang Maha Esa) - Mengajarkan kita rajin shalat, berdoa, dan menghormati ibadah sesama.',
      '2. Rantai Emas (Sila ke-2: Kemanusiaan yang Adil dan Beradab) - Mengajarkan kita saling tolong menolong dan menyayangi teman.',
      '3. Pohon Beringin (Sila ke-3: Persatuan Indonesia) - Menjaga kerukunan tanpa membeda-bedakan suku dan daerah.',
      '4. Kepala Banteng (Sila ke-4: Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan) - Gemar bermusyawarah dan tidak memaksakan kehendak.',
      '5. Padi dan Kapas (Sila ke-5: Keadilan Sosial bagi Seluruh Rakyat Indonesia) - Berbagi secara adil, hemat, dan tidak sombong.'
    ],
    poinPenting: [
      'Pancasila adalah dasar dan pedoman hidup bangsa Indonesia',
      'Bhinneka Tunggal Ika berarti berbeda-beda tetapi tetap satu jua'
    ],
    doaAtauDalil: {
      latin: 'Pancasila: 1. Ketuhanan Yang Maha Esa, 2. Kemanusiaan yang Adil dan Beradab...',
      arti: 'Lima dasar moral dan persatuan bangsa Indonesia.'
    },
    iconName: 'Shield',
    warna: 'amber'
  },
  {
    id: 'bindonesia-1',
    judul: 'Membaca Suku Kata, Huruf Vokal & Kalimat Sederhana',
    mapel: 'Bahasa Indonesia',
    kelas: 1,
    fase: 'Fase A',
    ringkasan: 'Mengenal 5 huruf vokal (a, i, u, e, o), menggabungkan konsonan menjadi suku kata, dan merangkai kalimat santun.',
    kontenLengkap: [
      'Huruf dalam abjad Indonesia berjumlah 26 huruf, terdiri dari huruf vokal (a, i, u, e, o) dan huruf konsonan (b, c, d, ... z).',
      'Membaca dengan metode suku kata mempermudah belajar membaca lancar:',
      '• b-a = ba, b-u = bu -> ba-bu / bu-ku',
      '• s-a = sa, n-t-r-i = ntri -> san-tri',
      'Ungkapan Santun Sehari-hari yang wajib dibiasakan santri:',
      '1. Tolong: ketika membutuhkan bantuan orang lain',
      '2. Maaf: ketika melakukan kesalahan atau tidak sengaja menyenggol',
      '3. Terima Kasih: ketika menerima kebaikan atau bantuan',
      '4. Permisi: saat lewat di depan guru atau orang yang lebih tua.'
    ],
    poinPenting: [
      'Empat kata ajaib santun: Tolong, Maaf, Terima Kasih, dan Permisi',
      'Awal kalimat selalu diawali dengan huruf kapital dan diakhiri tanda titik (.)'
    ],
    iconName: 'SpellCheck',
    warna: 'blue'
  },
  {
    id: 'matematika-1',
    judul: 'Bilangan Cacah 1 sampai 20 & Penjumlahan Sederhana',
    mapel: 'Matematika',
    kelas: 1,
    fase: 'Fase A',
    ringkasan: 'Membilang benda secara konkret, membandingkan banyak benda, serta operasi penjumlahan dan pengurangan dasar.',
    kontenLengkap: [
      'Bilangan cacah dimulai dari 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 hingga seterusnya.',
      'Membandingkan banyak kumpulan benda:',
      '• "Lebih banyak dari": 7 apel lebih banyak dari 4 apel (7 > 4)',
      '• "Lebih sedikit dari": 3 pensil lebih sedikit dari 5 pensil (3 < 5)',
      '• "Sama banyak dengan": 6 buku sama banyak dengan 6 buku (6 = 6).',
      'Konsep Penjumlahan (+): Menggabungkan dua kelompok benda. Contoh: 5 kurma + 3 kurma = 8 kurma.',
      'Konsep Pengurangan (-): Mengambil sebagian benda dari kumpulan. Contoh: 9 sajadah diambil 4 sajadah = sisa 5 sajadah.'
    ],
    poinPenting: [
      'Penjumlahan menambah jumlah benda, sedangkan pengurangan mengurangi benda',
      'Angka nol (0) berarti tidak ada benda'
    ],
    iconName: 'Calculator',
    warna: 'teal'
  },
  {
    id: 'sbdp-1',
    judul: 'Mengenal Pola Irama Sederhana & Karya Seni Dua Dimensi',
    mapel: 'SBDP',
    kelas: 2,
    fase: 'Fase A',
    ringkasan: 'Eksplorasi ketukan nada lagu anak islami, menggambar bentuk alam, dan teknik kolase kertas warna.',
    kontenLengkap: [
      'Seni Budaya dan Prakarya (SBDP) melatih kepekaan rasa, kreativitas, dan keterampilan tangan santri.',
      'Unsur-unsur Seni Rupa Dua Dimensi:',
      '1. Titik dan Garis: Garis lurus, lengkung, zig-zag, dan bergelombang.',
      '2. Bidang dan Bentuk: Lingkaran, persegi, segitiga, dan bintang.',
      '3. Warna Pokok (Primer): Merah, Kuning, dan Biru. Pencampuran warna menghasilkan warna sekunder (misal merah + kuning = jingga).',
      'Teknik Kolase: Menempelkan potongan bahan (kertas origami, daun kering, biji-bijian) pada pola gambar kaligrafi atau masjid untuk menghasilkan karya seni bertekstur indah.'
    ],
    poinPenting: [
      'Kolase adalah karya seni tempel dengan potongan bahan aneka warna',
      'Birama 2/4, 3/4, dan 4/4 menentukan ketukan cepat lambat lagu'
    ],
    iconName: 'Palette',
    warna: 'rose'
  },
  {
    id: 'pjok-1',
    judul: 'Gerak Dasar Lokomotor, Non-Lokomotor & Kebersihan Diri',
    mapel: 'PJOK',
    kelas: 2,
    fase: 'Fase A',
    ringkasan: 'Mempraktikkan gerak berpindah tempat (jalan, lari, lompat), gerak di tempat, serta menjaga kesehatan badan.',
    kontenLengkap: [
      'Kesehatan jasmani adalah nikmat Allah yang wajib dijaga agar santri bertenaga dalam beribadah dan menuntut ilmu.',
      'Tiga Jenis Gerak Dasar dalam PJOK:',
      '1. Gerak Lokomotor: Gerakan berpindah tempat dari satu titik ke titik lain. Contoh: berjalan, berlari mengejar bola, melompat rintangan, dan berderap.',
      '2. Gerak Non-Lokomotor: Gerakan yang dilakukan di tempat tanpa berpindah posisi. Contoh: menekuk lutut, memutar lengan, mengayun badan, dan membungkuk.',
      '3. Gerak Manipulatif: Gerakan yang melibatkan benda atau alat. Contoh: melempar bola, menangkap bola, dan menendang bola.',
      'Kebersihan Diri Santri: Menggosok gigi 2 kali sehari, memotong kuku setiap hari Jumat, mencuci tangan dengan sabun, dan memakai pakaian bersih.'
    ],
    poinPenting: [
      'Gerak lokomotor = berpindah tempat; Non-lokomotor = tetap di tempat',
      'Rasulullah menyukai muslim yang kuat jasmani dan rohaninya'
    ],
    doaAtauDalil: {
      arab: 'اَلْمُؤْمِنُ الْقَوِيُّ خَيْرٌ وَأَحَبُّ إِلَى اللهِ مِنَ الْمُؤْمِنِ الضَّعِيْفِ',
      latin: 'Al-mu\'minul qawiyyu khairun wa ahabbu ilallahi minal mu\'minidh-dha\'iif',
      arti: 'Mukmin yang kuat lebih baik dan lebih dicintai Allah daripada mukmin yang lemah. (HR. Muslim)'
    },
    iconName: 'Activity',
    warna: 'indigo'
  },

  // ==========================================================================
  // FASE B (KELAS 3 - 4)
  // ==========================================================================
  {
    id: 'ipas-3',
    judul: 'Daur Hidup Hewan & Bagian Tumbuh-Tumbuhan (IPAS)',
    mapel: 'IPAS',
    kelas: 3,
    fase: 'Fase B',
    ringkasan: 'Mempelajari metamorfosis hewan (sempurna & tidak sempurna) serta fungsi akar, batang, daun, bunga, dan buah pada tanaman.',
    kontenLengkap: [
      'Ilmu Pengetahuan Alam dan Sosial (IPAS) mengajarkan kita mengamati alam semesta ciptaan Allah SWT secara ilmiah.',
      'A. Bagian Tumbuhan dan Fungsinya:',
      '1. Akar: Menyerap air dan mineral dari tanah serta menopang tegaknya pohon.',
      '2. Batang: Menyalurkan air dan makanan ke seluruh bagian tumbuhan.',
      '3. Daun: Tempat terjadinya fotosintesis (membuat makanan) dengan bantuan zat hijau daun (klorofil) dan sinar matahari.',
      '4. Bunga: Alat perkembangbiakan generatif melalui penyerbukan.',
      '5. Buah dan Biji: Melindungi biji dan calon tumbuhan baru.',
      'B. Daur Hidup & Metamorfosis:',
      '• Metamorfosis Sempurna (4 tahapan beda bentuk): Telur -> Larva (Ulat) -> Pupa (Kepompong) -> Imago (Kupu-kupu dewasa). Contoh: kupu-kupu, katak, nyamuk.',
      '• Metamorfosis Tidak Sempurna (tanpa kepompong): Telur -> Nimfa (hewan muda) -> Dewasa. Contoh: belalang, kecoak, capung.'
    ],
    poinPenting: [
      'Klorofil menyerap sinar matahari untuk mengubah air dan CO2 menjadi glukosa dan oksigen',
      'Metamorfosis sempurna melalui tahapan kepompong (pupa)'
    ],
    doaAtauDalil: {
      arab: 'وَهُوَ الَّذِي أَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ',
      latin: 'Wa huwalladzii anzala minas-samaa\'i maa\'an fa-akhrajnaa bihii nabaata kulli syai\'',
      arti: 'Dan Dialah yang menurunkan air dari langit, lalu Kami tumbuhkan dengannya segala macam tanaman... (QS. Al-An\'am: 99)'
    },
    iconName: 'Sprout',
    warna: 'emerald'
  },
  {
    id: 'matematika-3',
    judul: 'Perkalian, Pembagian & Pecahan Sederhana',
    mapel: 'Matematika',
    kelas: 3,
    fase: 'Fase B',
    ringkasan: 'Menguasai perkalian sebagai penjumlahan berulang, pembagian sebagai pengurangan berulang, serta konsep pecahan 1/2, 1/4, 3/4.',
    kontenLengkap: [
      'Perkalian adalah penjumlahan berulang dari bilangan yang sama:',
      '• 4 x 6 = 6 + 6 + 6 + 6 = 24.',
      'Pembagian adalah pengurangan berulang sampai habis bernilai nol:',
      '• 20 : 5 = 20 - 5 - 5 - 5 - 5 = 0 (pengurangan terjadi 4 kali, maka 20 : 5 = 4).',
      'Konsep Pecahan Sederhana:',
      'Pecahan dinyatakan dalam bentuk a/b, di mana "a" disebut pembilang (bagian yang diambil) dan "b" disebut penyebut (total bagian keseluruhan).',
      '• Jika sebuah kue martabak dipotong menjadi 4 bagian sama besar, dan kamu memakan 1 potong, maka bagian yang kamu makan bernilai 1/4 (seperempat).',
      '• Pecahan senilai: 1/2 bernilai sama besar dengan 2/4, 3/6, dan 4/8.'
    ],
    poinPenting: [
      'Pembilang berada di atas garis pecahan, penyebut berada di bawah',
      'Perkalian dengan angka 0 selalu menghasilkan 0; perkalian dengan angka 1 menghasilkan bilangan itu sendiri'
    ],
    iconName: 'PieChart',
    warna: 'teal'
  },
  {
    id: 'pancasila-4',
    judul: 'Hak, Kewajiban, dan Keberagaman Budaya Nusantara',
    mapel: 'Pendidikan Pancasila',
    kelas: 4,
    fase: 'Fase B',
    ringkasan: 'Memahami keseimbangan hak dan kewajiban santri di rumah dan madrasah serta menghargai adat suku bangsa Indonesia.',
    kontenLengkap: [
      'Hak adalah sesuatu yang mutlak menjadi milik kita dan penggunaannya tergantung kepada kita setelah kewajiban dipenuhi.',
      'Kewajiban adalah sesuatu yang harus dikerjakan dengan penuh rasa tanggung jawab.',
      'Contoh Hak dan Kewajiban Santri di Madrasah:',
      '• Kewajiban: Menghormati bapak/ibu guru, menjaga kebersihan kelas, datang tepat waktu, dan mengerjakan tugas.',
      '• Hak: Memperoleh bimbingan ilmu pengetahuan, menggunakan perpustakaan dan sarana madrasah, serta merasa aman saat belajar.',
      'Keberagaman Suku dan Budaya:',
      'Indonesia memiliki lebih dari 300 kelompok etnis dengan rumah adat (Rumah Gadang, Tongkonan, Joglo), pakaian tradisional, dan tarian daerah yang mempesona. Keragaman ini dipersatukan oleh semboyan Bhinneka Tunggal Ika.'
    ],
    poinPenting: [
      'Kewajiban harus didahulukan sebelum menuntut hak',
      'Saling menghormati perbedaan suku bangsa menciptakan persatuan dan kedamaian'
    ],
    iconName: 'HeartHandshake',
    warna: 'amber'
  },
  {
    id: 'ipas-4',
    judul: 'Energi, Perubahannya & Wujud Zat Benda',
    mapel: 'IPAS',
    kelas: 4,
    fase: 'Fase B',
    ringkasan: 'Mempelajari bentuk energi (panas, gerak, listrik, bunyi) dan perubahan wujud zat (mencair, membeku, menguap, mengembun).',
    kontenLengkap: [
      'Energi adalah kemampuan untuk melakukan usaha atau kerja. Energi tidak dapat diciptakan atau dimusnahkan, namun dapat berubah bentuk.',
      'Contoh Transformasi / Perubahan Energi:',
      '1. Energi Listrik menjadi Energi Panas: Setrika baju, penanak nasi (magic com).',
      '2. Energi Listrik menjadi Energi Gerak: Kipas angin, blender, mobil listrik.',
      '3. Energi Kimia menjadi Energi Gerak: Makanan yang kita makan diubah tubuh menjadi energi untuk berlari dan shalat.',
      'Perubahan Wujud Benda:',
      '• Mencair: Padat menjadi cair (es batu terkena panas).',
      '• Membeku: Cair menjadi padat (air dimasukkan ke freezer).',
      '• Menguap: Cair menjadi gas (air mendidih di atas kompor).',
      '• Mengembun: Gas menjadi cair (titik air di luar gelas berisi es).',
      '• Menyublim: Padat menjadi gas (kapur barus di lemari mengecil).'
    ],
    poinPenting: [
      'Hukum Kekekalan Energi: Energi tidak dapat dimusnahkan tetapi dapat diubah bentuknya',
      'Matahari adalah sumber energi utama terbesar di bumi'
    ],
    iconName: 'Zap',
    warna: 'rose'
  },
  {
    id: 'tahfidz-4',
    judul: 'Tahfidz: Surah Ad-Dhuha sampai Al-Balad (Juz 30)',
    mapel: 'Tahfidz Qur\'an',
    kelas: 4,
    fase: 'Fase B',
    ringkasan: 'Menghafal surah Ad-Dhuha, Al-Insyirah, At-Tin, Al-Alaq, Al-Qadr, dan Al-Bayyinah dengan tartil dan tajwid mutqin.',
    kontenLengkap: [
      'Hafalan Juz 30 pada tingkat kelas 4 menguatkan hafalan surah-surah pertengahan Juz \'Amma.',
      'Kandungan Inti Surah Ad-Dhuha (11 ayat):',
      'Allah bersumpah demi waktu dhuha bahwa Dia tidak pernah meninggalkan Nabi Muhammad SAW dan orang-orang beriman. Kita dilarang berbuat sewenang-wenang kepada anak yatim dan tidak boleh menghardik orang yang meminta-minta.',
      'Kandungan Inti Surah Al-Insyirah (8 ayat):',
      'Janji Allah bahwa di balik setiap kesulitan pasti ada kemudahan ("Fa inna ma\'al \'usri yusraa, inna ma\'al \'usri yusraa"). Jika telah selesai suatu urusan, bersegeralah bersungguh-sungguh mengerjakan kebaikan lainnya.',
      'Tips Menghafal Mutqin: Bacalah 1 ayat sebanyak 10 kali sampai lancar, ulangi ayat sebelumnya sebelum melanjutkan ayat baru, dan setorkan hafalan kepada ustadz pembimbing.'
    ],
    poinPenting: [
      'Kunci hafalan mutqin adalah mengulang secara rutin (muroja\'ah)',
      'Perhatikan hukum ikhfa, idgham bighunnah, dan mad aridh lissukun'
    ],
    doaAtauDalil: {
      arab: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا',
      latin: 'Fa inna ma\'al \'usri yusraa, inna ma\'al \'usri yusraa',
      arti: 'Maka sesungguhnya beserta kesulitan ada kemudahan, sesungguhnya beserta kesulitan itu ada kemudahan. (QS. Al-Insyirah: 5-6)'
    },
    iconName: 'Sparkles',
    warna: 'purple'
  },

  // ==========================================================================
  // FASE C (KELAS 5 - 6)
  // ==========================================================================
  {
    id: 'ipas-5',
    judul: 'Organ Pernapasan, Pencernaan & Peredaran Darah Manusia',
    mapel: 'IPAS',
    kelas: 5,
    fase: 'Fase C',
    ringkasan: 'Mengenal sistem kerja organ pernapasan (hidung-paru-paru), lambung-usus, dan jantung pemompa darah.',
    kontenLengkap: [
      'Tubuh manusia adalah mahakarya ciptaan Allah yang tersusun atas berbagai sistem organ yang saling bekerja sama harmonis:',
      '1. Sistem Pernapasan Manusia: Udara masuk melalui Hidung (disaring rambut dan lendir) -> Faring/Laring -> Trakea (tenggorokan) -> Bronkus -> Bronkiolus -> Alveolus (tempat pertukaran gas Oksigen dan Karbondioksida di paru-paru).',
      '2. Sistem Pencernaan Makanan: Mulut (pencernaan mekanik gigi & kimiawi enzim ptialin) -> Kerongkongan (gerak peristaltik) -> Lambung (asam lambung HCl & pepsin) -> Usus Halus (penyerapan sari-sari makanan) -> Usus Besar (penyerapan air) -> Anus.',
      '3. Sistem Peredaran Darah: Jantung bertugas memompa darah ke seluruh tubuh. Jantung memiliki 4 ruang: Serambi Kanan, Serambi Kiri, Bilik Kanan, dan Bilik Kiri.'
    ],
    poinPenting: [
      'Pertukaran gas oksigen (O2) dan karbondioksida (CO2) terjadi di kantung Alveolus paru-paru',
      'Bilik kiri jantung memiliki otot paling tebal karena memompa darah bersih ke seluruh tubuh'
    ],
    doaAtauDalil: {
      arab: 'لَقَدْ خَلَقْنَا الْإِنْسَانَ فِي أَحْسَنِ تَقْوِيمٍ',
      latin: 'Laqad khalaqnal insaana fii ahsani taqwiim',
      arti: 'Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya. (QS. At-Tin: 4)'
    },
    iconName: 'Activity',
    warna: 'rose'
  },
  {
    id: 'matematika-5',
    judul: 'Operasi Hitung Pecahan & Volume Bangun Ruang',
    mapel: 'Matematika',
    kelas: 5,
    fase: 'Fase C',
    ringkasan: 'Menghitung penjumlahan/pengurangan pecahan beda penyebut dengan KPK, serta volume Kubus dan Balok.',
    kontenLengkap: [
      'A. Operasi Pecahan Berbeda Penyebut:',
      'Untuk menjumlahkan pecahan berpenyebut beda, kita harus menyamakan penyebutnya terlebih dahulu dengan mencari KPK.',
      'Contoh: 1/3 + 1/4 = (4/12) + (3/12) = 7/12.',
      'Perkalian Pecahan: Kalikan pembilang dengan pembilang, dan penyebut dengan penyebut. Contoh: 2/3 x 4/5 = 8/15.',
      'B. Volume Bangun Ruang:',
      '1. Kubus: Memiliki 6 sisi persegi yang sama besar. Rumus Volume = sisi x sisi x sisi (s³). Contoh jika s = 5 cm, maka V = 5 x 5 x 5 = 125 cm³.',
      '2. Balok: Memiliki panjang (p), lebar (l), dan tinggi (t). Rumus Volume = panjang x lebar x tinggi (p x l x t).'
    ],
    poinPenting: [
      'Menyamakan penyebut pecahan menggunakan KPK (Kelipatan Persekutuan Terkecil)',
      'Satuan volume adalah kubik (misal: cm³, m³, atau liter)'
    ],
    iconName: 'Box',
    warna: 'teal'
  },
  {
    id: 'bindonesia-6',
    judul: 'Teks Eksplanasi Ilmiah & Menulis Formulir / Pidato',
    mapel: 'Bahasa Indonesia',
    kelas: 6,
    fase: 'Fase C',
    ringkasan: 'Menelaah struktur teks eksplanasi (sebab-akibat fenomena alam), mengisi formulir pendaftaran, dan etika berpidato santun.',
    kontenLengkap: [
      'A. Teks Eksplanasi:',
      'Teks yang menjelaskan proses terjadinya fenomena alam, sosial, atau ilmu pengetahuan (misal: terjadinya pelangi, gempa bumi, gerhana bulan).',
      'Struktur teks eksplanasi terdiri dari:',
      '1. Pernyataan Umum: Gambaran singkat fenomena yang dijelaskan.',
      '2. Deretan Penjelas: Rincian hubungan sebab-akibat mengapa fenomena itu bisa terjadi.',
      '3. Interpretasi / Kesimpulan: Pandangan atau ringkasan penulis.',
      'B. Berpidato (Muhadharah / Khitobah):',
      'Bagian pidato: Salam pembuka -> Puji syukur kepada Allah & shalawat -> Isi pokok pesan -> Kesimpulan dan ajakan -> Permohonan maaf dan salam penutup.'
    ],
    poinPenting: [
      'Teks eksplanasi disusun berdasarkan fakta ilmiah bukan karangan fiksi',
      'Gunakan kata sambung kausalitas seperti: karena, oleh sebab itu, sehingga'
    ],
    iconName: 'FileText',
    warna: 'blue'
  },
  {
    id: 'pjok-6',
    judul: 'Permainan Bola Besar (Sepak Bola & Voli) serta Kebugaran Jasmani',
    mapel: 'PJOK',
    kelas: 6,
    fase: 'Fase C',
    ringkasan: 'Kombinasi gerak passing, dribbling, shooting, serta tes kebugaran daya tahan jantung dan kekuatan otot.',
    kontenLengkap: [
      'Permainan bola besar melatih kerja sama tim, sportivitas, disiplin, dan strategi:',
      '1. Sepak Bola: Menggabungkan gerak lokomotor (berlari), non-lokomotor (sikap kuda-kuda), dan manipulatif (mengoper bola/passing, menggiring bola/dribbling, dan menembak/shooting ke gawang).',
      '2. Bola Voli: Melatih koordinasi mata dan tangan melalui teknik passing bawah, passing atas, servis atas/bawah, dan smash.',
      'Kebugaran Jasmani:',
      '• Daya tahan kardiovaskular: Lari santai (jogging) 12 menit.',
      '• Kekuatan otot perut: Latihan sit-up.',
      '• Kekuatan otot dada dan lengan: Latihan push-up.',
      '• Kelenturan: Peregangan dinamis dan statis sebelum berolahraga untuk mencegah cedera.'
    ],
    poinPenting: [
      'Pemanasan (warming-up) wajib sebelum olahraga, dan pendinginan (cooling-down) sesudahnya',
      'Sportivitas mengajarkan kejujuran mengakui keunggulan lawan dan tidak sombong saat menang'
    ],
    iconName: 'Trophy',
    warna: 'amber'
  },
  {
    id: 'sbdp-6',
    judul: 'Seni Musik Tradisional Nusantara & Reklame / Poster Edukasi',
    mapel: 'SBDP',
    kelas: 6,
    fase: 'Fase C',
    ringkasan: 'Mengenal alat musik gamelan dan angklung, tangga nada diatonis dan pentatonis, serta merancang poster dakwah islami.',
    kontenLengkap: [
      'A. Seni Musik Tradisional Nusantara:',
      '• Gamelan (Jawa, Bali, Sunda): Alat musik melodis dan ritmis seperti saron, bonang, gong, dan kendang.',
      '• Angklung (Jawa Barat): Alat musik bambu yang dimainkan dengan cara digoyangkan, telah diakui UNESCO sebagai warisan budaya dunia.',
      '• Tangga nada diatonis memiliki 7 nada pokok (do-re-mi-fa-sol-la-si), sedangkan pentatonis memiliki 5 nada pokok.',
      'B. Reklame dan Poster:',
      'Poster adalah media publikasi visual yang memadukan gambar ilustrasi menarik dengan kalimat ajakan yang padat, jelas, dan mudah diingat.',
      'Ciri Poster Efektif: Warna kontras memikat mata, huruf terbaca jelas dari jarak jauh, dan memuat pesan positif (misal poster "Jaga Kebersihan Madrasah", "Mari Berzakat").'
    ],
    poinPenting: [
      'Angklung dimainkan secara harmonis dalam kelompok ensemble',
      'Poster edukasi bertujuan mengajak masyarakat berbuat kebaikan'
    ],
    iconName: 'Image',
    warna: 'purple'
  },
  {
    id: 'tahfidz-6',
    judul: 'Tahfidz: Surah An-Naba\' dan An-Nazi\'at (Puncak Juz 30)',
    mapel: 'Tahfidz Qur\'an',
    kelas: 6,
    fase: 'Fase C',
    ringkasan: 'Menuntaskan hafalan Juz 30 dengan tartil, memahami dahsyatnya hari kiamat dan kemuliaan surga yang dijanjikan Allah.',
    kontenLengkap: [
      'Surah An-Naba\' (40 ayat) dan An-Nazi\'at (46 ayat) adalah surah pembuka Juz 30 yang sangat agung.',
      'Inti Kandungan Surah An-Naba\' (Berita Besar):',
      'Menceritakan tentang berita besar hari kebangkitan (kiamat) yang sering dipertanyakan kaum musyrikin. Allah mengingatkan bukti ciptaan-Nya: bumi sebagai hamparan, gunung sebagai pasak (pancang), malam sebagai selimut, dan matahari sebagai pelita yang amat terang.',
      'Inti Kandungan Surah An-Nazi\'at:',
      'Menceritakan para malaikat yang mencabut nyawa orang kafir dengan keras dan mencabut nyawa orang beriman dengan lembut. Juga kisah Nabi Musa AS yang diutus mendakwahi Raja Firaun yang melampaui batas.',
      'Kriteria Kelulusan Tahfidz Kelas 6: Mampu membaca seluruh Juz 30 secara bil-ghaib (hafalan tanpa melihat mushaf) dengan tajwid yang fasih dan tartil.'
    ],
    poinPenting: [
      'Menyelesaikan hafalan Juz 30 adalah kebanggaan dan mahkota kemuliaan bagi kedua orang tua di akhirat',
      'Rasulullah menjanjikan bahwa penghafal Al-Qur\'an akan mengenakan jubah dan mahkota cahaya bagi ayah dan ibunya'
    ],
    doaAtauDalil: {
      arab: 'عَمَّ يَتَسَاءَلُونَ ۝ عَنِ النَّبَإِ الْعَظِيمِ',
      latin: '\'Amma yatasaa\'aluun, \'anin-naba\'il \'azhiim',
      arti: 'Tentang apakah mereka saling bertanya-tanya? Tentang berita yang besar (hari kiamat). (QS. An-Naba\': 1-2)'
    },
    iconName: 'Crown',
    warna: 'emerald'
  },

  // ==========================================================================
  // PAI & MAPEL KEAGAMAAN MI INTI (KELAS 1 - 6)
  // ==========================================================================
  {
    id: 'qh-1',
    judul: 'Mengenal Huruf Hijaiyah & Tanda Baca (Harakat)',
    mapel: 'Al-Qur\'an Hadits',
    kelas: 1,
    fase: 'Fase A',
    ringkasan: 'Mengenal 29 huruf hijaiyah dari Alif sampai Ya serta harakat Fathah, Kasrah, Dhammah, Sukun, dan Tanwin.',
    kontenLengkap: [
      'Al-Qur\'an adalah pedoman hidup umat Islam yang ditulis dalam bahasa Arab. Untuk membacanya, kita harus menguasai huruf hijaiyah.',
      'Huruf hijaiyah berjumlah 29 huruf, diawali dari huruf Alif (ا) dan diakhiri dengan Ya (ي).',
      'Harakat adalah tanda baca yang memberi bunyi pada huruf hijaiyah:',
      '1. Fathah (ـَ) menghasilkan vokal "A"',
      '2. Kasrah (ـِ) menghasilkan vokal "I"',
      '3. Dhammah (ـُ) menghasilkan vokal "U"',
      '4. Sukun (ـْ) merupakan tanda mati / konsonan',
      '5. Tanwin (ـً ـٍ ـٌ) menghasilkan akhiran bunyi "an", "in", dan "un".'
    ],
    poinPenting: [
      'Ada 29 huruf hijaiyah pokok dalam Al-Qur\'an',
      'Tanda baca harakat mengubah konsonan menjadi bunyi berirama',
      'Membaca 1 huruf Al-Qur\'an mendapat pahala 10 kebaikan'
    ],
    doaAtauDalil: {
      arab: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
      latin: 'Khoirukum man ta\'allamal Qur\'aana wa \'allamahu',
      arti: 'Sebaik-baik kalian adalah orang yang belajar Al-Qur\'an dan mengajarkannya. (HR. Bukhari)'
    },
    iconName: 'BookOpen',
    warna: 'emerald'
  },
  {
    id: 'aa-1',
    judul: 'Rukun Iman Enam Perkara & Meyakini Keagungan Allah',
    mapel: 'Akidah Akhlak',
    kelas: 1,
    fase: 'Fase A',
    ringkasan: 'Mempelajari 6 pilar keimanan yang harus diyakini dalam hati, diucapkan dengan lisan, dan diamalkan dalam perbuatan.',
    kontenLengkap: [
      'Iman artinya percaya dan meyakini dengan sepenuh hati. Setiap muslim wajib memiliki pondasi iman yang kokoh.',
      'Enam Rukun Iman yang wajib kita ketahui dan yakini:',
      '1. Iman kepada Allah SWT: Meyakini bahwa Allah itu Ada, Maha Esa, dan Maha Pencipta seluruh alam semesta.',
      '2. Iman kepada Malaikat-malaikat Allah: Makhluk gaib yang diciptakan dari cahaya, selalu taat dan tidak pernah berbuat dosa.',
      '3. Iman kepada Kitab-kitab Allah: Meyakini kitab Taurat, Zabur, Injil, dan kitab suci terakhir Al-Qur\'an Al-Karim.',
      '4. Iman kepada Nabi dan Rasul: Utusan Allah yang membimbing manusia menuju jalan kebenaran.',
      '5. Iman kepada Hari Kiamat / Akhir: Hari berakhirnya kehidupan dunia dan permulaan alam akhirat.',
      '6. Iman kepada Qada dan Qadar: Ketetapan dan takdir Allah yang berlaku bagi setiap makhluk.'
    ],
    poinPenting: [
      'Rukun Iman berjumlah 6 perkara',
      'Iman kepada Allah adalah rukun pertama dan paling mendasar'
    ],
    doaAtauDalil: {
      arab: 'آمَنْتُ بِاللهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ',
      latin: 'Aamantu billahi wa malaa\'ikatihi wa kutubihi wa rusulihi wal yaumil aakhir',
      arti: 'Aku beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, dan hari akhir.'
    },
    iconName: 'HeartHandshake',
    warna: 'blue'
  },
  {
    id: 'fk-1',
    judul: 'Tata Cara Berwudhu & Shalat Fardhu',
    mapel: 'Fikih',
    kelas: 2,
    fase: 'Fase A',
    ringkasan: 'Panduan bersuci (thaharah) dari hadas kecil sebagai syarat sah shalat sesuai sunnah Rasulullah SAW.',
    kontenLengkap: [
      'Wudhu adalah membersihkan anggota badan tertentu dengan menggunakan air bersih yang suci lagi mensucikan.',
      'Enam Rukun Wudhu yang tidak boleh ditinggalkan:',
      '1. Niat dalam hati bersamaan saat membasuh wajah',
      '2. Membasuh seluruh permukaan wajah secara merata',
      '3. Membasuh kedua tangan sampai ke siku (kanan lalu kiri)',
      '4. Mengusap sebagian kepala atau rambut dengan air',
      '5. Membasuh kedua kaki sampai mata kaki (kanan lalu kiri)',
      '6. Tertib (melakukan gerakan secara berurutan).',
      'Shalat fardhu sehari semalam berjumlah 17 rakaat: Shubuh (2), Dzuhur (4), Ashar (4), Maghrib (3), dan Isya (4).'
    ],
    poinPenting: [
      'Wudhu wajib menggunakan air mutlak (air sumur, hujan, sungai bersih)',
      'Shalat adalah tiang agama yang tidak boleh ditinggalkan'
    ],
    doaAtauDalil: {
      arab: 'نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ الْأَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى',
      latin: 'Nawaitul wudhuu\'a liraf\'il hadatsil ashghari fardhan lillaahi ta\'aalaa',
      arti: 'Saya berniat wudhu untuk menghilangkan hadas kecil, fardhu karena Allah Ta\'ala.'
    },
    iconName: 'Sparkles',
    warna: 'teal'
  },
  {
    id: 'ski-1',
    judul: 'Kisah Kelahiran & Keteladanan Nabi Muhammad SAW',
    mapel: 'SKI',
    kelas: 3,
    fase: 'Fase B',
    ringkasan: 'Kisah keteladanan akhlak mulia Nabi Muhammad SAW sejak masa asuhan ibunda Siti Aminah hingga gelar Al-Amin.',
    kontenLengkap: [
      'Nabi Muhammad SAW lahir pada tanggal 12 Rabiul Awwal Tahun Gajah di kota suci Mekkah.',
      'Ayah beliau, Abdullah, wafat saat Nabi masih berada dalam kandungan. Ketika berusia 6 tahun, ibunda tercinta Siti Aminah wafat di desa Abwa.',
      'Nabi kemudian diasuh oleh kakeknya Abdul Muthalib, dan dilanjutkan oleh pamannya Abu Thalib.',
      'Kejujuran dan integritas beliau membuat masyarakat Quraisy Mekkah menyematkan gelar "Al-Amin", yang bermakna orang yang sangat terpercaya.'
    ],
    poinPenting: [
      'Nabi Muhammad SAW lahir sebagai anak yatim yang tabah dan mandiri',
      'Mendapat gelar Al-Amin karena sifat amanah dan tidak pernah curang'
    ],
    doaAtauDalil: {
      arab: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',
      latin: 'Wa innaka la\'alaa khuluqin \'azhiim',
      arti: 'Dan sesungguhnya engkau (Muhammad) benar-benar berbudi pekerti yang agung. (QS. Al-Qalam: 4)'
    },
    iconName: 'Compass',
    warna: 'amber'
  },
  {
    id: 'ba-1',
    judul: 'Kosakata Peralatan Belajar & Angka 1-10 (Bahasa Arab)',
    mapel: 'Bahasa Arab',
    kelas: 3,
    fase: 'Fase B',
    ringkasan: 'Mempelajari kosakata (mufrodat) benda-benda di dalam kelas dan angka 1 sampai 10 dalam bahasa Arab.',
    kontenLengkap: [
      'Bahasa Arab adalah bahasa Al-Qur\'an yang indah dan kaya makna:',
      '• Qolamun (قَلَمٌ) = Pulpen / Pena',
      '• Kitaabun (كِتَابٌ) = Buku bacaan / Kitab',
      '• Daftarun (دَفْتَرٌ) = Buku tulis catatan',
      '• Mimhatun (مِمْحَاةٌ) = Penghapus karet',
      '• Maktabun (مَكْتَبٌ) = Meja belajar',
      '• Kursiyyun (كُرْسِيٌّ) = Kursi duduk',
      'Bilangan 1 - 10: Waahidun (1), Itsnaani (2), Tsalaatsatun (3), Arba\'atun (4), Khomsatun (5), Sittatun (6), Sab\'atun (7), Tsamaaniyatun (8), Tis\'atun (9), \'Asyarotun (10).'
    ],
    poinPenting: [
      'Gunakan "Maa haadza?" (Apa ini?) untuk benda mudzakkar tanpa ta marbuthah',
      'Gunakan "Maa haadzihi?" untuk benda muannats yang berakhiran ta marbuthah'
    ],
    iconName: 'Languages',
    warna: 'emerald'
  },
  {
    id: 'qh-2',
    judul: 'Hukum Tajwid: Nun Sukun, Tanwin & Mim Sukun',
    mapel: 'Al-Qur\'an Hadits',
    kelas: 5,
    fase: 'Fase C',
    ringkasan: 'Memahami kaidah membaca Al-Qur\'an dengan fasih: Izhar Halqi, Idgham Bighunnah, Idgham Bilaghunnah, Iqlab, dan Ikhfa.',
    kontenLengkap: [
      'Tajwid berarti memperindah dan melafalkan setiap huruf Al-Qur\'an sesuai makhraj dan sifat aslinya.',
      'Jika Nun Mati (نْ) atau Tanwin (ـً ـٍ ـٌ) bertemu huruf hijaiyah, terbagi menjadi 5 hukum bacaan:',
      '1. Izhar Halqi: Dibaca jelas tanpa dengung jika bertemu 6 huruf tenggorokan (ء، هـ، ع، ح، غ، خ).',
      '2. Idgham Bighunnah: Suara nun dimasukkan ke huruf berikutnya dengan mendengung saat bertemu huruf (ي، ن، م، و).',
      '3. Idgham Bilaghunnah: Dimasukkan tanpa dengung jika bertemu huruf (ل، ر).',
      '4. Iqlab: Bunyi nun berubah menjadi huruf Mim (م) jika bertemu huruf Ba (ب).',
      '5. Ikhfa Haqiqi: Dibaca samar-samar disertai dengung bila bertemu 15 huruf sisanya.'
    ],
    poinPenting: [
      'Membaca Al-Qur\'an dengan tartil dan tajwid adalah fardhu \'ain bagi setiap muslim',
      'Terdapat 5 hukum nun mati/tanwin yang harus dihafal rumusnya'
    ],
    doaAtauDalil: {
      arab: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
      latin: 'Wa rattilil Qur\'aana tartiilaa',
      arti: 'Dan bacalah Al-Qur\'an itu dengan perlahan-lahan (tartil). (QS. Al-Muzzammil: 4)'
    },
    iconName: 'BookMarked',
    warna: 'purple'
  },
  {
    id: 'fk-2',
    judul: 'Zakat Fitrah, Zakat Mal & Qurban dalam Syariat Islam',
    mapel: 'Fikih',
    kelas: 6,
    fase: 'Fase C',
    ringkasan: 'Ketentuan pensucian jiwa dan harta melalui zakat fitrah, zakat mal, serta penyembelihan hewan qurban.',
    kontenLengkap: [
      'Zakat adalah sebagian harta tertentu yang wajib dikeluarkan oleh seorang muslim untuk diberikan kepada golongan yang berhak menerimanya (Mustahik).',
      'A. Zakat Fitrah: Zakat jiwa yang wajib dibayarkan pada bulan Ramadhan sebelum shalat Idul Fitri sebesar 1 sha\' atau 2,5 kg beras.',
      'B. Zakat Mal: Zakat kekayaan (emas, perak, perniagaan, hasil bumi) yang telah mencapai nisab dan haul (1 tahun) sebesar 2,5%.',
      'C. Delapan Golongan Penerima Zakat (QS. At-Taubah: 60): Fakir, Miskin, Amil, Mualaf, Riqab, Gharimin, Fisabilillah, dan Ibnu Sabil.'
    ],
    poinPenting: [
      'Zakat fitrah membersihkan orang yang berpuasa dari perkataan sia-sia',
      'Zakat menumbuhkan empati dan membantu mengentaskan kemiskinan'
    ],
    doaAtauDalil: {
      arab: 'خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا',
      latin: 'Khudz min amwaalihim shodaqotan tuthahhiruhum wa tuzakkiihim bihaa',
      arti: 'Ambillah zakat dari sebagian harta mereka, dengan zakat itu kamu membersihkan dan mensucikan mereka. (QS. At-Taubah: 103)'
    },
    iconName: 'Wallet',
    warna: 'emerald'
  }
];
