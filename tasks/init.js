const fs = require("fs");
const path = require("path");

function getArgv(){
	let argv = process.argv,
		len = argv.length;
	return {
		name: argv[len-1] || undefined,
		type: argv[len-2] || undefined
	}
}

function create(source, target){
	fs.mkdirSync(target);
	let sourceArr = fs.readdirSync(source);
	if(sourceArr){
		for(let i in sourceArr){
			let curSourcePath = path.join(source, sourceArr[i]);
			let curTargetPath = path.join(target, sourceArr[i]);
			fs.stat(curSourcePath, function(err, stat){
				if(err){
					throw err;
				}else{
					if(stat.isDirectory()){
						fs.mkdirSync(curTargetPath);
					}else{
						let curFile = fs.readFileSync(curSourcePath).toString();
						fs.writeFileSync(curTargetPath, curFile);
					}
				}
			});
		}
	}
}

(function (){
	let params = getArgv();
	let name = params.name,
		type = params.type;
	if(!name) throw new Error("请输入页面名称!!");

	let targetPath = type === "component" ? path.join(__dirname, "..", "app", "components", name) : path.join(__dirname, "..", "app", "pages", name),
		sourcePath = path.join(__dirname, "..", "app", "components", "initTemplate"),
		existTarget = fs.existsSync(targetPath);

	if(existTarget) throw new Error("该名字已存在!!");

	create(sourcePath, targetPath);
})();