<template>
<div class="app---gallery is-multiline">
    <gallery :images="images" :index="index" @close="index = null" />
    <el-carousel :interval="5000" arrow="never" indicator-position="outside">
        <el-carousel-item v-for="(image, imageIndex) in images" :key="imageIndex">
        
            <div class="card clickable" @click="index = imageIndex">
                <div class="card-image">
                    <el-image class="w-100" fit="cover" :src="image" alt="" lazy/>
                </div>
            </div>
        </el-carousel-item>
    </el-carousel>
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
