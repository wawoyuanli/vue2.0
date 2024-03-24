<template>
    <div>
        {{ obj.name }}
     {{ obj.aa }}
    </div>
</template>
<script>
export default {
    data(){
        return {
            obj:{
                aa:'1',
                name:'999'
            }
        }
    },
    mounted(){
        this.obj.name = '99'
    }
    
}
</script>