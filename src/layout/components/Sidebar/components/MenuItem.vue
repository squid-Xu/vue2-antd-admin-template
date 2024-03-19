<template functional>
	<a-sub-menu :key="props.menuInfo.path">
		<span slot="title">
			<a-icon v-if="props.menuInfo?.meta?.icon" :type="props.menuInfo?.meta?.icon" />
			<span>{{ props.menuInfo?.meta?.title }}</span>
		</span>
		<template v-for="sub in props.menuInfo.children">
			<a-menu-item v-if="!sub.children" :key="`${props.basePath}/${sub.path}`">
				<router-link :to="`${props.basePath}/${sub.path}`">
					<a-icon v-if="sub?.meta?.icon" :type="sub?.meta?.icon" />
					<span>{{ sub?.meta?.title }}</span>
				</router-link>
			</a-menu-item>
			<menu-item v-else :menu-info="sub" :key="sub.path" :base-path="`${props.menuInfo.path}/${sub.path}`" />
		</template>
	</a-sub-menu>
</template>
