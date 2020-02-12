<template>
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="product in searchProducts" :key="product.id">
      <VmProduct :product="product" />
    </div>
    <div class="section" v-if="searchProducts.length === 0">
      <p>{{ $t('NoProductLabel') }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductListSearch',
  
  components: { 
    VmProduct: () => import('@/components/product/ProductSummary')
  },
  
  computed: {
    products () {
      return this.$store.state.product.products;
    },
    q() {
      return this.$route.query.q
    },
    searchProducts() {
      let q = this.q;
      if( !q || q.length <= 0 ){ return this.products }
      return _.filter(this.products,(item) => {
        return item.title.indexOf(q)>-1;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
