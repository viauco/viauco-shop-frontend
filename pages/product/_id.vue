<template>
  <div class="section">
    <div class="container">
      <ProductDetail />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetailPage',
  components: {
    ProductDetail: () => import('@/components/product/ProductDetail')
  }
};
</script>
