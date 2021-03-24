import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import HelloWorld from '../components/HelloWorld.vue'


const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/about',
    name: 'About',
  component: About
  },
  {
    path: '/services',
    name: 'Services',
  component: Services
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
