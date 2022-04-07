<template>
  <div id="app">
   <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      a: 9,
      obj: {},
      arr: []
    }
  },
  mounted() { },
  methods: {}
}
</script>

<style>
</style>
