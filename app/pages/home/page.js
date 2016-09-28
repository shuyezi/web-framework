import { poiTest } from "../../../common/javascript/test";
import { request } from "../../../common/javascript/request";

import Test1 from "../../components/test/page.vue";

export default {
	data () {
		poiTest("HOME");
		request({
			method: "GET",
			url: "http://localhost:9797/home",
			data: {},
			success: function(data){
				console.log("data", data);
			}
		});
		return {
			msg: 'Page Home'
		}
	},
	
	components: {
		Test1
	}
}