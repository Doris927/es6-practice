/**
 * 数组的扩展
 * 1. Array.from
 * 2. Array.of
 * 3. copyWithin
 * 4. find\findIndex 使用的较多 可以自定义条件
 * 5. fill 填充数组 
 * 6. entries\keys\values 遍历的方法，使用的较多
 * 7. includes
 * */

 /**
  * 1. Array.from
  * Array.from方法用于将两类对象转为真正的数组：类似数组的对象（array-like object）和可遍历（iterable）的对象（包括 ES6 新增的数据结构 Set 和 Map）。
  */
 {
	let arrayLike = {
		'0': 'a',
		'1': 'b',
		'2': 'c',
		length: 3
	};
	let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
	arr2.forEach(function(item){
		console.log('Array.from',item);
	});

	console.log('Array.from的一种用法', Array.from([1,3,5], function(item){return item*2}));
 }

/**
 * 2. Array.of
 * Array.of方法用于将一组值，转换为数组。
 * 这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异。
 * Array() // []
 * Array(3) // [, , ,]
 * Array(3, 11, 8) // [3, 11, 8]
 */
{
	console.log('Array.of', Array.of(1,2,3,4));
}

/**
 * 3. copeWith 使用不频繁
 * 将指定位置的成员复制到其他位置（会覆盖原有成员）
 */
{
	console.log('copeWith',[1,2,3,4,5].copyWithin(0,3,5));
}

/**
 * 4. find/findIndex
 * 查找
 */
{
	console.log('find', [1,2,3,4,5].find(function(item){
		return item>3;
	}));
	console.log('findIndex', [1,2,3,4,5].findIndex(function(item){
		return item>3;
	}));
}

/**
 * 5. 填充数组
 * fill
 */
{
	console.log('fill',Array(3).fill(7));
	console.log('fill-pos',Array(5).fill(7,1,3)); //
}

/**
 * 6. entries, keys, values
 */
 {
	for (let index of ['a', 'b'].keys()) {
		console.log('keys',index);
	}

	for (let index of ['a', 'b'].values()) {
		console.log('values',index);
	}

	for (let [index, value] of ['a', 'b'].entries()) {
		console.log('entries', index, value);
	}
 }

 /**
  * 7. includes
  */
{
	console.log('includes', [1,2,3].includes(1));
}