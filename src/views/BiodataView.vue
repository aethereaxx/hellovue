<template>
    <div class="cv-container">
      <div class="cv-header">
        <h1>Curriculum Vitae</h1>
      </div>
  
      <img src="/foto.jpg" alt="Foto Profil" class="cv-photo">
      <!-- Ganti "foto-anda.jpg" dengan nama file foto Anda -->
      <!-- Pastikan file foto ada di folder 'public' -->
  
      <div class="cv-section">
        <h2>Data Pribadi</h2>
        <p><strong>Nama Lengkap:</strong> [Nama Lengkap Anda]</p>
        <p><strong>Tempat, Tanggal Lahir:</strong> [Tempat Lahir], [Tanggal Lahir]</p>
        <p><strong>Alamat:</strong> [Alamat Lengkap Anda]</p>
        <p><strong>Email:</strong> [Alamat Email Anda]</p>
        <p><strong>Telepon:</strong> [Nomor Telepon Anda]</p>
      </div>
  
      <div class="cv-section">
        <h2>Pendidikan</h2>
        <ul>
          <li>[Tahun Lulus] - [Nama Sekolah/Universitas] - [Jurusan/Program Studi]</li>
          <li>[Tahun Lulus] - [Nama Sekolah Lain]</li>
          <!-- Tambahkan riwayat pendidikan lainnya -->
        </ul>
      </div>
  
      <div class="cv-section">
        <h2>Pengalaman Kerja (jika ada)</h2>
        <ul>
          <li>[Periode Kerja] - [Nama Perusahaan] - [Posisi]</li>
          <!-- Tambahkan pengalaman lainnya -->
        </ul>
      </div>
  
      <div class="cv-section">
        <h2>Keterampilan</h2>
        <ul>
          <li>[Keterampilan 1]</li>
          <li>[Keterampilan 2]</li>
          <li>Programming: Vue.js, JavaScript, HTML, CSS</li>
          <!-- Tambahkan keterampilan lainnya -->
        </ul>
      </div>
  
    </div>
  </template>
  
  <script setup>
  // Untuk halaman statis seperti ini, mungkin tidak perlu script
  // Tapi Anda bisa menambahkan data dinamis di sini jika mau
  // import { ref } from 'vue';
  // const nama = ref('Nama Anda');
  </script>
  
  <style scoped>
  /* Style spesifik untuk halaman ini bisa ditambahkan di sini */
  /* Style dasar sudah ada di App.vue, tapi bisa dioverride atau ditambahkan */
  p {
    line-height: 1.6;
  }
  ul {
    padding-left: 20px;
  }
  li {
    margin-bottom: 5px;
  }
  </style>