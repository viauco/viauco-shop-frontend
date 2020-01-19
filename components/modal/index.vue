<template>
	<div class="modal" :class="{'is-active' : activeIndex > 0}">
		<div class="modal-background" @click="activeIndex = 0"></div>
		<VmLogin v-if="activeIndex == 1" />
        <VmRegistration v-if="activeIndex == 2" />
        <VmCheckout v-if="activeIndex == 3" />
	</div>
</template>

<script>
import bus from '@/services/bus'
export default {
	name: 'AppModal',
    components:{
        VmLogin:() => import('@/components/auth/Login'),
        VmRegistration: () => import('@/components/auth/Registration'),
        VmCheckout:() => import('@/components/checkout/index')

    },
	data () {
		return {
			activeIndex: 0
		}
	},

	created() {
        bus.$on('OnDialogIndex', (e) => {
            this.activeIndex = e.index || 0
        })
    }
}
</script>

