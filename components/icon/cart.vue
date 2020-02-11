<template>
    <app-icon @click.native="OnAction" file="ant" id="si-ant-shopping-cart" class="app---love" :class="{'app---love-active': isActive, 'app---love-inactive': !isActive}"/>
</template>
<script>
import _ from 'lodash'
export default {

    name: 'AppCart',

    props:{
        item:{
            type: Object,
            require: true
        }
    },
    computed: {
        arrCart() {
            return this.$store.state.cart.products
        },
        product() {
            return this.item ? this.item : null
        },
        pid() {
            return this.product && this.product.id ? this.product.id : 0
        },
        isActive() {
            let index = _.findIndex(this.arrCart, (p) => {
                return p && p.product && p.product.id && p.product.id == this.pid
            });
            return index >= 0 ? true : false;
        },
        actionMethod() {
            return this.isActive ? 'cart/removeFromCart' : 'cart/addToCart'
        },
        actionArgs() {
            return {
                product: this.product,
                quanlity: 1
            }
        }
    },
    methods:{
        OnAction() {
            this.$store.dispatch(this.actionMethod, this.actionArgs)
            .then( () => {

            })
            .catch( () => {

            })
            .finally( () => {

            });
        }
    }
}
</script>
<style>
.app---love-active.app---icon{
    fill: rgba(255, 165, 0, 0.92);
}
.app---love-inactive.app---icon{
    fill: #d2d2d2;
}
</style>