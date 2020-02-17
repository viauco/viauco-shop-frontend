<template>
<div class="d--page">
    <VmModal />
    <header class="site-header">
      <VmHeader class="main-navigation"/>
    </header>
    <main class="container-main">
        <nuxt/>
    </main>
    <VmFooter />
</div>
</template>

<script>

export default {
    name: 'AppLayout',
    components: {
        VmHeader: () => import('@/components/header/Header'),
        VmFooter: () => import('@/components/footer/Footer'),
        VmModal: () => import('@/components/modal/index'),
    }
}
</script>
