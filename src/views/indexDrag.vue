<template>
    <div class="demo" id="maxBoxId" >
        <ul>
            <li v-for="(item,index) in [1,2,3,4,5,6,7,8,9,10]" :key="index">
              {{ item }}
            </li>
        </ul>
        <button @click="jump">跳转</button>

    </div>
</template>
<script>
export default {
    data() {
        return {
            width:200,
            height:200,
            dragId: 'smallDragBoxId',
            lastX: 0,
            lastY: 0
        }
    },
    mounted() {

    },
    methods: { 
        jump(){
            this.$router.push('/keepalive')
        }
    }
}
</script>
<style lang="scss" scoped>
.demo{
    ul li{
        height: 100px;
    }
}
 
</style>