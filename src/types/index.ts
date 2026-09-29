export type FaseType = 'Fase A' | 'Fase B' | 'Fase C';

export type MapelType = 
  | 'Tahfidz Qur\'an'
  | 'Al-Qur\'an Hadits'
  | 'Akidah Akhlak'
  | 'Fikih'
  | 'SKI'
  | 'Bahasa Arab'
  | 'Matematika'
  | 'Bahasa Indonesia'
  | 'IPAS'
  | 'Pendidikan Pancasila'
  | 'SBDP'
  | 'PJOK';

export interface Question {
  id: number;
  pertanyaan: string;
  pilihan: string[];
  jawaban: number; // 0, 1, 2, 3 corresponding to index in pilihan
  pembahasan?: string;
  kategori?: string;
  tingkat?: number; // for Jutawan 1 - 15
  kelas?: number;
  fase?: FaseType;
}

export interface MateriItem {
  id: string;
  judul: string;
  mapel: MapelType;
  kelas: number; // 1 to 6
  fase: FaseType; // Fase A (Kls 1-2), Fase B (Kls 3-4), Fase C (Kls 5-6)
  ringkasan: string;
  kontenLengkap: string[];
  poinPenting: string[];
  doaAtauDalil?: {
    arab?: string;
    latin?: string;
    arti?: string;
  };
  iconName: string;
  warna: string;
}

export type TabType = 'beranda' | 'materi' | 'game' | 'tentang' | 'bantuan';
export type GameType = 'hub' | 'ular-tangga' | 'jutawan' | 'ifp';

export function getFaseFromKelas(kelas: number): FaseType {
  if (kelas <= 2) return 'Fase A';
  if (kelas <= 4) return 'Fase B';
  return 'Fase C';
}

