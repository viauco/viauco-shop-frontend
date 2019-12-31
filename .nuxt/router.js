import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c485593a = () => interopDefault(import('../pages/addresses/index.vue' /* webpackChunkName: "pages/addresses/index" */))
const _5146ca58 = () => interopDefault(import('../pages/carts/index.vue' /* webpackChunkName: "pages/carts/index" */))
const _aef00f10 = () => interopDefault(import('../pages/checkout.vue' /* webpackChunkName: "pages/checkout" */))
const _4f505e5a = () => interopDefault(import('../pages/orders/index.vue' /* webpackChunkName: "pages/orders/index" */))
const _23eebb99 = () => interopDefault(import('../pages/products/index.vue' /* webpackChunkName: "pages/products/index" */))
const _384e8eb2 = () => interopDefault(import('../pages/accounts/login.vue' /* webpackChunkName: "pages/accounts/login" */))
const _5a1280b2 = () => interopDefault(import('../pages/accounts/profile.vue' /* webpackChunkName: "pages/accounts/profile" */))
const _3c20b4ea = () => interopDefault(import('../pages/accounts/register.vue' /* webpackChunkName: "pages/accounts/register" */))
const _3aa2b5b2 = () => interopDefault(import('../pages/products/new.vue' /* webpackChunkName: "pages/products/new" */))
const _22381a51 = () => interopDefault(import('../pages/products/_slug.vue' /* webpackChunkName: "pages/products/_slug" */))
const _b1b365e0 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addresses",
    component: _c485593a,
    name: "addresses"
  }, {
    path: "/carts",
    component: _5146ca58,
    name: "carts"
  }, {
    path: "/checkout",
    component: _aef00f10,
    name: "checkout"
  }, {
    path: "/orders",
    component: _4f505e5a,
    name: "orders"
  }, {
    path: "/products",
    component: _23eebb99,
    name: "products"
  }, {
    path: "/accounts/login",
    component: _384e8eb2,
    name: "accounts-login"
  }, {
    path: "/accounts/profile",
    component: _5a1280b2,
    name: "accounts-profile"
  }, {
    path: "/accounts/register",
    component: _3c20b4ea,
    name: "accounts-register"
  }, {
    path: "/products/new",
    component: _3aa2b5b2,
    name: "products-new"
  }, {
    path: "/products/:slug",
    component: _22381a51,
    name: "products-slug"
  }, {
    path: "/",
    component: _b1b365e0,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
