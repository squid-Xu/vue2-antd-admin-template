<template>
	<div class="navbar-container">
		<div class="navbar-left">
			<Hamburger />
		</div>
		<div class="navbar-right">
			<Settings />
		</div>
	</div>
</template>
<script>
import Hamburger from './components/Hamburger.vue';
import Settings from '../Settings/index.vue';
export default {
	components: { Hamburger, Settings },
	data() {
		return {};
	},
};
</script>
<style lang="less" scoped>
.navbar-container {
	display: flex;
	.navbar-left {
		flex: 1;
	}
	.navbar-right {
		display: flex;
	}
}
</style>
