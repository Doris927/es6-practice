/**
 * proxy 和 reflect
 * 1. proxy
 * 2. reflect
 * 3. 使用场景
 */

 /**
  * 1. proxy
  * Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
  * Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写。Proxy 这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”。
  */
 {
	 let obj = {
		 time: '2019-05-04',
		 name: 'net',
		 _r: 123
	 }
	 let monitor = new Proxy(obj, {
		 //拦截对象属性的读取
		 get(target, key){
			 return target[key].replace('2019', '2018');
		 },
		 //拦截对象设置属性
		 set(target, key, value){
			 if(key==='name'){
				 return target[key] = value;
			 }else{
				 return target[key];
			 }
		 },
		 //拦截key in obj操作
		 has(target, key){
			 if(key === 'name'){
				 return key in target;
			 }else{
				 return false;
			 }
		 },
		 //拦截delete
		 deleteProperty(target, key){
			 if(key.startsWith('_')){
				 delete target[key];
				 return true;
			 }else{
				 return false;
			 }
		 },
		 //拦截Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
		 ownKeys(target){
			 return Object.keys(target).filter(item=>item!='time');
		 }
	 });

	 console.log('get', monitor.time);
	 monitor.time = '2018';
	 console.log('set', monitor.time);
	 console.log('has', 'time' in monitor);
	//  delete monitor['_r'];
	//  delete monitor['name'];
	//  console.log('delete', 'name' in monitor);
	console.log('ownKeys', Object.keys(monitor));
 }

 /**
  * 2. reflect
  * Reflect对象与Proxy对象一样，也是 ES6 为了操作对象而提供的新 API。Reflect对象的设计目的有这样几个。
  * （1） 将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上。现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上。也就是说，从Reflect对象上可以拿到语言内部的方法。
  * （2） 修改某些Object方法的返回结果，让其变得更合理。比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误，而Reflect.defineProperty(obj, name, desc)则会返回false。
  * （3） 让Object操作都变成函数行为。某些Object操作是命令式，比如name in obj和delete obj[name]，而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为。
  * （4） [Reflect对象的方法与Proxy对象的方法一一对应，只要是Proxy对象的方法]，就能在Reflect对象上找到对应的方法。这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础。也就是说，不管Proxy怎么修改默认行为，你总可以在Reflect上获取默认行为。
  */
 {
	let obj = {
		time: '2019-05-04',
		name: 'net',
		_r: 123
	}
	console.log('reflect get', Reflect.get(obj, 'time'));
	console.log('reflect get', Reflect.set(obj, 'name', 'tammy'), Reflect.get(obj,'name'));
 }

 /**
  * 3. 使用实例： 数字类型校验
  */
 {
	 function validator(target, validator){
		 return new Proxy(target, {
			 _validator: validator,
			 set(target, key, value, proxy){
				 if(target.hasOwnProperty(key)){
					 let va = this._validator[key];
					 if(!!va(value)){
						 return Reflect.set(target, key, value, proxy);
					 }else{
						 throw Error(`不能设置${key}`);
					 }
				 }else{
					 throw Error(`${key} 不存在`);
				 }
			 }
		 })
	 }
	 
	 const personValidators = {
		 name(val){
			 return typeof val === 'string';
		 },
		 age(val){
			 return typeof val === 'number' && val>18;
		 }
	 };

	 class Person{
		 constructor(name, age){
			 this.name = name;
			 this.age = age;
			 return validator(this, personValidators);
		 }
	 }
	 const person = new Person('tammy',30);
	 //person.name = 48;
	 //person.age = 10;
	 console.info(person);
 }