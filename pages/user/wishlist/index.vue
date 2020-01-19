<template>
  <div class="section">
    <h3 class="title">{{ $t('ProductWishList') }}</h3>
    <div class="columns is-centered is-multiline">
      <div class="card column is-one-quarter" v-for="product in productsInWishlist" :key="product.id">
        <VmProduct :product="product" />
      </div>
      <div class="section" v-if="productsInWishlist.length === 0">
        <p>{{ $t('WishListEmpty') }}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
	name: 'UserWishList',

	data () {
        return {
        
        }
  },

  components: { 
    VmProduct: () => import('@/components/product/ProductSummary')
  },

  computed: {
    productsAddedToFavourite() {
      return this.$store.getters.favourite.getFavourite;
    },
    productsInWishlist () {
      return this.productsAddedToFavourite;
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>


