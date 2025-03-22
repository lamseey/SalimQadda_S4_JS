import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddJob from '../views/AddJob.vue'
import EditJob from '../components/EditJob.vue'

const routes = [
    {
      name: Home,
      path: "/",
        component: Home
    },
    {
      name: AddJob,
      path: "/add",
      component: AddJob
    },
    {
      name: EditJob,
      path: "/Jobs/:id",
      component: EditJob
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
