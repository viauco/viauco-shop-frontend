<template>
    <span v-if="_isValid" class="app---icon" v-html="_svg" :style="{'color': _color, 'width': _width, 'height': _height}"></span>
</template>
<script>
//see https://leungwensen.github.io/svg-icon
export default {
    name: 'AppIcon',
    props:{
        path:{
            type: String,
            require: true
        },
        file:{
            type: String,
            require: true
        },
        color:{
            type: String,
            default: '#e2e2e2',
        },
        width:{
            type: String,
            default: '1rem',
        },
        height:{
            type: String,
            default: '1rem',
        }
    },
    computed:{
        _path() {
            return this.path
        },
        _file() {
            return this.file
        },
        _color() {
            return this.color
        },
        _width() {
            return this.width
        },
        _height() {
            return this.height
        },
        _url() {
            return ['~/assets/icons/', this._path, '/', this._file, '.svg'].join('')
        },
        _svg() {
            return require(`${this._url}`);
        },
         _isValid() {
            return this._path && this._file
        },
    }
}
</script>