<template>
	<div class="empty-container">
		<Icon type="empty" />
		<span class="text-container">{{ text }}</span>
	</div>
</template>

<script>
	import Icon from "../Icon";
	export default {
		components: {
			Icon,
		},
		props: {
			text: {
				type: String,
				default: "无数据",
			},
		},
	};
</script>

<style lang="less" scoped>
	.empty-container {
		width: 150px;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		user-select: none;

		.iconfont {
			color: rgba(0, 0, 0, 0.5);
			font-size: 90px;
			margin: 10px;
		}

		.text-container {
			font-size: 16px;
			margin: 10px 0;
			font-weight: bold;
			color: rgba(0, 0, 0, 0.5);
		}

		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>