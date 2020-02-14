import _ from 'lodash';
const faker = require('faker');

const host = 'https://cdn.jsdelivr.net/gh/viauco/viauco-static';
//const host = '';
let products = [];


for(let i = 0; i < 522; i++) {
  let images = [];
  let random = 1;
  let image = [ host, '/images/products/compress/1.jpg'].join('');
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
  let price = faker.commerce.price();
  let discount = (i%2 == 0) ? 0.2 : 1;
  let amount = price * discount;
  products.push({
    id: i+1,
    title: faker.commerce.productName(),
    sapo: faker.lorem.sentences(),
    description: faker.lorem.paragraphs(),
    cover: image,
    images: images,
    price: price,
    amount: amount,
    discount: discount,
    priceUnit: 'USD',
    priceUnitSign: '$',
    ratings: _.random(1, 10),
    reviews: _.random(1, 10),
    quantity: _.random(1, 10),
    sell: _.random(1, 10),
    phone: faker.phone.phoneNumber(),
    company:{
      id: 1,
      suffixes: faker.company.suffixes(),
      companyName: faker.company.companyName(),
      companySuffix: faker.company.companySuffix(),
      address: {
        country: faker.address.country(),
        state: faker.address.state(),
        city: faker.address.city(),
        street: faker.address.streetAddress(),
        zipCode: faker.address.zipCode(),
      }
    },
    attributes:{
      colors: [{
        id: 1,
        name:'Blue',
        value:'#abc'
      }, {
        id: 2,
        name:'Green',
        value:'#ff0000'
      }],
      sizes: [{
        id: 1,
        name:'Size m',
        value:'M'
      }, {
        id: 2,
        name:'Size X',
        value:'X'
      }, {
        id: 3,
        name:'Size XL',
        value:'XL'
      }],
      parameters:[{

      }]
    }
  });
}
export const raw =  products;