/**
 * ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。
 * 它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。
 * 1. Symbol表示独一无二的值
 * 2. Symbol.for
 * 3. Symbol使用的场景实例
 */

{
	let a1 = Symbol();
	let a2 = Symbol();
	console.log('Symbol独一无二', a1===a2);
}

/**
 * 2. Symbol.for
 * 我们希望重新使用同一个 Symbol 值，Symbol.for方法可以做到这一点
 */
{
	let a3 = Symbol.for('a3');
	let a4 = Symbol.for('a3');
	console.log('Symbol.for', a3===a4); 
}

/**
 * 3. 使用例子
 */
{
	let a1 = Symbol.for('abc');
	let obj = {
		[a1]: '123', //通过 for of 无法取
		'abc': 345,
		'c': 456
	};
	console.log('obj', obj);
	console.log('test', obj[a1]);
	
	//遍历的方法，但是只能针对Symbol属性
	Object.getOwnPropertySymbols(obj).forEach(function(item){
		console.log(obj[item]);
	});

	//对所有属性进行遍历的方法
	Reflect.ownKeys(obj).forEach(function(item){
		console.log('ownKeys', item, obj[item]);
	});
}