<template>
<div v-if="product" class="c---product-summary">
  
  <div class="card-image c---product-summary-card-image-overlay">
    <el-image class="w-100 c---product-summary-image" fit="cover" :src="cover" :alt="title" lazy/>
    <div class="c---product-summary-overlay">
      <div class="columns">
        <div class="column">
          <p class="">
            <app-love :id="id" class="clickable"/>
            <app-cart :item="product" class="clickable"/>
          </p>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <app-sharing />
        </div>
      </div>
    </div>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <nuxt-link class="details" :to="localePath({name: 'product-id',params: {id: id}})">
          <p class="title is-4 line-1" :title="title">{{ title }}</p>
        </nuxt-link>
      </div>
    </div>
    <div class="content is-clearfix">
      <p class="line-3" :title="sapo">{{ sapo }}</p>
      <div class="columns pt-0 pb-0">
        <div class="column is-pulled-left">
          <app-rating :size="20" :rating="ratings" v-bind:disable="true" />
        </div>
        <div class="column">
          <p class="is-pulled-right">
            <span class="title is-5"><strong>{{ priceUnitSign }}{{ price }}</strong></span>
            <app-cart :item="product" class="clickable"/>
          </p>
        </div>
      </div>
    </div>
  </div>
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
    AppSharing: () => import('@/components/sharing'),
  },
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  
  computed: {
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
  }
}
</script>



