import Vue from 'vue';
import Vuex from 'vuex'
import $ from 'jquery';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    data: {},
    spin: true,
    getsec(str){
      let str1=str.substring(1,str.length)*1;
      let str2=str.substring(0,1);
      if (str2==="s"){
        return str1*1000;
      }else if (str2==="h"){
        return str1*60*60*1000;
      }else if (str2==="d")
      {
        return str1*24*60*60*1000;
      }
    },
    //设置Cookie
    //s20是代表20秒
    //h是指小时，如12小时则是：h12
    //d是天数，30天则：d30
    setCookie(name,value,time){
      let strsec = this.getsec(time);
      let exp = new Date();
      exp.setTime(exp.getTime() + strsec*1);
      document.cookie = name + "="+ escape (value)+ ";expires=" + exp.toGMTString();
    },
    //取Cookie
    getCookie(c_name){
      if (document.cookie.length>0){
        let c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1){
          c_start=c_start + c_name.length+1
          let c_end=document.cookie.indexOf(";",c_start)
          if (c_end==-1) c_end=document.cookie.length
          return unescape(document.cookie.substring(c_start,c_end))
        }
      }
      return ""
    },
    //删除cookies
    delCookie(name) {
      let exp = new Date();
      exp.setTime(exp.getTime() - 1);
      let cval=getCookie(name);
      if(cval!=null)
        document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    }
  },
  mutations: {
    queryData (state, data) {
      state.data = data;
    },
    spin(state, data) {
      state.spin = data;
    }
  },
  actions:{
  }
});
export default store;
