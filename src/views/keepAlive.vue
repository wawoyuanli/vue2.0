<template>
    <div>
        <button @click="prePage">上一页</button>
    </div>
</template>
<script>
  export default{
    props:{
        
    },
    methods:{
      prePage(){
        this.$router.push('/home')
      }
    }
  }
</script>