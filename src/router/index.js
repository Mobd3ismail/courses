import Vue from 'vue'
import VueRouter from 'vue-router'
import Videos from '../components/videos.vue'
import Main from '../components/mainPage.vue'
import Exams from '../components/exams.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/',  component: Main },
  { path: '/videos',  component: Videos },
  { path: '/exams',  component: Exams },
  { path: '/exams',  component: Exams },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router