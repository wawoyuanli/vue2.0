
const Observer = function (target) {
    if(typeof target !== 'object' || target === null){
      return target
    }
    for (let key in target) {
      defineReactive(target, key)
    }
  }
  
  const defineReactive = function (obj, key) {
    //局部变量dep，用于get set 内部调用
    const dep=new Dep()
    let val = obj[key]
    Object.defineProperty(obj, key, {
      enumerable: true, //可被循环
      configurable: true, //当前属性可被修改
      get() {
        console.log('in get')
        //调用依赖收集器中的addSub,用于收集当前属性与Watcher中的依赖关系
          dep.depend();
        return val
      },
      set(newVal) {
        if (newVal === val) {
          return
        }
        val = newVal
        //当值发生变更时，通知依赖收集器，更新每个需要更新的Watcher
        //这里的每个需要更新通过什么断定？dep.subs
          dep.notify(); //通知
      },
    })
  }
  
  const observe = function (data) {
    return new Observer(data)
  }
  
  const Vue = function (options) {
    const self = this
    //将data赋值给this._data,
    if (options && typeof options.data === 'function') {
      this._data = options.data.apply(this)
    }
    //挂载函数
    this.mount = function () {
      new Watcher(self, self.render)
    }
    this.render = function () {
    //   with (self) {
    //       _data.text
      }
    }
    //监听this._data
    observe(this._data)
  }
  
  
  const Watcher = function (vm, fn) {
    const self = this
    this.vm = vm
    const dep=new Dep()
    this.addDep = function () {
      dep.addSub(self)
    }
    //更新方法，用于触发vm._render
    this.update = function () {
      console.log('in watcher update')
      fn()
    }
    //这里会首次调用vm._render,从而触发text的get
    //从而将当前的Watcher与Dep关联起来
    this.value = fn()
    //这里清空了Dep.target,为了防止notify触发时，不停的绑定Watcher与Dep，造成代码死循环
    Dep.target = null
  }
  
  // 发布订阅模式
  const Dep = function () {
    const self = this
    //收集目标
    this.target = null
    //存储收集器中需要通知的watcher
    this.subs = []
    //当有目标时，绑定Dep与Watcher的关系
    this.depend = function () {
      if (Dep.target) {
        //这里其实可以直接写self.addsub(Dep.target)
        //没有这么写因为想还原源码的过程
        Dep.target.addDep(self)
      }
    }
    //为当前收集器添加watcher,
    this.addSub = function (watcher) {
      self.subs.push(watcher)
    }
  
    //通知收集器中所有watcher,调用其update方法
    this.notify=function(){
        for(let i=0;i<self.subs.length;i++){
            self.subs[i].update()
        }
    }
  }
  
  const vue=new Vue({
      data(){
          return{
              text:'hello word'
          }
      }
  })
  vue.mount()
  vue._data.text = '123'; 
  
  
  //对数组的处理 src/core/observer/array.js:8
//   数组可以用defineProperty进行监听。但是考虑性能原因，不能数组一百万项每一项都循环监听（那样性能太差了）。
//   所以没有使用Ojbect.defineProperty对数组每一项进行拦截，而是选择劫持数组原型上的个别方法并重写。
  
//   具体对数组重写的方法：push、pop、shift、unshift、sort、reverse、splice （这七个都是会改变原数组的）
//   splice:添加 或者删除数组中的元素
//   注意：不是直接粗暴重写了Array.prototype上的push等方法，而是通过原型链继承与函数劫持进行的移花接木。
//   并且只监听调用了defineReactive函数时传进来的数组。
  
//   具体实现：
//   以push为例，而是利用Object.create(Array.prototype)生成新的数组对象，
//   该对象的__proto__指向Array.prototype。并在对象身上创建push等函数，利用「函数劫持」，
//   在函数内部Array.prototype.push.call调用原有push方法，并执行自己劫持的代码(如视图更新)。
//   最后将需要绑定的数组的__proto__由指向Array.prototype改向指成拥有重写方法的新数组对象。
//   具体看下边源码仿写，真实Array.prototype里的祖宗级别push等方法没有动。
  
   let state = [1, 2, 3] //待监听的数据
   let OriginalArray = Array.prototype //函数劫持实现数组原型方法的重写
    //并不是直接改写原型上的方法。而是给当前待监听的数组原型链上加了push等方法
    //劫持了Array原型的push方法
  
    //创建一个新对象 带着指定的原型对象
    let arrayMethods = Object.create(OriginalArray)
    console.log(arrayMethods,'arrayMethods', arrayMethods.__proto__ === OriginalArray.prototype, arrayMethods.__proto__ === Array.prototype)
    // const defineReactive = (obj) => {
    // //函数劫持 改写新对象上的push splice等数组方法
    //     arrayMethods.push = function (...args) {
    //       OriginalArray.push.apply(this, args)
    //       render()
    //     }
    //     arrayMethods.pop = function (...args) {
    //       OriginalArray.pop.apply(this, args)
    //       render()
    //     }
    //     obj.__proto__ = arrayMethods
    //   }
      defineReactive(state)
      //操作dom
      const render=()=>{
        this.innerHTML=state
      }
  //对不存在在data中的数据做的更处理 （不是响应式的数据）
  new Vue({
  data:{
  obj:{} //空的 初始化的时候没有响应式的数据属性
   }
  })
  //添加响应式数据
//   方法一：Vue.set(object,key,value)
  Vue.set(this.obj,'name','胡元丽')
//   方法二：this.$set(object,key,value)
  this.$set(this.obj,'name','hyl')
//   方法三：利用Object.assign({},this.obj)
  this.obj.sex = "man";
  this.obj = Object.assign({},this.obj)
  
//   删除数据，也会触发数据的响应式
  this.$delete(this.obj,'sex')