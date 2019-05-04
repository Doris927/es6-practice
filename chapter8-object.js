/**
 * 对象扩展
 * 1. 简洁表达式
 * 2. 属性表达式
 * 3. 扩展运算符
 * 4. Object新增方法
 */

 /**
  * 1. 简洁表达式
  * ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
  */
 {
	 const a = '1';
	 const b = '2';
	 const es5object={
		 a: a,
		 b: b
	 };
	 const es6object= {a, b};
	 console.log(es6object);

	 //方法
	 let es5method = {
		 hello: function(){
			 console.log('hello');
		 }
	 };

	 let es6method = {
		 hello(){
			 console.log('hello');
		 }
	 }
	 es6method.hello();
 }

 /**
  * 2. 属性表达式
  * ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。
  * 属性名表达式与简洁表示法，不能同时使用，会报错。
  */
 {
	 let a = 'b'
	 let es6_obj = {
		 [a]: 1
	 }
	 console.log('属性表达式', es6_obj);
 }

 /**
  * 3. 扩展运算符
  */
 {
	let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
	console.log(z);
 }

 /**
  * 4. 新增的方法
  * Object.is
  * 与严格比较运算符（===）的行为基本一致。
  * 
  * Object.assign ***
  * 将源对象（source）的所有可枚举属性，复制到目标对象（target）。
  * 只拷贝源对象的自身属性（不拷贝继承属性），也不拷贝不可枚举的属性（enumerable: false）。
  * Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
  * 对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
  * Object.assign可以用来处理数组，但是会把数组视为对象。
  * 》》》应用场景： 为对象添加属性， 为对象添加方法， 克隆对象， 合并多个对象， 为属性指定默认值
  * 
  * Object.keys()，Object.values()，Object.entries() 遍历
  */
 {
	 console.log('Object.is:字符串', Object.is('abc', 'abc'));
	 console.log('Object.is:数组', Object.is([],[]), []===[]);
	 console.log('Object.assign', Object.assign({a:'1'},{b:'2'}));
	 console.log('Object.assign, 数组', Object.assign([1, 2, 3], [4, 5]));// [4, 5, 3]

	 //entries
	 let test = {a:1,b:2};
	 for(let [key, value] of Object.entries(test)){
		 console.log('entries', key, value);
	 }
 }
