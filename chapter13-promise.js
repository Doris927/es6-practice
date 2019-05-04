/**
 * promise 
 * 1. 基本概念
 * 2. 使用方法
 * 3. Promise.all()
 * 4. Promise.race()
 */


 //与回调的对比
 {
	 //基本定义
	 //如果有多个回掉函数，代码会变得非常复杂
	 let ajax  = function(callback){
		 console.log('执行');
		 setTimeout(function(){
			 callback && callback.call()
		 },1000);
	 }
	 ajax(function(){
		console.log('timeout1');
	 });
 }
 {
	 let ajax = function(){
		 console.log('执行2');
		 //resolve 执行， reject中断
		 return new Promise(function(resolve, reject){
			 setTimeout(function(){
				 resolve();
			 },1000);
		 });
	 }
	 ajax().then(function(){
		 console.log('timeout2');
	 });
 }

 //多个异步
 {
	let ajax = function(){
		console.log('执行3');
		//resolve 执行， reject中断
		return new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve();
			},1000);
		});
	}
	ajax().then(function(){
		console.log('timeout3');
		return new Promise(function(resolve,reject){
			setTimeout(function(){
				resolve();
			},1000)
		});
	}).then(function(){
		console.log('timeout4');
	});
 }

 //捕获异常
 {
	 let ajax = function(num){
		 console.log('执行4');
		 return new Promise(function(resolve, reject){
			 if(num>5){
				 resolve();
			 }else{
				 throw Error('error');
			 }
		 });
	 }
	 ajax(3).then(function(){
		 console.log(6);
	 }).catch(function(err){
		 console.log('catch',err);
	 });
 }

 //3. Promise.all 把多个promise实例当成一个实例
 {
 }

 //4. Promise.race 先到先得
 {

 }