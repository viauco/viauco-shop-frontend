<template>
  <div v-if="product">
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
        </div>
        <div>
          <button class="button is-small" :title="$t('RemoveFromFavouriteLabel')" v-show="isFavourite" @click="removeFromFavourite(product)">
            <span class="icon is-small">
              <i class="fa fa-heart"></i>
            </span>
          </button>
          <button class="button is-small" :title="$t('AddToFavouriteLabel')" v-show="!isFavourite" @click="saveToFavorite(product)">
            <span class="icon is-small">
              <i class="fa fa-heart-o"></i>
            </span>
          </button>
        </div>
      </div>
      <div class="content is-clearfix">
        <p>{{ description }}</p>
        <div class="is-pulled-left">
          <app-rating :rating="ratings" v-bind:diable="true" />
          <p>{{ $tc('NumberReviews',{ count: reviews}) }}</p>
        </div>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>&euro; {{ price }}</strong></span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <button class="button is-primary" v-if="!isAddedToCart" @click="addToCart(product)">{{ $t('AddToCartLabel') }}</button>
            <button class="button is-text" v-if="isAddedToCart" @click="removeFromCart(product)">{{ $t('RemoveFromCartLabel') }}</button>
          </div>
           <div class="select is-rounded is-small">
            <select @change="onSelectQuantity(product)" v-model="selected">
              <option v-for="quantity in quantityArray" :value="quantity" :key="`product-element-${quantity}`">{{ quantity }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link
      class="details"
      :to="{
        name: 'product-id',
        params: {
          id: product.id,
          title: product.title,
          price: product.price,
          rating: product.ratings,
          reviews: product.reviews,
          isAddedBtn: product.isAddedBtn
        }
      }"
    >
    </nuxt-link>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'ProductSummary',
  components: {
    AppRating: () => import('@/components/rating/index')
  },
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      selected: 1,
    }
  },

  mounted () {
    
    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
    }
  },

  computed: {
    quantityArray() {
      return Array(20).fill().map((x,i)=> i + 1)
    },
    cart() {
      return this.$store.state.cart.products
    },
    arrFavourite() {
      return this.$store.state.favourite.products
    },
    id() {
      return this.product && this.product.id ? this.product.id : 0
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
      this.$store.dispatch('card/addToCart', {product: product, quantity: this.selected});
    },
    removeFromCart (product) {
      this.$store.dispatch('card/removeFromCart', product);
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
        this.$store.dispatch('card/addToCard',{ product: product, quanlity: this.selected});
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


