<template>
	<div>
		<div class="navbar-item-child" v-if="!isLoggedIn">
			<div class="field is-grouped">
				<app-icon class="app---cursor" @click.native="onGloalEmit('OnDialogIndex', {index: 2} )" id="si-icomoon-user-plus" file="icomoon" />
				<app-icon class="app---cursor" @click.native="onGloalEmit('OnDialogIndex', {index: 1} )" id="si-icomoon-user" file="icomoon" />
			</div>
		</div>
		<div v-if="isLoggedIn" class="navbar-item has-dropdown is-hoverable">
			<a class="navbar-link">{{ $t('Welcome', { name: userName}) }}</a>
			<div class="navbar-dropdown is-boxed">
				<nuxt-link class="navbar-item app---cursor" :to="{ name: 'user-wishlist' }">
					<AppIcon file="ant" id="si-ant-heart" />
				</nuxt-link>
				<hr class="navbar-divider">
				<a class="navbar-item" @click="logout">
					<span class="icon">
						<i class="fas fa-sign-out-alt"></i>
					</span>
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

