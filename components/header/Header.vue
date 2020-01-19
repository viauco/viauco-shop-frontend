<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <nuxt-link :to="{ name: 'index' }" class="navbar-item">
          <h1 class="title is-3 is-flex-mobile"></h1>
        </nuxt-link>

        <a role="button" class="navbar-burger burger" @click="isMenuOpen = !isMenuOpen" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu is-active">
        <div class="navbar-start">
          <div class="navbar-item field">
            <VmSearch></VmSearch>
          </div>
        </div>
        
        <div class="navbar-end">
          <div class="navbar-item social">
            <a href="#" class="icon" :title="$t('FacebookTooltip')">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#" class="icon" :title="$t('TwitterTooltip')">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#" class="icon" :title="$t('InstagramTooltip')">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#" class="icon" :title="$t('LinkedinTooltip')">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
          <div class="navbar-item shopping-cart" @click="onGloalEmit('OnDialogIndex', {index: 3})">
            <span class="icon">
              <i class="fa fa-shopping-cart"></i>
            </span>
            <span :class="[cartLength > 0 ? 'tag is-info' : '']">{{ cartLength }}</span>
          </div>
        </div>
      </div>

      <!-- For mobile and tablet -->
      <div v-show="isMenuOpen" class="navbar-end">
        <VmMenu></VmMenu>
      </div>

      <!-- For desktop -->
      <div class="navbar-end is-hidden-mobile">
        <VmMenu></VmMenu>
      </div>
    </nav>
  </div>
</template>

<script>
  import VmMenu from '@/components/menu/Menu';
  import VmSearch from '@/components/search/Search';

  export default {
    name: 'VmHeader',

    data () {
      return {
        isMenuOpen: false
      }
    },

    components: {
      VmSearch,
      VmMenu
    },

    computed: {
      cart(){
        return this.$store.state.cart.productions
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
