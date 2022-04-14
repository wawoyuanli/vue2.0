/** 通过config接口注入权限验证配置
   获取jsapi_ticket
   获取wx.config相关参数信息
   配置jsapiList :需要使用的JS接口列表
   appId: "wx39b624633ad6e4c7"
   jsapi_ticket: "E0o2-at6NcC2OsJiQTlwlDZRSlyVlEkemy48GUrA3BLMNolLDYFgvT5KWa0kVR7-6uzhP1xBeKtEnkAMEqjZog"
   nonceStr: "3ncc4uiapyi"
   signature: "5829af71aa838925192aa38875b45289950b9c7d"
   timestamp: "1649921773"
   url: "http://localhost:9589/"
 */
const { jsapi } = require("../api/api.js");
const apiList = require("./data/jsapiList.js");
const wx = require("weixin-js-sdk");
const wxConfig = async () => {
  let url = encodeURIComponent(location.href.split("#")[0]);
  await jsapi(url).then((result) => {
    console.log(result, "----wxconfig---");
    wx.config({
      debug: true,
      ...result.data,
      jsApiList: apiList,
    });
  });

  wx.ready(function () {
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
  });
  wx.error(function (res) {
    console.log(res);
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
  });
};
module.exports = wxConfig;
