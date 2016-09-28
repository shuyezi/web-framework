import ajax from "ajax";

export const request = (options)=>{
	const defaultOpts = {
		success: function(){},
		error: function(){}
	};
	const { method, url, params, success, error } = Object.assign({}, defaultOpts, options);

	switch(method){
		case "POST":
			ajax.post(url, params, function(data){
				//这里需要判断返回的内容，调用不同的回调函数 | TODO
				typeof success === "function" && success(data);
			});
			break;
		case "GET":
			ajax.get(url, params, function(data){
				//这里需要判断返回的内容，调用不同的回调函数 | TODO
				typeof success === "function" && success(data);
			});
		default:
			break;
	}
}