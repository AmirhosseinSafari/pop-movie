import Vue from 'vue';
import Router from 'vue-router';

import LandingPage from '../landing page/LandingPage'
import LoginPage from '../login/LoginPage'
import RegisterPage from '../register/RegisterPage'
import FirstTimePage from '../first time page/FirstTimePage'
import ShowMovie from '../show movie/ShowMovie';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: LandingPage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/landingpage', component: LandingPage },
    { path: '/first', component: FirstTimePage },
    { path: '/movie/:id', component: ShowMovie },
    
    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && (loggedIn)) {
    return next('/landingpage');
  }

  next();
})