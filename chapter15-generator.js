/** 
 * Generator 实现异步的一种方式
 * 1. 基本用法
 * 2. next
 * 3. yield* 
 * 4. async 和 await  是 generator的语法糖 
 * 5. 实例
 */

 /**
  * 1. 基本用法
  */
 {
	 let tell = function* (){
		 yield 'a';
		 yield 'b';
		 return 'c';
	 }
	 let k = tell();
	 console.log(k.next());
	 console.log(k.next());
	 console.log(k.next());
	 console.log(k.next());
 }
 {
	 let obj = {};
	 obj[Symbol.iterator] = function* (){
		 yield 1;
		 yield 2;
		 yield 3;
	 }
	 for(let key of obj){
		 console.log(key);
	 }
 }

//状态机
{
	let state = function* (){
		while(1){
			yield 'A';
			yield 'B';
			yield 'C';
		}
	}
	let status = state();
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
	console.log(status.next());
}

/**
 * 实例： 抽奖
 */
{
	let draw = function(count){
		//具体抽奖逻辑
		console.info(`剩余${count}次`);
	}
	let residue = function* (count){
		while(count>0){
			count--;
			yield draw(count);
		}
	}
	let star = residue(5);
	console.info(star.next());
	console.info(star.next());
	console.info(star.next());
	console.info(star.next());
	console.info(star.next());
	console.info(star.next());
}

/**
 * 长轮询
 */
{
	let ajax = function* (){
		yield new Promise(function(resolve, reject){
			setTimeout(function(){
				resolve({code:1});
			},200);
		});
	}
	let pull = function(){
		let generator = ajax();
		let step = generator.next();
		step.value.then(function(d){
			if(d.code!==0){
				setTimeout(function(){
					console.log('wating');
					pull();
				},1000);
			}else{
				console.info('code',d);
			}
		});	
	};
	pull();
}
