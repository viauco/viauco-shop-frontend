import _ from 'lodash';
import Promise from 'bluebird';
import storage from '@/services/storage';

export const cartKey = '__card';

export const state = () => ({
    products:[]
});

export const mutations = {
    SET_CART: (state, products) => {
        state.products = products
        storage.set(cartKey, products);
    }
}

export const actions = {
    async init(context) {
        try{
            let products = await storage.get(cartKey);
            context.commit('SET_CART', products)
        }catch(e){}
    },
    async addToCart(context, {product, quanlity}) {
        let products = context.state.products;
        let index = _.findIndex(products,(p) => {
            return p.product.id == product.id
        });
        if( index >= 0 ) {
            products[index].quanlity += quanlity
        }
        else{
            products.push({product: product, quanlity: quanlity})
        }
        context.commit("SET_CART", products)
        return Promise.resolve(true);
    },
    async removeFromCart(context, product) {
        let products = context.state.products;
        let index = _.findIndex(products,(p) => {
            return p.product.id == product.id
        });
        if( index >= 0 ) {
            products.splice(index, 1)
        }
        context.commit("SET_CART", products)
        return Promise.resolve(true);
    },
    async clearCart(context) {
        context.commit("SET_CART", [])
        return Promise.resolve(true);
    },
}

export const getters = {
    getCart: state => {
        return state.products;
    },
}