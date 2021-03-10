import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import fb from '../plugins/firebase'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // beforeEnter: (to, from, next) => {
    //     fb.auth().onAuthStateChanged((user)=>{
    //       if(user)
    //       {
    //          next()
    //       }else{
    //          next(false)
    //       }
    //     })
    //   }
  },
  {
    path: '/chatengine',
    name: 'Chats',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Chats.vue'),
    beforeEnter: (to, from, next) => {
      fb.auth().onAuthStateChanged((user) => {
        if (user) {
          next()
        } else {
          next('/login')
        }
      })
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      fb.auth().onAuthStateChanged((user) => {
        if (user) {
          next(false)
        } else {
          next()
        }
      })
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue'),
    beforeEnter: (to, from, next) => {
      fb.auth().onAuthStateChanged((user) => {
        if (user) {
          next(false)
        } else {
          next()
        }
      })
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
