import Vue from 'vue'
import VueRouter from 'vue-router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'

Vue.use(Buefy)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '', name: 'Home', component: () => import('@/components/Home') },
    { path: '/:room', name: 'Meet', component: () => import('@/components/Meet') }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
