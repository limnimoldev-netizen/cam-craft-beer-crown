import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    

    
    {
      
      path: "/",
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    
    },
 {
      path: '/schedule',
      name: 'schedule',
      component: () => import('../views/Schedule.vue'), 
    },

    {
       path: '/styles',
      name: 'styles',
      component: () => import('../views/Styles.vue'), 
    },
    


    {
      path: "/awards",
      name: 'award',
      
      component: () => import('../views/AwardView.vue')
    },

    {
      path: "/styles",
      name: 'styles',
      component: () => import('../views/Styles.vue')
    },

    {
      path: "/breweries",
      name: 'breweries',
      component: () => import('../views/BreweryView.vue')
    },
    {
      path: "/sponsors",
      name: 'sponsors',
      component: () => import('../views/Sponsor.View.vue')
    }
    

    

 
  ],
})

export default router