<template>
    <app-icon @click.native="OnAction" file="ant" id="si-ant-heart-o"  class="app---love" :class="{'app---love-active': isActive, 'app---love-inactive': !isActive}"/>
</template>
<script>
export default {

    name: 'AppLove',

    props:{
        id:{
            type: Number,
            require: true
        }
    },
    computed: {
        arrFavourite() {
            return this.$store.state.favourite.products
        },
    
        isActive() {
            return this.arrFavourite.indexOf( this.id ) >= 0 ? true : false
        },
        actionMethod() {
            return this.isActive ? 'favourite/removeFromFavourite' : 'favourite/addToFavourite'
        }
    },
    methods:{
        OnAction() {
            this.$store.dispatch(this.actionMethod, this.id)
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