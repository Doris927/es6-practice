/**
 * class
 * 1. 基本概念
 * 2. 类的继承
 * 3. 静态方法
 * 4. 静态属性
 * 5. getter， setter
 */

 /**
  * 1. 基本使用
  */
 {
	 //类的定义, 构造函数
	 class Parent{
		 constructor(name= 'test'){
			 this.name = name;
		 }
	 }
	 //实例
	 let parent = new Parent('tammy');
	 console.info(parent);
 }

 /**
  * 2. 继承 extends
  */
 {
	 //类的定义, 构造函数
	 class Parent{
		constructor(name= 'test'){
			this.name = name;
		}
	}
	class Child extends Parent{
		constructor(name='child'){
			super(name);//在第一行
			this.type = 'child'; 
		}
	}
	let child = new Child('tammy');
	console.info(child);
 }

 /**
  * 3. 静态方法
  */
 {
	class Parent{
		constructor(name= 'test'){
			this.name = name;
		}
		static tell(){
			console.log('static method:','tell');
		}
	}
	Parent.tell();
 }

 /**
  * 4. 静态属性（提案）
  */
 {
	class Parent{
		constructor(name= 'test'){
			this.name = name;
		}
		static tell(){
			console.log('static method:','tell');
		}
	}
	Parent.type = 'parent';
	console.log('静态属性：', Parent.type);
 }


 //5. setter
 {
	class Parent{
		constructor(name= 'test'){
			this.name = name;
		}
		//属性
		get longName(){
			return 'test1'+this.name;
		}
		set longName(value){
			this.name = value;
		}
	}
	let parent = new Parent('tammy');
	console.info(parent.longName);
	parent.longName = 'ttt';
	console.info(parent);
 }