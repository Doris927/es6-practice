/**
 * <ES6正则表达式扩展>
 * 1. 正则构造函数的扩展
 * 2. 正则方法的扩展
 * 3. u修饰符
 * 4. y修饰符
 * 5. s修饰符
 */


//1. 正则构造函数的扩展
{
	//ES6的构造函数拓展
	//ES5中有两种表达方式
	//i忽略大小写
	let regex = new RegExp('xyz', 'i');
	//接受正则表达式
	let regex2  = new RegExp(/xyz/i);
	console.log(regex.test('xyz123'), regex2.test('xyz123'));
	/**
	 * Es5中不允许下面的表达
	 * ES6 改变了这种行为。如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。
	 * 而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。
	 */
	let regex3 = new RegExp(/xyz/ig, 'i');
	console.log(regex3.flags);
}

/**
 * 2.字符串对象共有 4 个方法，可以使用正则表达式：match()、replace()、search()和split()。
 * ES6 将这 4 个方法，在语言内部全部调用RegExp的实例方法，从而做到所有与正则相关的方法，全都定义在RegExp对象上。
 */

// 3. u修饰符  unicode模式
{
	//带u修饰符， 后面的两个字节会看成一个字节
	console.log('u-1', /^\uD83D/u.test('\uD83D\uDC2A')); // false
	console.log('u-2', /^\uD83D/.test('\uD83D\uDC2A')); // true

	//{}内的码点在加了u修饰符后，可以与字符等价
	console.log('unicode1',/\u{61}/u.test('a')); //true
	console.log('unicode2',/\u{61}/.test('a')); //false

	//点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的 Unicode 字符，点字符不能识别，必须加上u修饰符。
	let s = '𠮷';
	console.log('点字符1', /^.$/.test(s));// false
	console.log('点字符2', /^.$/u.test(s));// true

	//使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符。
	console.log('量词1', /a{2}/.test('aa'));//true
	console.log('量词2', /a{2}/u.test('aa'));// true
	console.log('量词3', /𠮷{2}/.test('𠮷𠮷'));// false
	console.log('量词4', /𠮷{2}/u.test('𠮷𠮷'));// true
}


/**
 * 4. y修饰符 和 g修饰符一样是全局匹配，也是全局匹配，后一次匹配都从上一次匹配成功的下一个位置开始。
 * 不同之处在于，g修饰符只要剩余位置中存在匹配就可，而y修饰符确保匹配必须从剩余的第一个位置开始，这也就是“粘连”的涵义。
 * 补充： exec() 方法用于检索字符串中的正则表达式的匹配。
 */
{
	let s = 'bbb_bb_b';
	let a1 = /b+/g;
	let a2 = /b+/y;
	console.log('one', a1.exec(s), a2.exec(s));
	console.log('two', a1.exec(s), a2.exec(s)); 

	//检验是否粘连
	console.log(a1.sticky, a2.sticky);
}

/**
 * 5. s 修饰符：dotAll 模式
 */

