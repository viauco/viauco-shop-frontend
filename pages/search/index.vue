<template>
  <div>
    <VmHero />
    <div class="container mt-1 mb-1">
      <VmProductList />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Search',
  components: {
    VmProductList: () => import('@/components/product/ProductListSearch'),
    VmHero: () =>  import('@/components/hero/Hero')
  }
};
</script>
