<template>
  <div id="app">
    <!-- Navigasi (opsional) -->
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/biodata">Biodata</router-link>
    </nav> -->

    <!-- Komponen yang cocok dengan route akan dirender di sini -->
    <router-view/>
  </div>
</template>

<script setup>
// Tidak perlu script khusus untuk ini, kecuali Anda mau menambahkan logika
</script>

<style>
/* Anda bisa menambahkan style global di sini atau di file CSS terpisah */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */ /* Mungkin tidak perlu center untuk CV */
  color: #2c3e50;
  margin-top: 20px; /* Beri sedikit margin atas */
  max-width: 800px; /* Batasi lebar agar seperti dokumen */
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
}

/* Contoh style dasar untuk CV nanti */
.cv-container {
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
}
.cv-header {
  text-align: center;
  margin-bottom: 20px;
}
.cv-photo {
  max-width: 150px;
  height: auto;
  border-radius: 50%; /* Membuat foto jadi bulat */
  display: block;
  margin: 0 auto 15px auto; /* Tengah dan beri jarak bawah */
}
.cv-section {
  margin-bottom: 15px;
}
.cv-section h2 {
  border-bottom: 1px solid #ccc;
  padding-bottom: 5px;
  margin-bottom: 10px;
}
</style>