<template>
  <div>
      <Layout>
        <iHeader></iHeader>
        <div class="clear">
        </div>
        <Content :style="{padding:'70px 50px'}">
          <h1 class="slogan">支付就用支付查</h1>
          <div class="search-area">
            <button class="select-btn">关键字
              <Icon type="ios-arrow-down" />
            </button><input type="search" class="search-box" />
            <button class="search-btn" @click="searchK">
              <Icon type="ios-search" />&nbsp;查 一 下
            </button>
          </div>
          <div class="dropdown-list" >
            <div class="dropdown-list-detail">
              <ul>
                <li>银行卡BIN</li>|
                <li>开户行联行号</li>|
                <li>POS机交易应答码</li>|
                <li>支付牌照</li>|
                <li>手刷品牌黑名单</li>|
                <li>收单机构号</li>|
                <li>银联MCC码行业扣率</li>|
                <li>银联认证外包服务机构</li>|
                <li>招行无积分商户</li>|
                <li>地区代码</li>
              </ul>
            </div>
          </div>
          <div class="ads-box">
            <img src="../assets/active_banner@2x.62a4495.png" />
          </div>
        </Content>
        <iFooter></iFooter>
      </Layout>
  </div>
</template>
<script>
import header from './common/header.vue';
import footer from './common/footer.vue';
export default {
  name: "index",
  components:{
      'iHeader':header,
      'iFooter':footer
  },
  data() {
    return {
      theme1: "light"
    };
  },
  methods:{
    searchK(){
      this.$router.push({
        path:'company-detail'
      })
    }
  }
};
</script>
<style scoped>
body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 20px;
  padding: 0;
  margin: 0;
}
.layout {
  border: 1px solid #d7dde4;
  background: #fff;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.ivu-layout {
  background: #ffffff;
}
.ivu-layout-content {
  width: 930px;
  margin: 0 auto;
}
/*搜索框区域*/
.search-area {
  width: 100%;
  padding: 5px 0px;
  text-align: center;
  line-height: 58px;
  position: relative;
}
/*搜索框样式*/
.search-box {
  width: 70%;
  height: 47px;
  padding: 3px 15px;
  font-size: 20px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  color: #515a6e;
  background-color: #fff;
  background-image: none;
  vertical-align: middle;
  cursor: text;
  transition: border 0.2s ease-in-out, background 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;
}
/* 搜索按钮 */
.search-btn {
  width: 110px;
  height: 46px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.3;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0px 15px;
  font-size: 15px;
  border-radius: 4px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  color: #fff;
  background-color: #2d8cf0;
  border-color: #2d8cf0;
}
/* 下拉按钮 */
.select-btn {
  width: 110px;
  height: 46px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  line-height: 1.3;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0px 15px;
  font-size: 15px;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear, box-shadow 0.2s linear;
  color: #000;
  background-color: #fff;
  border-color: #ddd;
}
.select-btn:hover + .dropdown-list-detail {
  display: block;
}
/* 下拉列表 */
.dropdown-list {
  text-align: center;
  padding: 5px 0px;
  margin: 0px 12px;
  border: 1px solid #ddd;
}
/* 下拉选项 */
.dropdown-list-detail ul {
  padding: 20px;
}
.dropdown-list-detail li {
  display: inline-block;
  margin: 20px;
  font-size: 16x;
}
.dropdown-list-detail li:hover {
  color: #2d8cf0;
  cursor: pointer;
}
/*广告图片*/
.ads-box {
  width: 810px;
  height: 277px;
  text-align: center;
  overflow: hidden;
  margin: 65px auto 170px;
}
.ads-box img {
  width: 100%;
  height: 100%;
}
/*口号*/
.slogan {
  text-align: center;
  font-size: 30px;
  height: 50px;
  margin: 70px 0px 10px 0px;
}
.clear {
  clear: both;
}
</style>
