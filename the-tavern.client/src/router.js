import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/questions',
    name: 'Questions',
    component: loadPage('QuestionsPage')
  },
  {
    path: '/results',
    name: 'Results',
    component: loadPage('ResultsPage')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: loadPage('CharactersPage'),
    beforeEnter: authGuard
  },
  {
    path: '/access-test',
    name: 'AccessTest',
    component: loadPage('AccessTestPage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
