<template>
  <div class="section">
    <ProductDetail />
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
