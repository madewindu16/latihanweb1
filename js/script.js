// =========================
// STATUS MAGANG
// =========================

const tombol = document.getElementById("btnStatus");
const status = document.getElementById("status");

tombol.addEventListener("click", function () {
  status.textContent = "Siap Magang";
});

// =========================
// DATA DIRI
// =========================

const nama = "I Made Windu";
const kampus = "ITB STIKOM Bali";
const jurusan = "D3 Manajemen Informatika";

console.log(nama);
console.log(kampus);
console.log(jurusan);

// =========================
// UBAH WARNA JUDUL
// =========================

const judul = document.getElementById("nama");

judul.addEventListener("click", function () {
  judul.style.color = "blue";
});

// =========================
// TUGAS 4
// =========================

const nilaiLulus = 80;

if (nilaiLulus >= 75) {
  console.log("Lulus");
} else {
  console.log("Tidak Lulus");
}

// =========================
// TUGAS 5
// =========================

const statusMagang = "siap";

if (statusMagang === "siap") {
  console.log("Siap mengikuti magang");
} else {
  console.log("Belum siap mengikuti magang");
}

// =========================
// TUGAS 6
// =========================

const nilaiAkhir = 65;

if (nilaiAkhir >= 90) {
  console.log("Sangat Baik");
} else if (nilaiAkhir >= 75) {
  console.log("Baik");
} else if (nilaiAkhir >= 60) {
  console.log("Cukup");
} else {
  console.log("Perlu Belajar");
}

// =========================
// TUGAS 7
// =========================

const nilai = 80;
const tugasSelesai = true;

if (nilai >= 75 && tugasSelesai === true) {
  console.log("Berhasil Lulus");
} else {
  console.log("Belum Lulus");
}

// =========================
// TUGAS 8
// =========================

const role = "editor";

if (role === "editor" || role === "admin") {
  console.log("Boleh Mengakses Dashboard");
} else {
  console.log("Akses Ditolak");
}

const formMagang = document.getElementById("formMagang");
const inputNama = document.getElementById("inputNama");
const hasilForm = document.getElementById("hasilForm");

formMagang.addEventListener("submit", function (event) {
  event.preventDefault();
  const namaUser = inputNama.value;

  console.log(namaUser);
  if (namaUser === "") {
    hasilForm.textContent = "Nama wajib diisi";
  } else {
    hasilForm.textContent = "Halo, " + namaUser + "!";
  }
});
