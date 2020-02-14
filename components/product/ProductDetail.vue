<template>
  <div v-if="product" class="mt-3">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="localePath({name:'index'})">Home</el-breadcrumb-item>
      <el-breadcrumb-item>Category</el-breadcrumb-item>
      <el-breadcrumb-item>Product detail</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="card-content mt-2">
      <div class="columns">
        <div class="column">
          <ProductGallery :item="product" />
        </div>
        <div class="column">

        </div>
      </div>
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
        <p>{{ description }}</p>
        <div class="is-pulled-left">
          <app-rating :rating="ratings" v-bind:disable="true" />
          <p>{{ $tc('NumberReviews',{ count: reviews}) }}</p>
        </div>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>{{priceUnitSign}}{{ price }}</strong></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
export default {
  name: 'ProductDetail',
  components: {
    AppRating: () => import('@/components/rating/index'),
    AppLove: () => import('@/components/icon/love/heart'),
    AppCart: () => import('@/components/icon/cart'),
    ProductGallery: () => import('@/components/product/Gallery'),
  },
  computed: {
    products () {
      return this.$store.state.product.products;
    },
    id() {
      return this.$route.params.id ? parseInt(this.$route.params.id) : 0;
    },
    product() {
      return this.products.find(product => product.id == this.id);
    },
    cover() {
      return this.product && this.product.cover ? this.product.cover : null
    },
    images() {
      return this.product && this.product.images ? this.product.images : []
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


