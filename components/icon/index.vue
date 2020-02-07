<template>
<svg class="app---icon">
    <use :xlink:href="_svgLink" />
</svg>
</template>
<script>
//see https://leungwensen.github.io/svg-icon
import * as svg from './sprite'
export default {
    name: 'AppIcon',
    props:{
        file:{
            type: String,
            require: true
        },
        id:{
            type: String,
            require: true
        }
    },
    computed:{
        _svg() {
            return svg;
        },
        _file() {
            return this.file
        },
        _id() {
            return this.id
        },
        _svgId() {
            return ['#', this._id].join('')
        },
        _svgLink() {
            return [this._svg[this._file], this._svgId].join('');
        }
    }
}
</script>
<style scoped>
.app---icon{
    height: 1rem;
    width: 1rem;
    fill:red;
}
</style>