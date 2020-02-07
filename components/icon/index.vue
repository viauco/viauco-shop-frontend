<template>
<svg class="app---icon" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
    <use :href="_svgLink" />
</svg>
</template>
<script>
//see https://leungwensen.github.io/svg-icon
import { svg  } from './sprite'
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
