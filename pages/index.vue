<template>
  <div>
    <VmHero />
    <VmProductList />
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
