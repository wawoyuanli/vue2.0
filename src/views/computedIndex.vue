<template>
   <div>
    <p>methods--{{ howMuch1() }}</p>
			<p>computed--{{ howMuch2 }}</p>
			<p>methods--{{ howMuch1() }}</p>
			<p>{{ wholeName2('li') }}</p>
   </div>
</template>
<script>
export default {
    data() {
        return {
           index:0,
           num:1,
           price:2,
					firstName:'yuan'
        }
     },
     mounted(){
        setTimeout(()=>{
            this.num = 10
        },1000)
     },
    methods: {
        howMuch1() {
            console.log('howMuch1--methods--模版渲染时才调用')
            return this.num + this.price
        }
    },
    computed: {
			//高阶函数传参
        wholeName2() {
            return (secondName) => this.firstName + secondName;
        },
        howMuch2(){
            console.log('howMuch2--computed--组件挂载时就计算好了')
            return this.num + this.price
        }
    },
   
    watch:{
        price:{
            handler(newValue,oldValue){
                console.log(newValue,oldValue,'price')
            },
            immediate:true
        }
    }
}
</script>
<!-- //另一方面，methods中的howMuch1方法只有在模板中被调用时才会执行。由于watch是自动响应数据变化的，
//而methods需要显式调用，所以在这个特定的情况下,watch看起来像是在methods之前执行。 -->
<!-- // howMuch2(newValue,oldValue){
    //  console.log(newValue,oldValue,'--watch--watch会立即触发，因为它监听的是howMuch2的变化')
    //  console.log(`created中定时器改变num的值 ，触发computed重新计算，howMuch2依赖num,
    //  howMuch2被重新计算，watch就会捕捉到这个变化并执行`)
    // } ,
    // price(newValue,oldValue){
    //     console.log(newValue,oldValue)
    // } , -->
<!-- 
computed会好一些，因为computed会有缓存，例如 index从0 变为1 的时候，会触发视图更新，
methods会重新执行一次，而computed
不会，因为computed依赖的两个变量没有改变。 -->