<template>
<div id="app">
  <router-link to="/">首页</router-link>
	<router-link to="/Home">首页1</router-link>
	<router-link to="/Mine">我的</router-link>
	<!-- <div>vvvv</div> -->
  <router-view></router-view>

 
 </div>

</template>
 
<style>
</style>
<script>
import home from '@/views/home/home'
 
export default {
	name:'app',
	components:{
		 
	}
}
</script>
