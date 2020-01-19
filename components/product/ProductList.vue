<template>
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="product in products" :key="product.id">
      <VmProduct :product="product" />
    </div>
    <div class="section" v-if="products.length === 0">
      <p>{{ $t('NoProductLabel') }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductList',
  
  components: { 
    VmProduct: () => import('@/components/product/ProductSummary')
  },
  
  computed: {
    products () {
      return this.$store.state.product.products;
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
