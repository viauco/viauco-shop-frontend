<template>
    <star-rating v-bind:increment="0.5"
        v-bind:max-rating="5"
        inactive-color="#000"
        active-color="#637cc6"
        :rating="rating"
        v-bind:star-size="size"
        :read-only="disable">
    </star-rating>
</template>
<script>
import StarRating from 'vue-star-rating';
export default {
    name: 'AppRating',
    props:{
        rating:{
            type: Number,
            default: 0
        },
        size:{
            type: Number,
            default: 28
        },
        disable:{
            type: Boolean,
            default: true
        }
    },
    components: {
        StarRating
    },
}
</script>