<template>
<div>
	<p class="control has-icons-left">
		<input
			class="input is-rounded"
			type="text"
			v-model="value"
			:placeholder="placeholder"
			@keyup="search(value)"
		>
		<span class="icon is-small is-left">
			<app-icon file="ant" id="si-ant-search" />
		</span>
	</p>
</div>
</template>

<script>
export default {
  name: 'search',
	data () {
		return {
			value: ''
		}
	},

	computed: {
		placeholder () {
			return 'Search...';
		},
		q() {
			let query = this.$route.query.q;
			this.value = query;
      		return query
    	},
	},

	methods: {
		search (value) {
			this.$router.push(this.localePath({ name: 'index', query:{ q: value} } ) )
		}
	}
}
</script>

