<template>
    <div class="demo" id="maxBoxId">
        <div
            :id="moveInfo.dragId"
            :style="
                'width:' +
                moveInfo.width +
                'px; left:' +
                moveInfo.coordinate.x +
                'px; top:' +
                moveInfo.coordinate.y +
                'px; height:' +
                moveInfo.height +
                'px'
            "
            class="drag-class"
        >
            <div class="drag-content">
                <!-- 拖拽图标 -->
                <div class="content-text">{{ moveInfo.text }}</div>
                <!-- 宽度改变组件 -->
                <ChangeWidth
                    :moveId="moveInfo.moveId"
                    index="0"
                    @widthChange="changeWidth"
                    @clearEvent="clearEvent"
                />
                <!-- 高度改变组件 -->
                <ChangeHeight
                    :moveId="moveInfo.moveId"
                    index="1"
                    @heightChange="heightChange"
                    @clearEvent="clearEvent"
                />
            </div>
        </div>
    </div>
</template>
 
 
<script>
import ChangeWidth from '../components/ChangeWidth.vue'
import ChangeHeight from '../components/ChangeHeight.vue'
export default {
    components: { ChangeWidth, ChangeHeight },
    data() {
        return {
            moveInfo: {
                dragId: 'smallDragBoxId',
                moveId: 'smallMoveBoxId',
                text: '我是拖动的小盒子',
                width: 400,
                height: 100,
                // 上边距和左边距
                coordinate: {
                    x: 180,
                    y: 10
                }
            }
        }
    },
    methods: {
        // 区块拖动
        // dragDiv(el) {
        //     // dragId: 可拖动区域唯一标识
        //     // moveId: 改变宽度组件唯一标识
        //     const { dragId, coordinate } = this.moveInfo
        //     let obig = document.getElementById('maxBoxId')
        //     let osmall = document.getElementById(dragId)
        //     // 用于保存小的div拖拽前的坐标
        //     osmall.startX = el.clientX - osmall.offsetLeft
        //     osmall.startY = el.clientY - osmall.offsetTop
        //     document.onmousemove = e => {
        //         let left, top
        //         left = e.clientX - osmall.startX
        //         top = e.clientY - osmall.startY
        //         osmall.style.left = left + 'px'
        //         osmall.style.top = top + 'px'
        //         coordinate.x = left
        //         coordinate.y = top
        //         if (left <= 0) {
        //             osmall.style.left = 0 + 'px'
        //             coordinate.x = 0
        //         }
        //         if (top <= 0) {
        //             osmall.style.top = 0 + 'px'
        //             coordinate.y = 0
        //         }
        //         if (left >= obig.offsetWidth - osmall.offsetWidth) {
        //             osmall.style.left = obig.offsetWidth - osmall.offsetWidth + 'px'
        //             coordinate.x = obig.offsetWidth - osmall.offsetWidth
        //         }
        //         if (top >= obig.offsetHeight - osmall.offsetHeight) {
        //             osmall.style.top = obig.offsetHeight - osmall.offsetHeight + 'px'
        //             coordinate.y = obig.offsetHeight - osmall.offsetHeight
        //         }
        //     }
        // },
        // 改变drag宽度尺寸
        changeWidth(params) {
            const { width } = params
            // debugger
            let left
            const { dragId } = this.moveInfo
            // let obig = document.getElementById('maxBoxId')

            let osmall = document.getElementById(dragId)
            let boxWidth = document.getElementById('maxBoxId').offsetWidth
            left = osmall.style.left
            const newWidth = this.moveInfo.width + width
            // outWidth拖动宽度时超出box的宽度
            const outWidth = Number(left.slice(0, left.length - 2)) + Number(newWidth) - Number(boxWidth)
            // 如果超出box将截取留下的
            if (outWidth >= 0) {
                this.moveInfo.width = Number(boxWidth) - Number(left.slice(0, left.length - 2))
            } else {
                this.moveInfo.width = newWidth
            }
            // 设置div的最小宽度和最大宽度
            if (this.moveInfo.width < 200) {
                this.moveInfo.width = 200
            }
            if (this.moveInfo.width > 900) {
                this.moveInfo.width = 900
            }
        },
        // 改变drag高度
        heightChange(params) {
            const { height } = params
            let top
            let osmall = document.getElementById(this.moveInfo.dragId)
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
    height: 500px;
    .drag-class {
        background: rgba(255, 255, 255, 0);
        position: absolute;
        .drag-content {
            position: relative;
            height: 100%;
            .content-text {
                border: 1px dashed #c20707;
                font-size: 34px;
                color: #790707;
                margin-top: 5px;
                position: relative;
                height: 100%;
                .drag-icon {
                    position: absolute;
                    right: 10px;
                    top: 5px;
                    float: left;
                    .down-dragger {
                        cursor: move;
                        font-size: 30px;
                        color: #304cbe;
                    }
                }
            }
        }
    }
}
</style>