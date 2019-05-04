/**
 * 数值扩展
 * 1.二进制和八进制的表示方法
 * 2.Number.isFinite(), Number.isNaN() 
 * 3.Number.isInteger() 
 * 4.数值的有效范围 Number.isSafeInteger(10)
 * 5.取数字的整数部分 Math.trunc
 * 6.判断正数，负数，0 Math.sign
 * 7.立方根 Math.cbrt
 */

 //1. 二进制和八进制的表示方法
 /**
  * ES6 提供了二进制和八进制数值的新的写法，分别用前缀0b（或0B）和0o（或0O）表示。
  * 从 ES5 开始，在严格模式之中，八进制就不再允许使用前缀0表示，ES6 进一步明确，要使用前缀0o表示。
  */
 {
	 console.log('二进制',0B111110111);
	 console.log('八进制',0o767);
 }

 /**
  * 2. Number.isFinite(), Number.isNaN() 
  * 使用频率不高
  */
 {
	Number.isFinite(15); // true
	Number.isFinite(0.8); // true
	Number.isFinite(NaN); // false
	Number.isFinite(Infinity); // false
	Number.isFinite(-Infinity); // false
	Number.isFinite('foo'); // false
	Number.isFinite('15'); // false
	Number.isFinite(true); // false
	Number.isNaN(NaN) // true
	Number.isNaN(15) // false
	Number.isNaN('15') // false
	Number.isNaN(true) // false
	Number.isNaN(9/NaN) // true
	Number.isNaN('true' / 0) // true
	Number.isNaN('true' / 'true') // true
 }

 /**
  * 3. Number.isInteger() 
  * JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
  * 如果参数不是数值，Number.isInteger返回false。
  */
 {
	Number.isInteger(25) // true
	Number.isInteger(25.1) // false
	Number.isInteger(25.0) // true
	console.log(Number.isInteger('24'));//false
	/**
	 * 由于 JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。
	 * 如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判。
	 */
	console.log(Number.isInteger(3.0000000000000002)); // true
	//数值小于Number.MIN_VALUE时，会转化成0，造成误判
	console.log(Number.isInteger(5E-325)) // true
 }

 /**
  * 4. 数值的有效范围
  * Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.isSafeInteger
  */
 {
	 console.log('数值的安全范围', Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
	 console.log('数值的安全范围10', Number.isSafeInteger(10));
	 console.log('数值的安全范围a', Number.isSafeInteger('a'));
 }

 /**
  * 5. 数字取整
  * Math.trunc
  */
 {
	 console.log('数字取整:4.7', Math.trunc(4.7));
 }

 /**
  * 6. 判断数字是否为正数，负数，0
  * Math.sign 返回值有1，-1， 0， NaN
  */
 {
	 console.log('sign:5', Math.sign(5));
	 console.log('sign:0', Math.sign(0));
	 console.log('sign:-5', Math.sign(-5));
	 console.log('sign:foo', Math.sign('foo'));
 }
 
 /**
  * 7. 开立方根
  * Math.cbrt
  */
 {
	 console.log('立方根：-1', Math.cbrt(-1));
	 console.log('立方根：8', Math.cbrt(8));
 }



