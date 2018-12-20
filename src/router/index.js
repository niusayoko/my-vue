import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'

Vue.use(Router)

let routes = new Set([...Home]);

export default new Router({
  mode: 'history',
  routes:  routes
})
