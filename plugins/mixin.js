import Vue from 'vue';
import eventBus from '@/services/bus';
import AppIcon from '@/components/icon/index';
Vue.component('app-icon', AppIcon);

export default function () {
    Vue.mixin({
        computed:{
            currentLocale() {
                return this.$i18n.locale
            },
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            },
            token() {
                return this.$store.getters.getToken
            },
            user() {
                return this.$store.getters.getUser
            },
            userId() {
                return this.$store.getters.getUserId
            },
            userEmail() {
                return this.$store.getters.getUserEmail
            },
            userName() {
                return this.$store.getters.getUserName
            },
            userAvatar() {
                return this.$store.getters.getUserAvatar
            }
        },
        methods: {
            onGloalEmit(eventName, data) {
                eventBus.$emit(eventName, data)
            }
        }
    })
}
