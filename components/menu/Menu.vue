<template>
	<div>
		<div class="navbar-item">
			<div class="field is-grouped">
				<p class="control">
					<a v-if="!isLoggedIn" class="button" @click="onGloalEmit('OnDialogIndex', {index: 2} )">
						<span class="icon">
							<i class="fa fa-user-plus"></i>
						</span>
						<span>{{ $t('SignUpTitle') }}</span>
					</a>
				</p>
				<p class="control">
					<a v-if="!isLoggedIn" class="button" @click="onGloalEmit('OnDialogIndex', {index: 1} )">
						<span class="icon">
							<i class="fa fa-user"></i>
						</span>
						<span>{{ $t('Login') }}</span>
					</a>
				</p>
			</div>
		</div>
		<div v-if="isLoggedIn" class="navbar-item has-dropdown is-hoverable">
			<a class="navbar-link">{{ $t('Welcome', { name: userName}) }}</a>
			<div class="navbar-dropdown is-boxed">
				<nuxt-link class="navbar-item" :to="{ name: 'user-wishlist' }">
					{{ $t('WishList') }}
				</nuxt-link>
				<hr class="navbar-divider">
				<a class="navbar-item" @click="logout">
					{{ $t('btnLogout') }}
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VmMenu',
	
	methods: {
		logout () {
			this.$store.dispatch('logout')
			.then( (res) => {
				this.$router.push({ name: 'index' });
			} );
		},
	}
}
</script>

