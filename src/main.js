// Import ES6 Promise
import 'es6-promise/auto'

// Import System requirements
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCountdownTimer from 'vuejs-countdown-timer'
import { sync } from 'vuex-router-sync'
import routes from './routes'
import store from './store'
import firebase from 'firebase'
// Import Helpers for filters
import { domain, count, prettyDate, pluralize } from './filters'
// Import Views - Top level
import AppView from './components/App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
Vue.use(VueSweetalert2)
// Import Install and register helper items
Vue.filter('count', count)
Vue.filter('domain', domain)
Vue.filter('prettyDate', prettyDate)
Vue.filter('pluralize', pluralize)

Vue.use(VueRouter)

Vue.use(VueCountdownTimer)
// Routing logic
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkExactActiveClass: 'active',
  scrollBehavior: function(to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})
const firebaseConfig = {
  apiKey: 'AIzaSyAlzlAlFGvPsqUS5wDoW3kRmqjg-E3ubCI',
  authDomain: 'longlifetrading-6e417.firebaseapp.com',
  projectId: 'longlifetrading-6e417',
  storageBucket: 'longlifetrading-6e417.appspot.com',
  messagingSenderId: '729569899229',
  appId: '1:729569899229:web:58fae2d5a6bd26db1de134',
  measurementId: 'G-4JDL2ZW81B'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  if (
    to.matched.some(record => record.meta.requiresAuth) &&
    (!router.app.$store.state.token || router.app.$store.state.token === 'null')
  ) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    window.console.log('Not authenticated')
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

sync(store, router)

// Check local storage to handle refreshes
if (window.localStorage) {
  var localUserString = window.localStorage.getItem('user') || 'null'
  var localUser = JSON.parse(localUserString)

  if (localUser && store.state.user !== localUser) {
    store.commit('SET_USER', localUser)
    store.commit('SET_TOKEN', window.localStorage.getItem('token'))
  }
}

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView)
})

// change this. demo
window.bugsnagClient = window.bugsnag('02fe1c2caaf5874c50b6ee19534f5932')
window.bugsnagClient.use(window.bugsnag__vue(Vue))
