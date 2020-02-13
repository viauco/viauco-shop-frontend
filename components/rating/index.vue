<template>
    <star-rating v-bind:increment="0.5"
        v-bind:max-rating="5"
        inactive-color="#d2d2d2"
        active-color="rgba(255, 165, 0, 0.92)"
        :rating="rating"
        v-bind:star-size="size"
        :show-rating="false"
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