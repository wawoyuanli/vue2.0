<template>
    <div>
        <input type="text" v-modela="message">
        {{ message }}
    </div>
</template>
<script>
export default{
    data(){
       return {
            message:''
       }
    },
    directives:{
        'modela':{
            bind(el,binding,vnode){
                console.log(vnode,binding.expression)
                el.value = binding.value
                el.addEventListener('input',function(event){
                    let newValue = event.target.value;
                    // 更新数据
                    vnode.context[binding.expression] = newValue;
                })
            },
            componentUpdated(el,binding){
                //当组件更新时，确保输入的值是最新的
                el.value = binding.value
            },
            inserted(el,binding,vnode){
                console.log(el,'---el111---',binding,'inserted',vnode)
            },
            unbind(el,binding,vnode){
                console.log(el,'---EL----',binding,'unbind',vnode)
            },
            update(el,binding,vnode){
                el.value = binding.value
                console.log(el,'---EL----',binding,'update',vnode)
            }
        }
    }
}
</script>