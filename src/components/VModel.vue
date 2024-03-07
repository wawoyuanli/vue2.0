<template>
    <div>
        <input type="text" :value="modelValue" @input="$emit('update:modelValue')" v-focus>
    </div>
</template>
<script>
export default{
    props:['modelValue'],
    emits:['update:modelValue'],

}
</script>