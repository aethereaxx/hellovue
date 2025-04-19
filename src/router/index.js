import { createRouter, createWebHistory } from 'vue-router';
import BiodataView from '../views/BiodataView.vue'; // Kita akan buat file ini nanti

const routes = [
  {
    path: '/biodata',
    name: 'biodata',
    component: BiodataView
  },
  // Anda bisa menambahkan route lain di sini jika perlu
  // Contoh: route default ke halaman home
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView // Ganti dengan komponen Home Anda jika ada
  // }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Gunakan createWebHistory untuk URL bersih
  routes
});

export default router;