import { createRouter, createWebHistory } from 'vue-router';
import BiodataView from '../views/BiodataView.vue'; // Kita akan buat file ini nanti

const routes = [
  {
    path: '/biodata',
    name: 'biodata',
    component: BiodataView
  },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;