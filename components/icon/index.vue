<template>
    <span v-if="_isValid" class="app---icon" v-html="_svg" :style="{'color': _color, 'width': _size, 'height': _size}" ></span>
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
        id:{
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
        _id() {
            return this.id
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
        _isValid() {
            return this._path && this._id
        },
        _name() {
            return this._path + '/' + this._id + '.svg'
        },
        _svg() {

            return this._isValid ? require(`~/assets/icon/${this._name}`) : null;
        }
    }
}
</script>