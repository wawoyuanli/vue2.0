<template>
  <!-- 拖动右边距改变div宽度 -->
  <div :id="`height${moveId}`" class="y-handle" @mousedown="mouseDown" @mouseup="mouseUp"></div>
</template>
 
<script>
export default {
  name: 'ChangeWidth',
  props: ['index', 'moveId'],
  data() {
    return {
      lastY: ''
    }
  },
 
  methods: {
    mouseDown(event) {
      document.addEventListener('mousemove', this.mouseMove)
      this.lastY = event.screenY
    },
    mouseMove(e) {
      this.$emit('heightChange', { height: e.screenY - this.lastY, index: this.index })
      this.lastY = e.screenY
    },
    mouseUp() {
      this.lastY = ''
      document.removeEventListener('mousemove', this.mouseMove)
      this.$emit('clearEvent')
    }
  }
}
</script>
<style lang="scss" scoped>
.y-handle {
  width: 30px;
  cursor: crosshair;
  background: rgb(58, 67, 192);
  height: 5px;
  position: absolute;
  bottom: 0;
  left: 50%;
}
</style>