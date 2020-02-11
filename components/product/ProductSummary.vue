<template>
  <div v-if="product">
    <div class="card-image">
      <figure class="image">
        <el-image :src="cover" :alt="title" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ title }}</p>
        </div>
        <div>
          <button class="button is-small app---border-radius-circle-important">
            <span class="icon is-small">
              <app-love :id="id"/>
            </span>
          </button>
          <button class="button is-small app---border-radius-circle-important">
            <span class="icon is-small">
              <app-cart :item="product" />
            </span>
          </button>
        </div>
      </div>
      <div class="content is-clearfix">
        <p>{{ sapo }}</p>
        <div class="is-pulled-left">
          <app-rating :rating="ratings" v-bind:disable="true" />
        </div>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>{{ priceUnitSign }}{{ price }}</strong></span>
        </p>
      </div>
    </div>
    <nuxt-link class="details" :to="localePath({name: 'product-id',params: {id: id}})"></nuxt-link>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'ProductSummary',
  components: {
    AppRating: () => import('@/components/rating/index'),
    AppLove: () => import('@/components/icon/love/heart'),
    AppCart: () => import('@/components/icon/cart'),
  },
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      quanlity: 1,
    }
  },

  mounted () {
    
    if (this.$props.product.quantity > 1) {
      this.quanlity = this.$props.product.quantity;
    }
  },

  computed: {
    quantityArray() {
      return Array(20).fill().map((x,i)=> i + 1)
    },
    cart() {
      return this.$store.state.cart.products
    },
    id() {
      return this.product && this.product.id ? this.product.id : 0
    },
    cover() {
      return this.product && this.product.cover ? this.product.cover : null
    },
    images() {
      return this.product && this.product.images ? this.product.images : []
    },
    sapo() {
      return this.product && this.product.sapo ? this.product.sapo : ''
    },
    isAddedToCart() {
      let index = _.findIndex(this.cart, (p) => {
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
    },
    priceUnitSign() {
      return this.product && this.product.priceUnitSign ? this.product.priceUnitSign : ''
    }
  },

  methods: {
    addToCart (product) {
      console.log('add to card')
      this.$store.dispatch('cart/addToCart', {product: product, quantity: this.quanlity});
    },
    removeFromCart (product) {
      this.$store.dispatch('cart/removeFromCart', product);
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


