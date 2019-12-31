<template>
    <div>
        <app-header></app-header>
        <app-notifications></app-notifications>
        <div class="container">
            <div class="row text-center" v-if="isAppLoading">
                <grid-loader :loading="isAppLoading" :color="loaderColor" :size="loaderSize"></grid-loader>
            </div>
            <transition name="fade">
                <nuxt />
            </transition>
            <darken-background v-if="shouldShowCartDialog" @click.native="togglePopupCart()"/>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    components: {
        appNotifications: () => import("@/components/shared/Notifications"),
        appHeader: () => import("@/components/shared/Header"),
        appFooter: () => import("@/components/shared/Footer"),
        popupCart: () => import('@/components/cart/PopupCart'),
        darkenBackground: () => import('@/components/shared/DarkenBackground'),
        gridLoader: () => import('vue-spinner/src/GridLoader.vue'),
    },

    data() {
        return {
            loaderColor: "#5cb85c",
            loaderSize: "50px",
            displayList: false
        }
    },

    methods: {
        ...mapActions('notifications', [
            'togglePopupCart',
        ]),
        hasProduct() {
            return this.getProductsInCart.length > 0;
        },
    },
    computed: {
        ...mapGetters('cart', [
            'getProductsInCart',
        ]),
        ...mapGetters('notifications', [
            'shouldShowCartDialog',
            'isAppLoading'
        ])
    },
};
</script>