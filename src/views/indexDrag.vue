<template>
    <div class="demo" id="maxBoxId" @mousedown="mouseDown" @mouseup="mouseUp">
        <div :id="dragId" class="drag-class" :style="{width:width+'px',height:height+'px'}">
            <div class="content-text">小盒子</div>
        </div>
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
        mouseDown(event) {
            document.addEventListener('mousemove', this.mouseMove)
            this.lastX = event.screenX
            this.lastY = event.screenY
        },
        // 改变元素大小
        mouseMove(e) {
            const widthx = e.screenX - this.lastX
            const heighty = e.screenY - this.lastY
            let left = null
            // debugger
            let osmallx = document.getElementById(this.dragId)
            let boxWidth = document.getElementById('maxBoxId').offsetWidth
            left = osmallx.style.left
            // debugger
            const newWidth = osmallx.offsetWidth + widthx
            // outWidth拖动宽度时超出box的宽度
            const outWidth = Number(left.slice(0, left.length - 2)) + Number(newWidth) - Number(boxWidth)
            // 如果超出box将截取留下的
            if (outWidth >= 0) {
                this.width = Number(boxWidth) - Number(left.slice(0, left.length - 2))
            } else {
                this.width = newWidth
            }
            // 设置div的最小宽度和最大宽度
            if (this.width < 200) {
                this.width = 200
            }
            if (this.width > 700) {
                this.width = 700
            }

            let top
            let osmally = document.getElementById(this.dragId)
            let boxHeight = document.getElementById('maxBoxId').offsetHeight
            top = osmally.style.top
            const newHeight = this.height + heighty
            // outHeight拖动宽度时超出box的高度
            const outHeight = Number(top.slice(0, top.length - 2)) + Number(newHeight) - Number(boxHeight)
            // 如果超出box将截取留下的
            if (outHeight >= 0) {
                this.height = Number(boxHeight) - Number(top.slice(0, top.length - 2))
            } else {
                this.height = newHeight
            }
            // 设置div的最小宽度和最大宽度
            if (this.height < 100) {
                this.height = 100
            }
            if (this.height > 600) {
                this.height = 600
            }
            this.lastX = e.screenX
            this.lastY = e.screenY
        },
        mouseUp() {
            this.lastX = ''
            this.lastY = ''
            document.removeEventListener('mousemove', this.mouseMove)
        },
        // 改变drag宽度尺寸
        changeWidth(params) {
            const { width } = params
            let left
            const { dragId } = this.moveInfo
            let osmall = document.getElementById(dragId)
            let boxWidth = document.getElementById('maxBoxId').offsetWidth
            left = osmall.style.left
            const newWidth = this.width + width
            // outWidth拖动宽度时超出box的宽度
            const outWidth = Number(left.slice(0, left.length - 2)) + Number(newWidth) - Number(boxWidth)
            // 如果超出box将截取留下的
            if (outWidth >= 0) {
                this.width = Number(boxWidth) - Number(left.slice(0, left.length - 2))
            } else {
                this.width = newWidth
            }
            // 设置div的最小宽度和最大宽度
            if (this.width < 300) {
                this.width = 300
            }
            if (this.width > 700) {
                this.width = 700
            }
        },
        // 改变drag高度
        heightChange(params) {
            const { height } = params
            let top
            let osmall = document.getElementById(this.dragId)
            let boxHeight = document.getElementById('maxBoxId').offsetHeight
            top = osmall.style.top
            const newHeight = this.moveInfo.height + height
            // outHeight拖动宽度时超出box的高度
            const outHeight = Number(top.slice(0, top.length - 2)) + Number(newHeight) - Number(boxHeight)
            // 如果超出box将截取留下的
            if (outHeight >= 0) {
                this.moveInfo.height = Number(boxHeight) - Number(top.slice(0, top.length - 2))
            } else {
                this.moveInfo.height = newHeight
            }
            // 设置div的最小宽度和最大宽度
            if (this.moveInfo.height < 100) {
                this.moveInfo.height = 100
            }
            if (this.moveInfo.height > 200) {
                this.moveInfo.height = 200
            }
        },
        // 清除鼠标事件
        clearEvent() {
            document.onmousemove = null
            document.onmouseup = null
        }
    }
}
</script>
<style lang="scss" scoped>
.demo {
    height: 800px;
    .drag-class {
        .content-text {
            border: 1px dashed #c20707;
            font-size: 34px;
            color: #790707;
            margin-top: 5px;
            position: relative;
            height: 100%;
            cursor: crosshair;
            
        }
    }
}
</style>