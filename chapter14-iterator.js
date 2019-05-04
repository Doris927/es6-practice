/**
 * iterator 和 for..of
 * 遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。
 * 任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
 * Iterator 的作用有三个：
 * 一是为各种数据结构，提供一个统一的、简便的访问接口；
 * 二是使得数据结构的成员能够按某种次序排列；
 * 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。
 * 1. iterator 
 * 
 */

 /**
  * 1. iterator 数组中得基本使用
  */
 {
	 let arr = ['hello', 'world'];
	 let map = arr[Symbol.iterator]();
	 console.log(map.next());
	 console.log(map.next());
	 console.log(map.next());
 }
//自定义iterator接口
 {
	 let obj = {
		 start: [1,2,3],
		 end:[4,5,6],
		 [Symbol.iterator](){
			 let self = this;
			 let index = 0;
			 let arr = self.start.concat(self.end);
			 let len =arr.length;
			 return {
				 next(){
					 if(index<len){
						 return {
							 value: arr[index++],
							 done: false
						 };
					 }else{
						 return {
							 value: arr[index++],
							 done: true
						 };
					 }
				 }
			 };
		 }
	 };
	 for (let key of obj){
		 console.log(key);
	 }
 }