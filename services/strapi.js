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
const strapi = new Strapi(process.env.API_URL, storeConfig);

export default strapi;