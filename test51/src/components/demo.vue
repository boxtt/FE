
<template>
	<div v-bind:class="classObject" v-show="show">
		hello,Vue!
	</div>
</template>

<script>
export default {
	props: {
		show: {
			default: true,
			twoWay: true
		},
		isFixed: {
			default: false
		}
	},
	computed: {
		classObject: function() {
			return {
				'test':true,
				'loading': true,
				'loading-fixed': this.isFixed
			}
		}
	}
}

</script>
<style>
</style>
