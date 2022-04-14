<template>
  <!-- 拖动右边距改变div宽度 -->
  <div :id="`width${moveId}`" class="x-handle" @mousedown="mouseDown" @mouseup="mouseUp"></div>
</template>
 
<script>
export default {
  name: 'ChangeWidth',
  props: ['index', 'moveId'],
  data() {
    return {
      lastX: ''
    }
  },
 
  methods: {
    mouseDown(event) {
      document.addEventListener('mousemove', this.mouseMove)
      this.lastX = event.screenX
    },
    mouseMove(e) {
      this.$emit('widthChange', { width: e.screenX - this.lastX, index: this.index })
      this.lastX = e.screenX
    },
    mouseUp() {
      this.lastX = ''
      document.removeEventListener('mousemove', this.mouseMove)
      this.$emit('clearEvent')
    }
  }
}
</script>
<style lang="scss" scoped>
.x-handle {
  width: 5px;
  cursor: crosshair;
  background: #ffffff;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 0;
}
</style>