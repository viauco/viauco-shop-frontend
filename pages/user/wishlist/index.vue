<template>
  <div class="section">
    <h3 class="title">{{ $t('ProductWishList') }}</h3>
    <div class="columns is-centered is-multiline">
      <div class="card column is-one-quarter" v-for="product in productsInWishlist" :key="product.id">
        <VmProductsList :product="product"></VmProductsList>
      </div>
      <div class="section" v-if="productsInWishlist.length === 0">
        <p>{{ $t('WishListEmpty') }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import VmProductsList from '@/components/Products';
import { getByTitle } from '@/assets/js/filters';

export default {
	name: 'user-wishlist',

	data () {
        return {
        
        }
  },

  components: { VmProductsList },

  computed: {
    hasSerached(){
      return this.$store.state.userInfo.hasSearched;
    },
    productsAddedToFavourite() {
      return this.$store.getters.productsAddedToFavourite;
    },
    productsInWishlist () {
      return this.hasSerached ? this.getProductByTitle() : this.productsAddedToFavourite;
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.getters.productsAddedToFavourite,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>


