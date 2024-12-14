import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ServicePage from '../views/ServicePage.vue';
import ProjePage from '../views/ProjePage.vue';
import TeamPage from '../views/TeamPage.vue';
import ContactPage from '../views/ContactPage.vue';
import BlogPage from '../views/BlogPage.vue';
import BlogDetailsPage from '../views/BlogDetailsPage.vue';
import ProjeDetailsPage from '../views/ProjeDetailsPage.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage,
  },
  {
    path: '/service',
    name: 'ServicePage',
    component: ServicePage,
  },
  {
    path: '/Proje',
    name: 'ProjePage',
    component: ProjePage,
  },
  {
    path: '/Team',
    name: 'TeamPage',
    component: TeamPage,
  },
  {
    path: '/Contact',
    name: 'ContactPage',
    component: ContactPage,
  },
  {
    path: '/Blog',
    name: 'BlogPage',
    component: BlogPage,
  },
  {
    path: '/BlogDetails',
    name: 'BlogDetailsPage',
    component: BlogDetailsPage,
  },
  {
    path: '/ProjeDetails',
    name: 'ProjeDetailsPage',
    component: ProjeDetailsPage,
  },
  // اضافه کردن مسیر catch-all در آخر
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes, // مسیرها به روتر متصل شده‌اند
});

export default router;
