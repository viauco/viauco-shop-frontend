import Promise from 'bluebird';
import strapi from '@/services/strapi'
import storage from '@/services/storage'

let authKey = process.env.VIAUCO_AUTH_KEY || '__vid';

export const state = () => ({
  auth: null,
})

export const getters = {
  isLoggedIn: state => {
    return state.auth && state.auth.jwt;
  },
  getToken: state => {
    return state.auth && state.auth.jwt ? state.auth.jwt : null;
  },
  getUser: state => {
    return state.auth && state.auth.user ? state.auth.user : null;
  },
  getUserId: state => {
    return state.auth && state.auth.user && state.auth.user.id ? state.auth.user.id : 0;
  },
  getUserEmail: state => {
    return state.auth && state.auth.user && state.auth.user.email ? state.auth.user.email : null;
  },
  getUserName: state => {
    return state.auth && state.auth.user && state.auth.user.name ? state.auth.user.name : '';
  },
  getUserAvatar: state => {
    return state.auth && state.auth.user && state.auth.user.avatar ? state.auth.user.avatar : '';
  }
}

export const mutations = {
	SET_AUTH(state, auth) {
		state.auth = auth
		storage.set(authKey, auth)
	}
}
 
export const actions = {
	  async nuxtServerInit(context) {
      await context.dispatch('appInit')
    },
    async nuxtClientInit(context) {
      await context.dispatch('appInit')
    },
    async appInit(context) {
      try{
        let auth = storage.get(authKey)
        context.commit("SET_AUTH", auth);
        context.dispatch("product/init");
        context.dispatch("cart/init");
        context.dispatch("favourite/init");
      }catch(e){
        console.log(e)
      }
    },
    async login(context, params) {
        let response = await strapi.login( params.identifier, params.password)
        console.log('>>>>>>>>>', response)
        context.commit("SET_AUTH", response.data)
        return Promise.resolve(response);
    },

    async register(context, params) {
        let response = await strapi.register(params.username, params.email, params.password)
        context.commit("SET_USER", response.data)
        return Promise.resolve(response);
    },

    async forgotPassword(context, params) {
        let response = await strapi.forgotPassword(params.email, params.url)
    },
    
    async forgotPassword(context, params) {
        let response = await strapi.resetPassword(params.code, params.password, params.passwordConfirmation)
    },
    
    async getProviderAuthenticationUrl(context, params) {
        let response = await strapi.getProviderAuthenticationUrl(params.provider)
    },

    async authenticateProvider(context, params) {
        let response = await strapi.authenticateProvider(provider, params)
    },

    async setToken(context, params) {
        let response = await strapi.setToken(params.token, params.comesFromStorage)
    },

    async setToken(context, params) {
        let response = await strapi.clearToken(params.token)
    },

    async logout(context) {
      context.commit("SET_AUTH", null);
      return Promise.resolve(true);
    }
} 
