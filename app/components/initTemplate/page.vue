<!--引入脚本文件-->
<script src="./page.js"></script>

<!--引入样式文件-->
<style lang="less" rel="stylesheet/less" scoped>
	@import "./page.less"; 
</style>

<!--模本文件-->
<template>
	<div class="message">
		我是message
		<div class="text">{{ msg }}</div>
		<div class="color-test">我是test</div>
	</div>
</template>