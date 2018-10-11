import axios from 'axios'
import qs from 'qs'

export default {
  locaFun: {
    loca: window.localStorage,
    //判断缓存中是否有val
    hasCacheVal: function (val) {
      var that = this;

      return that.loca.hasOwnProperty(val);
    },
    //获取缓存中的val
    getCacheVal: function (val) {
      var that = this;

      return that.loca.getItem(val);
    },
    //将val放进缓存
    setCacheVal: function (key,val) {
      var that = this;

      that.loca.setItem(key, val);
    },
    //清除缓存中的所有val
    clearCacheVal: function () {
      var that = this;

      that.loca.clear()
    },
    //删除缓存中的val
    removeCacheVal: function (key,val) {
      var that = this;

      that.loca.setItem(key, val);
    }
  },
  //获取url中的参数
  getQuery: function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  },
  //拦截器
  interceptor: function (options) {
    var that = this;

    // 添加请求拦截器
    axios.interceptors.request.use(function (request) {
      // 在发送请求之前做些什么

      return (options && options.before) ? options.before(request) : request;
    }, function (error) {
      // 对请求错误做些什么

      return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
      // 对响应数据做点什么

      return (options && options.beforeResponse) ? options.beforeResponse(response) : response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });
  },
  //请求方法
  ajax: function (options) {
    var that = this,
      request = null,
      method = options.method || 'get';

    axios.defaults = {
      timeout: 30000,
      baseURL: ''
    }

    if(!options.url){
      console.log('url不能为空')
      return;
    }

    switch (method) {
      case 'get':
        request = axios({
          url: options.url,
          method: 'get',
          params: options.data || {}
        });
      break;

      case 'post':
        request = axios({
          url: options.url,  //请求的接口
          method: 'post',
          data: qs.stringify(options.data) || {}
        });
      break;
    }

    var promise = new Promise(function (resolve, reject) {
      request.then(function (res) {
        var data = res.data;

        if(data.status !== 0){
          console.log(data.message)
          return;
        }

        resolve(data);
      }).catch(function (res) {
        reject(res);
      });
    });

    return promise;
  },
  isEmptyObj: function (obj) {
    var that = this;
    if(!that.isExist(obj)){
      console.log('对象为空')
      return ;
    }

    for(var i in obj){
      return false;
    }
    return true;
  },
  //判断是否存在或者是否为null或者是否为undefined
  isExist: function (obj) {
    return obj && obj !== '' && obj !== null && obj !== undefined;
  },
  //封装console.log
  log: function (str) {
    var debug = true;
    if(debug){
      console.log(str);
    }
  },
  //封装弹窗
  Alert: function (str) {
    var debug = true;
    if(debug){
      alert(str);
    }
  },
  shareLink: function () {
    var that = this,
        url = 'http://gzwx.jqzhu.com/gf_anniversary/index.html?id=241';

    that.ajax({
      url: '/a/wx/Pay/share',
      data: {
        url: url
      }
    }).then(function (json) {
      var data = json.data;

      wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.appId, // 必填，公众号的唯一标识
        timestamp: data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.nonceStr, // 必填，生成签名的随机串
        signature: data.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareAppMessage','onMenuShareTimeline'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
      });

      wx.ready(function(){
        var title = '猪兼强周年庆，学车优惠大放送', //$('#shareTitle').text();
            desc = '赶快助我一臂之力，立减学车费用！', //$('#shareDesc').text();
            imgUrl = 'http://gzwx.jqzhu.com/gf_anniversary/assets/images/icon-top.png'; //哪个班放哪个图片

        wx.onMenuShareAppMessage({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: imgUrl, // 分享图标
          type: 'link', // 分享类型,music、video或link，不填默认为link
          dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
          success: function () {
            alert("分享成功");
            // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            alert("取消成功");
            // 用户取消分享后执行的回调函数
          }
        });

        wx.onMenuShareTimeline({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl: imgUrl, // 分享图标
          success: function () {
            alert("分享成功");
              // 用户确认分享后执行的回调函数
          },
          cancel: function () {
            alert("取消成功");
              // 用户取消分享后执行的回调函数
          }
         });
      });
    }).catch(function () {

    });
  },
  //重置url, 去掉code 和 state
  resetUrl: function (urlHead) {
    if(urlHead && urlHead != null && urlHead.indexOf("?") <= 0){
      return urlHead;
    }
    var arr = urlHead.split("?");
    var path = arr[0];
    var paramsArr = arr[1].split("&");
    var isAppend = false;
    var params = "";
    for(var i = 0; i < paramsArr.length; i++){
      var item = paramsArr[i].split("=");
      if(item != null && item.length == 2 && item[1] != "" && item[0] != "state" && item[0] != "code"){
        if(isAppend){
          params += "&" + item[0] + "=" + item[1];
        }else{
          isAppend = true;
          params = "?" + item[0] + "=" + item[1];
        }
      }
    }
    return path + params;
  }
}
