<template>
  <div v-if="product" class="mt-3 app---product-detail">
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
          <p class="title is-4">{{ title }}</p>
          <div class="columns is-vcentered is-centered">
            <span class="column">
              <app-rating :rating="ratings" v-bind:disable="false" :size="32" :id="id"/> 
            </span>
            <span class="column">Price: <b>{{ priceUnitSign }}{{ price }}</b></span>
            <span class="column">Amount: <b>{{ priceUnitSign }}{{ amount }}</b></span>
            <span class="column">Discount: {{ discount*100 }}%</span>
          </div>
          <div class="columns is-vcentered is-centered">
            <span class="column">Likes: {{ likes }}</span>
            <span class="column">Ratings: {{ ratings }}</span>
            <span class="column">Reviews: {{ reviews }}</span>
            <span class="column">Sales: {{ sells }}</span>
          </div>
          
          <div class="columns mt-2 is-vcentered is-centered">
            <span class="column is-4">
              <el-input-number v-model="qnty" @change="handleChangeQnty" :min="1" :max="quantity" />
            </span>
            <span class="column">{{ quantity }} products</span>
          </div>
          <div class="columns is-vcentered is-centered">
            <el-button type="warning" plain class="column is-vcentered">
               Add to cart
            </el-button>
            <el-button type="danger" class="column is-vcentered">Buy now</el-button>
          </div>
          <div class="is-flex mt-2">
            <app-sharing />
            <app-love class="clickable"/>
          </div>
        </div>

      </div>
      <div class="content is-clearfix">
        <el-tabs v-model="activeTab" @tab-click="handleTabClick">
          <el-tab-pane label="Description" name="1" lazy>{{ description }}</el-tab-pane>
          <el-tab-pane label="Parameters" name="2" lazy>{{ description }}</el-tab-pane>
          <el-tab-pane label="Rating" name="3" lazy>{{ description }}</el-tab-pane>
          <el-tab-pane label="Reviews" name="4" lazy>
            <vue-disqus shortname="viauco" :language="currentLocale"/>
          </el-tab-pane>
          
        </el-tabs>
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
    AppSharing: () => import('@/components/sharing'),
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
    sells() {
      return this.product && this.product.sells ? this.product.sells : 0
    },
    likes() {
      return this.product && this.product.likes ? this.product.likes : 0
    },
    price() {
      return this.product && this.product.price ? this.product.price : 0
    },
    amount() {
      return this.product && this.product.amount ? this.product.amount : 0
    },
    discount() {
      return this.product && this.product.discount ? this.product.discount : 0
    },
    quantity() {
      return this.product && this.product.quantity ? this.product.quantity : 0
    },
    priceUnitSign() {
      return this.product && this.product.priceUnitSign ? this.product.priceUnitSign : ''
    }
  },
  methods:{
    handleChangeQnty() {

    },
    handleTabClick(tab, event) {
      
    }
  },
  data() {
    return {
      qnty: 1,
      activeTab: "1"
    }
  }
}
</script>
