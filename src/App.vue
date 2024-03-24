<!--v-model双向绑定实现-->
<template>
  <div id="app">
    <!-- <VModel v-model="message"></VModel>
    {{ message }} -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
<script>
// import VModel from './components/VModel.vue'
export default {
  name: 'App',
  components: {
    // VModel
  },
  data() {
    return {
      message:'1',
      a: 9,
      obj: {},
      arr: []
    }
  },
  mounted() {
 
  },
  methods: {

  }
}
</script>

<style>
</style>
