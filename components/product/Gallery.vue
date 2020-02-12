<template>
<div class="columns is-multiline">
    <gallery :images="images" :index="index" @close="index = null" />
    <div
      class="column is-one-quarter-desktop is-half-tablet"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
    >
        <div class="card">
            <div class="card-image">
                <el-image class="w-100 c---product-summary-image" fit="fill" :src="image" alt="" lazy/>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import VueGallery from 'vue-gallery';
export default {
    name: 'ProductGallery',
    props:{
        item:{
            type: Object,
            default: null
        }
    },
    components: {
      'gallery': VueGallery
    },
    computed:{
        elem() {
            return this.item
        },
        arrImage() {
            return this.elem && this.elem.images ? this.elem.images : []
        },
        images() {
            let arr = [];
            if( this.arrImage && this.arrImage.length > 0 ) {
                this.arrImage.forEach( (img) => {
                    arr.push(img.image);
                } );
            }

            return arr
        }
    },
    data() {
        return {
            index: null
        }
    }
}
</script>
