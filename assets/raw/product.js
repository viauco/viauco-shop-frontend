import _ from 'lodash';

let products = [];


for(let i = 0; i < 122; i++) {
  let images = [];
  let random = _.random(1, 55);
  let image = ['/products/compress/', random, '.jpg'].join('');
  for(let j = 0; j < 10; j++){
    random = _.random(1, 55);
    image = ['/products/compress/', random, '.jpg'].join('');
    images.push({
      id: j+1,
      image: image
    });
  };
  random = _.random(1, 55);
  image = ['/products/compress/', random, '.jpg'].join('');
  products.push({
    id: i+1,
    title: ['Product',' ' ,i  + 1].join(''),
    sapo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    cover: image,
    images: images,
    price: 50 + _.random(1, 100),
    priceUnit: 'USD',
    priceUnitSign: '$',
    ratings: _.random(1, 10),
    reviews: _.random(1, 10),
    quantity: _.random(1, 10),
  });
}
export const raw =  products;