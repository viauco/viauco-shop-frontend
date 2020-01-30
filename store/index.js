import Promise from 'bluebird';
import repository from '@/services/repository'
import storage from '@/services/storage'

let authKey = process.env.STORAGE_AUTH_KEY || '__vid';

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
        if( auth ) {
          context.commit("SET_AUTH", auth);
        }
        context.dispatch("product/init");
        context.dispatch("cart/init");
        context.dispatch("favourite/init");
      }catch(e){
        console.log(e)
      }
    },
    async login(context, params) {
        let response = await repository.login( params)
        context.commit("SET_AUTH", response)
        return Promise.resolve(response);
    },

    async register(context, params) {
        let response = await repository.register(params)
        context.commit("SET_USER", response)
        return Promise.resolve(response);
    },

    async forgotPassword(context, params) {
        let response = await repository.forgotPassword(params)
        return Promise.resolve(response);
    },
    
    async resetPassword(context, params) {
        let response = await repository.resetPassword(params)
        return Promise.resolve(response);
    },
    
    async getProviderAuthenticationUrl(context, params) {
        let response = await repository.getProviderAuthenticationUrl(params)
        return Promise.resolve(response);
    },

    async authenticateProvider(context, params) {
        let response = await repository.authenticateProvider(params)
        return Promise.resolve(response);
    },

    async setToken(context, params) {
        let response = await repository.setToken(params)
        return Promise.resolve(response);
    },

    async clearToken(context, params) {
        let response = await repository.clearToken(params)
        return Promise.resolve(response);
    },

    async logout(context) {
      context.commit("SET_AUTH", null);
      return Promise.resolve(true);
    }
} 
