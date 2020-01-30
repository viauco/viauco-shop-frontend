import _ from 'lodash';
import Promise from 'bluebird';
import storage from '@/services/storage';

export const farvouriteKey = process.env.STORAGE_FAVOURITE_KEY || '__farvourites';

export const state = () => ({
    products:[]
});

export const mutations = {
    SET_FAVOURITE: (state, products) => {
        state.products = products
        storage.set(farvouriteKey, products);
    }
}

export const actions = {
    async init(context) {
        try{
            let products = await storage.get(farvouriteKey);
            if( !products ){
                products = []
            }
            context.commit('SET_FAVOURITE', products)
        }catch(e){}
    },
    async addToFavourite(context, {product, quanlity}) {
        let products = _.cloneDeep(context.state.products);
        let index = _.findIndex(products,(p) => {
            return p.product.id == product.id
        });
        if( index >= 0 ) {
            products[index].quanlity += quanlity
        }
        else{
            products.push({product: product, quanlity: quanlity})
        }
        context.commit("SET_FAVOURITE", products)
        return Promise.resolve(true);
    },
    async removeFromFavourite(context, product) {
        let products = _.cloneDeep(context.state.products);
        let index = _.findIndex(products,(p) => {
            return p.product.id == product.id
        });
        if( index >= 0 ) {
            products.splice(index, 1)
        }
        context.commit("SET_FAVOURITE", products)
        return Promise.resolve(true);
    },
    async clearFavourite(context) {
        context.commit("SET_FAVOURITE", [])
        return Promise.resolve(true);
    },
}

export const getters = {
    getFavourite: state => {
        return state.products;
    },
}