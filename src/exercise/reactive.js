//数据响应式原理

// 过Object.defineProperty() 劫持数据发生改变，
// 如果数据发生变化了（在set中进行赋值）
// 触发update方法进行更新节点内容，从而实现了数据双向绑定

// vue将data初始化为一个Observer并对对象中的每个值，重写了其中的get、set，data中的每个key，都有一个独立的依赖收集器。
// 在get中，向依赖收集器添加了监听
// 在mount时，实例了一个Watcher，将收集器的目标指向了当前Watcher
// 在data值发生变更时，触发set，触发了依赖收集器中的所有监听的更新，来触发Watcher.update()

// observer 函数对data数据进行观察 如果是object类型 执行defineReactive 响应式函数
// object.defineProperty()深度观察
// 递归使用observer 

