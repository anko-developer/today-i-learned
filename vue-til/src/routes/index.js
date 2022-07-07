import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/LoginPage'), // 코드 스플리팅 적용
    },
    {
      name: 'signup',
      path: '/signup',
      component: () => import('@/views/SignupPage'), // 코드 스플리팅 적용
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage'),
    },
  ],
});
