/**
 * <ES6 字符串扩展>
 * 1. unicode表示符
 * 2. 遍历接口
 * 3. 模板字符串
 * 4. 标签模板
 * 5. 新增的方法 10种
 */

/**
 * 1. unicode表示符
 */
{
	console.log('unicode:a', '\u0061');
	console.log('unicode:𠮷1', '\u20BB7'); //码点大于0xFFFF  ₻7
	console.log('unicode:𠮷2', '\u{20BB7}');// 𠮷
	let s1 = 'a';
	console.log('length:a', s1.length); //1
	let s2 = '𠮷';
	console.log('length:𠮷', s2.length); //2
	console.log('𠮷:0', s2.charAt(0));
	console.log('𠮷:1', s2.charAt(1));
	console.log('𠮷:at0', s2.charCodeAt(0));
	console.log('𠮷:at1', s2.charCodeAt(1));
	let s3 = '𠮷a';
	console.log('length:𠮷a', s3.length);
	console.log('𠮷a: code0', s3.codePointAt(0));
	console.log('𠮷a: code0', s3.codePointAt(0).toString(16));
	console.log('𠮷a: code1', s3.codePointAt(1));
	console.log('𠮷a: code1', s3.codePointAt(2));

	//fromCodePoint
	console.log(String.fromCharCode('0x20bb7'));//ஷ
	console.log(String.fromCodePoint('0x20bb7'));//𠮷
}

/***
 * 2.遍历接口
 */
{
	let str = '\u{20bb7}abc';
	for(let i=0; i<str.length; i++){
		console.log('es5遍历', str[i]); //会输出乱码
	}
	for(let c of str){
		console.log('es6遍历', c); //不会输出乱码
	}
}

//3. 模板字符串
/**
 * 标签模板里面，可以内嵌其他语言。但是，模板字符串默认会将字符串转义，导致无法嵌入其他语言。
 */
{
	let name = "test";
	let info = "hello world";
	let msg = `i am ${name}, ${info}`;
	console.log('模板字符串', msg);
}

//4. 标签模板（不是非常理解）
{
	//应用 1， 防止xs攻击， 2，多语言处理
	console.log`标签：hello`;
	let user = {
		name: 'list',
		info: 'hello world',
	}
	abc`i am ${user.name}, ${user.info}`;
	function abc(s, v1 ,v2){
		console.log(s, v1, v2);
	}
}

//5. 新增的方法 includes, startsWith, endsWith, repeat
{
	let str = "string";
	console.log('includes', str.includes("r"));
	console.log('startsWith', str.startsWith("s"));
	console.log('endsWith', str.endsWith("ing"));
	console.log('repeat', str.repeat(2));

}

// 5 新增的方法2 padwith
{
	console.log('padStart','1'.padStart(2,0));
	console.log('padEnd','1'.padEnd(2,0));
}

//5 新增的方法3 String.raw
{
	console.log('String.raw', String.raw`Hi\n${1+2}`);
	console.log('String.raw 对比', `Hi\n${1+2}`);
}


