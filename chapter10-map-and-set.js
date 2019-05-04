/**
 * Set 和 Map
 * 1. Set 
 * 2. WeakSet
 * 3. Map
 * 4. WeakMap
 * 5. 和Array的对比
 * 6. 和Object的对比
 * 
 * 优先使用map和set
 */

 /**
  * Set的用法
  * a. 两种初始化的方法
  * b. set中的元素不同
  */
 {
	 //第一种初始化方法
	 let list = new Set();
	 list.add(5);
	 list.add(7);
	 console.log('set初始化', list);
	 console.log('set size', list.size);
	 //第二种初始化方法
	 let arr = Array.of(1,2,3,4,5);
	 let list2 = new Set(arr);
	 console.log('set初始化2', list2);

	 //Set中的元素不重复，可以利用这个属性去重
	 let arr2 = Array.of(1,2, 2, 1);
	 let list3 = new Set(arr2);
	 console.log('arr去重的应用', list3);

	 //Set不会对元素进行类型转换
	 let arr3 = Array.of(1,2,'2');
	 let list4 = new Set(arr3);
	 console.log('去重', list4);
 }
 //一些常用的方法 add, has, delete, clear
{
	let arr = ['add','has','delete','clear'];
	let list = new Set(arr);
	console.log('has', list.has('add'));
	console.log('delete', list.delete('add'), list);
	console.log('clear',list.clear());
}
//Set的遍历 ，
// 可以直接遍历，
// 用keys, values, entries遍历 //key和value的值相同
// forEach遍历
{
	let arr = ['add','has','delete','clear'];
	let list = new Set(arr);
	//
	for(let value of list){
		console.log(value);
	}
	for(let [key, value] of list.entries()){
		console.log('key,value', key, value);
	}
	list.forEach(function(item){
		console.log(item);
	});
}

/**
 * 2. weakset
 * WeakSet 的成员只能是对象，而不能是其他类型的值。
 * WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。
 * WeakSet 没有size属性，没有办法遍历它的成员。
 * WeakSet 不能使用Clear
 * WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。?
 */
{
	let weakList = new WeakSet();
	let arg = {a:1};
	weakList.add(arg);
	console.log('weak set的成员只能是对象' ,weakList);
}

/**
 * 3. Map
 * Map的key可是任意的
 * 初始化和取值
 */
{
	//第一种初始化方法
	let map = new Map();
	let arr =['123'];
	map.set(arr, 445);
	console.log('map', map, map.get(arr));

	//第二章初始化方法
	let map2 = new Map([['a',123], ['b',234]]);
	console.log('map2', map2);
	
	//size, get(根据key取值), delete, clear
}

/**
 * 4. weakmap
 */

/**
 * 5. Map和Array的对比
 */
{
	//初始化
	let map = new Map();
	let arr = Array();
	//增
	map.set('t',1);
	arr.push({t:1});
	console.log(map, arr);
	//查
	let map_exist = map.has('t');
	let arr_exist = arr.find(item=>item.t);
	console.log(map_exist, arr_exist);
	//改
	map.set('t',2);
	arr.forEach(item=>item.t?item.t=2:'');
	console.log(map, arr);
	//删
	map.delete('t');
	let index = arr.findIndex(item => item.t);
	arr.splice(index);
	console.log(map, arr);
}

/**
 * 6. Set和Array的对比
 */
{
	//初始化
	let set = new Set();
	let arr = Array();
	//增
	let obj = {t:1};
	set.add(obj);
	arr.push({t:1});
	console.log(set, arr);
	//查
	let set_exist = set.has(obj);
	let arr_exist = arr.find(item => item.t);
	console.log(set_exist, arr_exist);
	//改
	set.forEach(item => item.t? item.t =2:'');
	arr.forEach(item=>item.t?item.t=2:'');
	console.log(set, arr);
	//删
	set.forEach(item=>item.t? set.delete(item):'');
	let index = arr.findIndex(item => item.t);
	arr.splice(index);
	console.log(set, arr);
}

/**
 * 和Object对比
 */
{
	//初始化
	let item = {t:1};
	let map = new Map();
	let set = new Set();
	let obj = {};

	//增
	map.set('t',1);
	set.add(item);
	obj['t'] = 1;
	console.log(map, set, obj);

	//查 语义化
	console.info({
		map_exist: map.has('t'),
		set_exist: set.has(item),
		obj_exist: 't' in obj
	});

	//改
	map.set('t',2);
	item.t = 2;
	obj['t'] = 2;
	console.info(map, set, obj);

	//删除
	map.delete('t');
	set.delete(item);
	delete obj['t'];
	console.info(map, set, obj);
}