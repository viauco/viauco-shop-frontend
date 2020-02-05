<template>
<div class="d--page">
    <VmModal />
    <VmHeader />
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

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>