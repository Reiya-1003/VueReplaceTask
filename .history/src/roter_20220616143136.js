import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/pages/PageHome.vue'
import Register from '@/components/pages/PageRegister.vue'




Vue.use(VueRouter)

export default new VueRouter({
  // デフォルトの挙動では URL に `#` が含まれる.
  // URL から hash を取り除くには `mode:history` を指定する
  // mode: 'history',   
  base: __dirname,               
 
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    
   
  
  ]

})