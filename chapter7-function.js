/**
 * 函数扩展
 * 1. 参数默认值
 * 2. rest参数 ...arg
 * 3. 扩展运算符
 * 4. 箭头函数（重点）
 * 5. this绑定
 * 6. 尾调用
 */

 /**
  * 1. 参数默认值
  * 注意参数的作用域
  */
 {
	function test(x ,y="world"){
		x = "hello";
		return `${x}${y}`;
	}
	console.log(test());
 }

 /**
  * 2. rest参数 ...arg 
  * 把所有的参数转成数组
  * rest参数后面不能有别的参数
  */
 {
	 function test2(...arg){
		 for(let item of arg){
			 console.log(item);
		 }
	 }
	 test2(1,2,3,4,'a');
 }

 /**
  * 3. 扩展运算符
  */
 {
	 console.log(...[1,2,3]);
 }

 /**
  * 4. 箭头函数
  * ES6 允许使用“箭头”（=>）定义函数。
  */
 {
	 let arrow = v => v*2;
	 console.log('arrow', arrow(3));
	 //没有参数的时候
	 let arrow2 = () => 2;
	 console.log('arrow2', arrow2());
 }

 /**
  * 6. 尾调用
  * 有优化的效果： 尾调用由于是函数的最后一步操作，所以不需要保留外层函数的调用帧，因为调用位置、内部变量等信息都不会再用到了，只要直接用内层函数的调用帧，取代外层函数的调用帧就可以了。
  * 应用场景： 尾递归，可以防止堆栈溢出
  */
 {
	 function tail(x){
		 console.log('tail', x);
	 }
	 function fx(x){
		 return tail(x);
	 }
	 fx(123);
 }

 