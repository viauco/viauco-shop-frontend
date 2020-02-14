<template>
  <div>
    <VmHero />
    <div class="container mt-3 mb-1">
      <VmProductList/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
    VmProductList: () => import('@/components/product/ProductList'),
    VmHero: () =>  import('@/components/hero/Hero')
  }
};
</script>
