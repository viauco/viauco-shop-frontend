<template>
    <nuxt-link :to="localePath({ name: 'index' })">
        <svg class="app---logo" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <image href="@/static/logo.png" width="100%"/>
        </svg>
    </nuxt-link>
</template>
<script>
export default {
    name: 'AppLogo'
}
</script>