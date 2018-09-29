import Vue from 'vue';
import Router from 'vue-router';
import Goods from '../components/goods/Goods';
import Sellers from '../components/sellers/Sellers';
import Rating from '../components/ratings/Ratings';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active', // 激活样式
  routes: [
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/seller',
      component: Sellers
    },
    {
      path: '/ratings',
      component: Rating
    },
    {
      path: '',
      redirect: '/goods'
    }
  ]
});
