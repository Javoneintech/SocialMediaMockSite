import { createRouter, createWebHistory } from 'vue-router'
import NewPostView from '@/views/NewPostView.vue'
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/newposts",
      name: "newposts",
      component: NewPostView,
    },
    {
      path: "/about",
      name: "about",
    },
  ],
});

export default router
