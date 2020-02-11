import _ from 'lodash';
import Promise from 'bluebird';
import storage from '@/services/storage';
import repository from '@/services/repository';
import { raw } from '@/assets/raw/product';
const ENTRY = 'products';

export const productKey = process.env.STORAGE_PRODUCT_KEY || '__products';

export const state = () => ({
    products:[]
});

export const mutations = {
    SET_PRODUCTS: (state, products) => {
        state.products = products
        storage.set(productKey, products);
    }
}

export const actions = {
    async init(context) {
      try{
        let products = null;//await storage.get(productKey)
        if( !products) {
            products = raw
        }
        context.commit('SET_PRODUCTS', products)
      }catch(e){}
      /*  
      context.dispatch('getProducts',{ 
        _sort: 'created_at:desc',
        _start: 0,
        _limit: 12
      });
      */
    },
    async getProducts(context, params) {
      let response = await repository.getEntries({
        entry:ENTRY,
        data: params
      });
      context.commit('SET_PRODUCTS', response)
      return Promise.resolve(response);
    },

    async getProduct(context, params) {
      let response = await repository.getEntrie({
        entry:ENTRY,
        id: params.id
      });
      //context.commit('SET_PRODUCTS', response)
      return Promise.resolve(response);
    },

    async getProductCount(params) {
      let response = await repository.getEntryCount({
        entry: ENTRY,
        data: params
      });
      return Promise.resolve(response);
    },

    async createProduct(params) {
      let response = await repository.createEntry({
        entry: ENTRY,
        data: params
      });
      return Promise.resolve(response);
    },

    async updateProduct(params) {
      let response = await repository.updateEntry({
        entry: ENTRY,
        id: params.id,
        data: params
      });
      return Promise.resolve(response);
    },

    async deleteProduct(params) {
      let response = await repository.deleteEntry({
        entry: ENTRY,
        id: params.id
      });
      return Promise.resolve(response);
    }
}

export const getters = {
    getProducts: state => {
        return state.products;
    },
    getProductById: state => id => {
        return state.products.find(product => product.id == id);
    },
}