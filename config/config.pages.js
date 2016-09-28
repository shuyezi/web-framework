//引入各种组件
import Home from '../app/pages/home/page.vue';
import Test from '../app/pages/test/page.vue';

export const indexLink = "/index";
export const pages = {
	home: { link: "/index", name: "index", component: Home },
	test: { link: "/test", name: "test", component: Test }
}

