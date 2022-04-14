<template>
  <div id="app">
    <div @click="check">999</div>
    <router-view />
    <input type="file" @click="chooseImage">
    <div @click="chooseImage">111</div>
  </div>
</template>
<script>
const { getHello } = require('./api/api.js')
const wxConfig = require('./utils/wxconfig.js')
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
  mounted() {
    this._wxConfig()
    getHello().then(res => {
      console.log(res)
    })
  },
  methods: {
    _wxConfig() {
      wxConfig()
    },

    chooseImage() {
      this.$wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        // eslint-disable-next-line no-unused-vars
        success: function (res) {
          // var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        }
      });
    },
    check(){
      this.$wx.checkJsApi({
      jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
      success: function (res) {
        console.log(res,'checkJsApi')
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
      }
    })
    }
  }
}
</script>

<style>
</style>
