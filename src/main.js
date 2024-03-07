import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import wx from "weixin-js-sdk";
Vue.config.productionTip = false
Vue.prototype.$wx=wx
//全局注册指令
Vue.directive('focus', {
 bind:function(){
  console.log('bind:只调用一次，在指令第一次绑定到元素时调用')
 },
  // 当被绑定的元素插入到 DOM 中时调用
  inserted: function(el) {
    console.log('inserted:被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中')
    el.focus();
  },
  update:function(){
    console.log('update:所在组件的 VNode 更新时调用，但可能发生在其子 VNode 更新之前。可以用于比较更新前后的值')
   },
   componentUpdated:function(){
    console.log('componentUpdated:指令所在组件的 VNode 及其子 VNode 全部更新后调用')
   },
   unbind:function(){
    console.log('unbind：只调用一次，在指令与元素解绑时调用')
   }
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
// 注册一个全局自定义指令 `v-focus`
