<template>
<div class="modal-card">
	<header class="modal-card-head">
		<p class="modal-card-title">{{ $t('CheckoutTitle') }}</p>
		<button class="delete" aria-label="close" @click="onGloalEmit('OnDialogIndex', {index: 0})"></button>
	</header>
	<section class="modal-card-body">
		<div v-if="!isCheckoutSection" class="list">
			<div class="list-item" v-for="product in products" :key="product.id">
				<button class="is-pulled-right button is-info is-inverted" @click="removeFromCart(product)">{{ $t('RemoveOutCart') }}</button>
				<p>{{ product.title }}  {{ product.quantity > 0 ?  ` - Quantity: ${product.quantity}` : ''}}</p>
				<p>{{ product.price }} &euro;</p>
			</div>
			<div class="list-item" v-if="products.length === 0">
				<p>{{ $t('CartEmptyLabel') }}</p>
			</div>
		</div>
	</section>
	<footer class="modal-card-foot flex-end">
		<button v-show="products.length > 0" class="button is-success" :class="{'is-loading': loading}" @click="onNextBtn">{{ $t('btnBuy') }}</button>
	</footer>
</div>
</template>

<script>
import bus from '@/services/bus'
export default {
	name: 'checkout',
    
	data () {
		return {
			loading: false
		}
	},

	computed: {
		products () {
			return this.$store.getters.cart.getCart;
		}
	},

	methods: {
		removeFromCart (product) {
			this.$store.dispatch('cart/removeFromCart', product);
		},
		onNextBtn () {
			if (!this.isLoggedIn) {
				this.onGloalEmit('OnDialogIndex', {index: 1});
			}
			
			this.onGloalEmit('OnDialogIndex', {index: 0});
		},
	}
}
</script>

