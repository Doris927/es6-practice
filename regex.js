{
	//ES5的两种方式
	//i忽略大小写
	let regex = new RegExp('xyz', 'i');
	//接受正则表达式
	let regex2  = new RegExp(/xyz/i);
	console.log(regex.test('xyz123'), regex2.test('xyz123'));
}