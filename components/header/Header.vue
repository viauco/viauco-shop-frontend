<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <nuxt-link :to="localePath({ name: 'index' })" class="navbar-item">
      <h1 class="title is-3 is-flex-mobile"></h1>
    </nuxt-link>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMainMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" id="navbarMainMenu">
    <div class="navbar-start">
      <div class="navbar-item field">
        <VmSearch></VmSearch>
      </div>
    </div>
    
    <div class="navbar-end">
      <div class="navbar-item social">
        <a href="#" target="_blank" class="icon" :title="$t('FacebookTooltip')">
          <i class="fa fa-facebook"></i>
        </a>
        <a href="#" target="_blank" class="icon" :title="$t('TwitterTooltip')">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#" target="_blank" class="icon" :title="$t('InstagramTooltip')">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="#" target="_blank" class="icon" :title="$t('LinkedinTooltip')">
          <i class="fa fa-linkedin"></i>
        </a>
      </div>
      <div class="navbar-item shopping-cart" @click="onGloalEmit('OnDialogIndex', {index: 3})">
        <span class="icon">
          <i class="fa fa-shopping-cart"></i>
        </span>
        <span :class="[cartLength > 0 ? 'tag is-info' : '']">{{ cartLength }}</span>
         <AppIcon file="ant" id="si-ant-aliwangwang" />
      </div>
      <VmMenu class="navbar-item is-hidden-mobile"></VmMenu>
    </div>
  </div>
</nav>
</template>

<script>
  
  export default {
    name: 'VmHeader',

    data () {
      return {
        isMenuOpen: false
      }
    },

    components: {
      VmSearch:() => import('@/components/menu/Menu'),
      VmMenu: () => import('@/components/search/Search'),
      AppIcon: () => import('@/components/icon')
    },

    computed: {
      cart(){
        return this.$store.state.cart.products
      },
      cartLength () {
        return this.cart ? this.cart.length : 0;
      }
    },

    methods: {
      
    }
  };
</script>

<style lang="scss" scoped>
  .title {
    background: url('../../static/logo.png') no-repeat;
    background-position: 50% 50%;
    background-size: 60px;
    width: 130px;
    height: 35px;
  }
  .shopping-cart {
    cursor: pointer;
  }
  a {
    color: grey;
  }
</style>
