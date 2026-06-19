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
      component: () => import('../views/Schedule.vue'),  // ← បន្ថែមនេះ
    },

{
      path: '/styles',
      name: 'styles',
      component: () => import('../views/Styles.vue'),  // ← Styles.vue មិនមែន Beerstyles.vue
    },


    

 
  ],
})

export default router