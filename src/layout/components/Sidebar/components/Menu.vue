<template>
	<a-menu :default-selected-keys="[currentRoute]" mode="inline" :theme="sidebarStyle">
		<template v-for="menu in menuRoutes">
			<template v-if="!menu?.meta?.hidden">
				<a-menu-item v-if="!menu.children || menu?.children.length == 1" :key="menu.redirect || menu.path">
					<router-link :to="menu.path">
						<a-icon :type="menu?.meta?.icon || menu?.children?.[0]?.meta?.icon || 'home'" />
						<span>{{ menu?.meta?.title || menu?.children?.[0]?.meta?.title }}</span>
					</router-link>
				</a-menu-item>
				<menu-item v-else :menu-info="menu" :key="menu.path" :base-path="menu.path" />
			</template>
		</template>
	</a-menu>
</template>
<script>
import { constantRouterMap } from '@/router/router-config';
import MenuItem from './MenuItem.vue';
export default {
	components: { MenuItem },
	data() {
		return {
			menuRoutes: [],
		};
	},
	created() {
		this.menuRoutes = constantRouterMap;
	},
	computed: {
		sidebarStyle() {
			return this.$store.state.app.sidebarStyle;
		},
		currentRoute() {
			return window.location.pathname;
		},
	},
};
</script>
