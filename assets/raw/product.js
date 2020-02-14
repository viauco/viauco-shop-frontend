import _ from 'lodash';
const faker = require('faker');

const host = 'https://cdn.jsdelivr.net/gh/viauco/viauco-static';
//const host = '';
let products = [];


for(let i = 0; i < 522; i++) {
  let images = [];
  let random = _.random(1, 55);
  let image = [ host, '/images/products/compress/', random, '.jpg'].join('');
  for(let j = 0; j < 10; j++){
    random = _.random(1, 55);
    image = [host, '/images/products/compress/', random, '.jpg'].join('');
    images.push({
      id: j+1,
      image: image
    });
  };
  random = _.random(1, 55);
  image = [host, '/images/products/compress/', random, '.jpg'].join('');
  products.push({
    id: i+1,
    title: faker.commerce.productName(),
    sapo: faker.lorem.sentences(),
    description: faker.lorem.paragraphs(),
    cover: image,
    images: images,
    price: faker.commerce.price(),
    priceUnit: 'USD',
    priceUnitSign: '$',
    ratings: _.random(1, 10),
    reviews: _.random(1, 10),
    quantity: _.random(1, 10),
    attributes:{
      colors: [{
        id: 1,
        name:'Blue',
        value:'#abc'
      }],
      sizes: [{
        id: 1,
        name:'Size m',
        value:'M'
      }],
      parameters:[{

      }]
    }
  });
}
export const raw =  products;