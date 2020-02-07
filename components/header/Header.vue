<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <AppLogo class="navbar-item"/>
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
          <app-icon file="zocial" id="si-zocial-facebook" />
        </a>
        <a href="#" target="_blank" class="icon" :title="$t('TwitterTooltip')">
          <app-icon file="zocial" id="si-zocial-twitter" />
        </a>
        <a href="#" target="_blank" class="icon" :title="$t('InstagramTooltip')">
          <app-icon file="zocial" id="si-zocial-instagram" />
        </a>
        <a href="#" target="_blank" class="icon" :title="$t('LinkedinTooltip')">
          <app-icon file="zocial" id="si-zocial-linkedin" />
        </a>
      </div>
      <div class="navbar-item shopping-cart" @click="onGloalEmit('OnDialogIndex', {index: 3})">
        <app-icon id="si-material-add-shopping-cart" file="material" />
        <span v-if="cartLength > 0" class="app--cart-number">{{ cartLength }}</span>
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
      VmMenu:() => import('@/components/menu/Menu'),
      VmSearch: () => import('@/components/search/Search'),
      AppLogo: () => import('@/components/icon/logo')
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
.app--cart-number{
  padding: 0.15rem;
  background: #e2e2e2;
  border-radius: 50%;
  font-size: 1rem;
  line-height: 1rem;
}
.shopping-cart {
  cursor: pointer;
}
a {
  color: grey;
}
</style>
