import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from './pages/category.vue';
import Home from './pages/home.vue';
import Series from './pages/series.vue';
import Week from './pages/week.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: { template: '<div>Tentang daftar bacaan</div>' }
    },
    {
      path: '/create',
      name: 'create',
      component: { template: '<div>Bikin daftar bacaan</div>' }
    },
    {
      path: '/list',
      name: 'list',
      component: { template: '<div>Daftar bacaanku</div>' }
    },
    {
      path: '/:category',
      name: 'category',
      component: Category
    },
    {
      path: '/:category/series/:title',
      name: 'series',
      component: Series
    },
    {
      path: '/:category/week/:date',
      name: 'week',
      component: Week
    }
  ]
});
