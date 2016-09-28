module.exports = function *(next){
	this.set("Access-Control-Allow-Origin", "*");
	
	this.body = {
		poi: "HOME",
		text: "Hello HOME.html"
	};
};