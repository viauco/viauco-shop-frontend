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

<style>
.main-navigation {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #e1e1e1;
    z-index: 1000;
    box-shadow: 0 3px 4px 0 rgba(0,0,0,.28);
}
.site-header {
    z-index: 501;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    will-change: transform;
    transition: transform .3s linear;
}
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