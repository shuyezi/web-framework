//引入Vue和Vue路由
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//引入组件
import { indexLink, pages } from "../config/config.pages";
import "../common/less/base.less";

let App = Vue.extend({});
let router = new VueRouter();
let routerMap = (list => {
	let obj = {};
	for(let i in list){
		if(list.hasOwnProperty(i) && !obj[list[i].link]){
			obj[list[i].link] = list[i];
		}
	}
	return obj;
})(pages);

router
	.map(routerMap)
	.redirect({ "*": indexLink })
	.beforeEach(function(){
		window.scrollTo(0,0)
	})
	.start(App, "#app");