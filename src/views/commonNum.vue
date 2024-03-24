<template>
    <div>
        <!-- <p>{{ add() }}</p> -->
        <p>computed属性的函数不是设计为被直接调用的，而是作为Vue实例的属性来访问。当你在模板或计算属性中访问computed属性时，Vue内部会自动执行这个函数来获取计算后的值。</p>
       <p>{{ getAll }}</p>
       <button @click="add">点击我</button>
       <!-- <p>{{ add() }}</p> -->

    </div>
</template>
<script>
export default {
    data(){
        return {
            num1:0,
            num2:1,
            num3:2
        }
    },
    created(){
        // window.location.hash = ''
        window.addEventListener('hashchange', this.handleHashChange);
    },
    mounted(){
    //   setTimeout(()=>{
    //     console.log(this,'使用箭头函数：箭头函数不会创建自己的this上下文，因此this会保留为定义时的上下文，通常是Vue实例')
    //     this.num3 = 3
    //   },1000)
    // setTimeout(function(){
    //   this.num3 = 10
    // }.bind(this), 1000);
    },
    computed:{
        getAll(){
            console.log('computed')
            return this.num1+this.num2
        }
    },
    methods:{
        handleHashChange() {
        // 在这里执行你想要的操作，例如重新渲染视图
        console.log('URL 的哈希值发生变化：', window.location.hash);
        this.$router.push('/computedIndex')
        window.location.reload()
        // 更新你的页面状态，例如：
        // this.query = event.state.query;
       },
        add(){
            console.log('methods')
            this.num3 = 4
        }
    },
    watch:{
        num3:{
            handler(){
                console.log('num3--watch')
            },
            immediate:true
        }
    }
}
</script>