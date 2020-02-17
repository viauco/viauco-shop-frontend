<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <AppLogo class="navbar-item"/>
    <a role="button" class="navbar-burger" @click="OnToggleMenu" aria-label="menu" aria-expanded="false" data-target="navbarMainMenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" :class="{'is-active': OnToggleMenu}" id="navbarMainMenu">
    <div class="navbar-end">
      <VmSearch class="navbar-item is-hidden-mobile" />
      <div class="navbar-item shopping-cart" @click="onGloalEmit('OnDialogIndex', {index: 3})">
        <app-icon id="si-ant-shopping-cart" file="ant" />
        <span v-if="cartLength > 0" class="app--cart-number">{{ cartLength }}</span>
      </div>
      <VmMenu class="navbar-item is-hidden-mobile" />
    </div>
  </div>
</nav>
</template>

<script>
  
  export default {
    name: 'VmHeader',

    data () {
      return {
        OnToggleMenu: false
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
      OnToggleMenu() {
        this.OnToggleMenu = !this.isToggleMenu
      }
    }
  };
</script>

<style lang="scss" scoped>
.navbar-item{
  padding: 0 0.75rem;
}
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
