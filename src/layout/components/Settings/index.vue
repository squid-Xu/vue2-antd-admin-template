<template>
	<div>
		<a-icon class="trigger" @click="visible = true" type="more" />
		<a-drawer title="布局设置" :visible="visible" :destroyOnClose="true" :width="280" @close="visible = false">
			<div class="settings-container">
				<a-space direction="vertical" align="start">
					<a-space>
						<a-tooltip key="dark" effect="dark" title="暗色侧边栏" placement="top">
							<div
								class="settings-box-item item-left-dark"
								:class="sidebarStyle === 'dark' ? 'active' : ''"
								@click="handleSidebarTheme('dark')"
							></div>
						</a-tooltip>
						<a-tooltip key="light" effect="dark" title="亮色侧边栏" placement="top">
							<div
								class="settings-box-item item-left-light"
								:class="sidebarStyle === 'light' ? 'active' : ''"
								@click="handleSidebarTheme('light')"
							></div>
						</a-tooltip>
					</a-space>
				</a-space>
			</div>
		</a-drawer>
	</div>
</template>
<script>
export default {
	data() {
		return {
			visible: false,
		};
	},
	computed: {
		sidebarStyle() {
			return this.$store.state.app.sidebarStyle;
		},
	},
	methods: {
		handleSidebarTheme(style) {
			this.$store.dispatch('app/toggleTheme', {
				type: 'sidebarStyle',
				value: style,
			});
		},
	},
};
</script>

<style lang="less" scoped>
.trigger {
	font-size: 18px;
	line-height: 64px;
	cursor: pointer;
	padding: 0 12px;
	transform: color 0.3s;
	&:hover {
		color: #1890ff;
	}
}

.settings-container {
	padding: 15px 0;
	color: #444444;

	.settings-box-item {
		position: relative;
		width: 50px;
		height: 35px;
		margin: 0 20px 20px 0;
		background-color: rgb(240 242 245);
		border-radius: 3px;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
		cursor: pointer;

		&.active {
			&::after {
				content: '';
				width: 6px;
				height: 6px;
				border-radius: 50%;
				background-color: var(--primary-color);
				position: absolute;
				left: 50%;
				bottom: -15px;
			}
		}
	}

	.item-left-light {
		&::before {
			position: absolute;
			top: 0;
			left: 0;
			width: 33%;
			height: 100%;
			background-color: #fff;
			content: '';
			border-top-left-radius: 3px;
			border-bottom-left-radius: 3px;
		}
	}

	.item-left-dark {
		&::before {
			position: absolute;
			top: 0;
			left: 0;
			width: 33%;
			height: 100%;
			background-color: #000;
			content: '';
			border-top-left-radius: 3px;
			border-bottom-left-radius: 3px;
		}
	}
}
</style>
