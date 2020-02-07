<template>
  <div v-if="product">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://loremflickr.com/1280/960" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
        </div>
        <div>
          <button class="button is-small" :title="$t('RemoveFromFavouriteLabel')" v-show="isFavourite >= 0" @click="removeFromFavourite(product)">
            <span class="icon is-small">
              <i class="fa fa-heart"></i>
            </span>
          </button>
          <button class="button is-small" :title="$t('AddToFavouriteLabel')" v-show="isFavourite < 0" @click="saveToFavorite(product)">
            <span class="icon is-small">
              <i class="fa fa-heart-o"></i>
            </span>
          </button>
        </div>
      </div>
      <div class="content is-clearfix">
        <p>{{ description }}</p>
        <div class="is-pulled-left">
          <app-rating :rating="ratings" v-bind:disable="true" />
          <p>{{ $tc('NumberReviews',{ count: reviews}) }}</p>
        </div>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>&euro; {{ price }}</strong></span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <button class="button is-primary" v-if="isAddedToCart < 0" @click="addToCart(product)">{{ $t('AddToCartLabel') }}</button>
            <button class="button is-text" v-if="isAddedToCart >= 0" @click="removeFromCart(product)">{{ $t('RemoveFromCartLabel') }}</button>
          </div>
           <div class="select is-rounded is-small">
            <select @change="onSelectQuantity(product)" v-model="quanlity">
              <option v-for="quantity in quantityArray" :value="quantity" :key="`product-element-${quantity}`">{{ quantity }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'ProductDetail',
  components: {
    AppRating: () => import('@/components/rating/index')
  },
  data () {
    return {
      quanlity: 1,
    }
  },

  mounted () {
    
    if (this.product && this.product.quantity) {
      this.quanlity = this.product.quantity;
    }
  },

  computed: {
    products () {
      return this.$store.state.product.products;
    },
    id() {
      return this.$route.params.id;
    },
    product() {
      return this.products.find(product => product.id == this.id);
    },
    quantityArray() {
      return Array(20).fill().map((x,i)=> i + 1)
    },
    cart() {
      return this.$store.state.cart.products
    },
    arrFavourite() {
      return this.$store.state.favourite.products
    },
    
    isAddedToCart() {
      let index = _.findIndex(this.cart, (p) => {
        return p.product.id == this.id
      });
      return index;
    },
    isFavourite() {
      let index = _.findIndex(this.arrFavourite, (p) => {
        return p.product.id == this.id
      });
      return index;
    },
    title() {
      return this.product && this.product.title ? this.product.title : ''
    },
    description() {
      return this.product && this.product.description ? this.product.description : ''
    },
    ratings() {
      return this.product && this.product.ratings ? this.product.ratings : 0
    },
    reviews() {
      return this.product && this.product.reviews ? this.product.reviews : 0
    },
    price() {
      return this.product && this.product.price ? this.product.price : 0
    }
  },

  methods: {
    addToCart (product) {
      this.$store.dispatch('cart/addToCart', {product: product, quantity: this.quanlity});
    },
    removeFromCart (product) {
      this.$store.dispatch('cart/removeFromCart', product);
    },
    saveToFavorite (product) {
      if( ! this.isLoggedIn ) {
        this.onGloalEmit('OnDialogIndex', { index: 1})
        return;
      }

      this.$store.dispatch('favourite/addToFavourite', product);
    },
    removeFromFavourite (product) {
      this.$store.dispatch('favourite/removeFromFavourite', product);
    },
    onSelectQuantity (product) {
      if( this.isAddedToCart ) {
        this.$store.dispatch('card/addToCard',{ product: product, quanlity: this.quanlity});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 .details {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
      border: 1px solid #51bafc;
    }
 }
 .button,
 .select {
   z-index: 2;
 }
 .select {
   position: absolute;
   right: 15px;
   bottom: 35px;
 }
 .card-content {
   padding: 0;
 }
 .buttons {
   margin: 0;
 }
</style>


