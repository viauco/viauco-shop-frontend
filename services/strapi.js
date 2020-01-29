import Strapi from 'strapi-sdk-javascript';
const storeConfig = {
    /*cookie: {
        key: process.env.AUTH_KEY || 'jwt',
        options: {
          path: '/'
        }
    },*/
    localStorage: {
        key: process.env.AUTH_KEY || 'jwt'
    },
}
let apiUrl = process.env.API_URL || '';
const strapi = new Strapi(apiUrl, storeConfig);

export default strapi;