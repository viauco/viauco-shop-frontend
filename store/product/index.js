import _ from 'lodash';
import Promise from 'bluebird';
import storage from '@/services/storage';

export const productKey = '__products';
const raw =  [
    {
      id: 1,
      title: 'Product 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      ratings: 3,
      reviews: 5,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      ratings: 5,
      reviews: 10,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      ratings: 2,
      reviews: 3,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 4,
      title: 'Product 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      ratings: 1,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 5,
      title: 'Product 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 6,
      title: 'Product 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      ratings: 5,
      reviews: 1,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 7,
      title: 'Product 7',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 50,
      ratings: 5,
      reviews: 7,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 8,
      title: 'Product 8',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 35,
      ratings: 3,
      reviews: 0,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    },
    {
      id: 9,
      title: 'Product 9',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      price: 110,
      ratings: 4,
      reviews: 2,
      isAddedToCart: false,
      isAddedBtn: false,
      isFavourite: false,
      quantity: 1
    }
  ];
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
            let products = await storage.get(productKey)
            if( !products){
                products = raw
            }
            context.commit('SET_PRODUCTS', products)
        }catch(e){}
    },
}

export const getters = {
    getProducts: state => {
        return state.products;
    },
    getProductById: state => id => {
        return state.products.find(product => product.id == id);
    },
}