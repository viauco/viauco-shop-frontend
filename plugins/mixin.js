import Vue from 'vue';
import eventBus from '@/services/bus';

export default function () {
    Vue.mixin({
        
        methods: {
            onGloalEmit(eventName, data) {
                eventBus.$emit(eventName, data)
            }
        }
    })
}
