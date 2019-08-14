<template>
  <div>
    <Layout>
      <iHeader></iHeader>
      <div class="clear">
      </div>
      <Content :style="{padding:'80px 50px'}">
        <h1 class="slogan">查支付就用支付查</h1>
        <div class="search-area">
          <button class="select-btn" @click="showTab">{{cate}}
            <Icon type="ios-arrow-down" v-if="!show"/>
            <Icon type="ios-arrow-up" v-if="show"/>
          </button>
          <input type="search" class="search-box" v-model="key" :placeholder="placeholder"/>
          <button class="search-btn" @click="searchK()" @keyup.enter="searchK()">
            <Icon type="ios-search"/>&nbsp;查 一 下
          </button>
        </div>
        <div class="dropdown-list" v-show="show">
          <div class="dropdown-list-detail">
            <ul ref="ulElement">
              <li v-for="item in searchCategory" v-text="item.key" v-on:click="selectCategory(item)"
                  :class="item.tail ? '' : 'selectClass'"></li>
            </ul>
          </div>
        </div>
        <div class="hot-query"> 热搜：
          <Tag type="border" @click.native="hotSearch(item)" :key="index" color="blue" class ="hotKey" v-for="(item, index) in hotKey">{{item}}</Tag>
        </div>
        <div class="ads-box">
          <img src="../assets/active_banner@2x.62a4495.png"/>
        </div>
      </Content>
      <iFooter></iFooter>
    </Layout>
    <Spin size="large" fix v-if="spin"></Spin>
  </div>
</template>
<script>
  import header from './common/header.vue';
  import footer from './common/footer.vue';
  import api from '../axios/api.js';
  import $ from 'jquery';
  export default {
    name: "index",
    components: {
      'iHeader': header,
      'iFooter': footer,
    },
    data() {
      return {
        theme1: "light",
        show: false,
        category: "关键字",
        cate: '关键字',
        router: "common-detail",
        key: "",
        server: "http://ipayapi.xlman.cn",
        spin: this.$store.state.spin,
        placeholder: '请输入您要查询的关键字...',
        hotKey: ['支付宝','随行付', '拉卡拉', '盒子支付'],
        searchCategory: [
          {key: "银行卡BIN", shorter: "银行卡BIN", placeholder: '请输入银行卡前6位数字', path: "common-category-detail"},
          {key: "开户行联行号", shorter: "开户联行号", placeholder: '请输入开户行名称或联行号', path: "common-category-detail"},
          {key: "POS机交易应答码", shorter: "POS应答码", placeholder: '请输入应答码或提示语', path: "common-category-detail"},
          {key: "支付牌照", shorter: "支付牌照", placeholder: '请输入支付公司名称', path: "company-detail"},
          {key: "手刷品牌黑名单", shorter: "手刷黑名单", placeholder: '请输入品牌名称', path: "common-category-detail"},
          {key: "收单机构号", shorter: "收单机构号", placeholder: '请输入收单机构号或机构名称', path: "common-category-detail", tail: true},
          {key: "银联MCC码行业扣率", shorter: "MCC码", placeholder: '请输入MCC码、经营类型或经营项目', path: "common-category-detail"},
          {key: "银联认证外包服务机构", shorter: "外包服务商", placeholder: '请输入公司名', path: "common-category-detail"},
          {key: "招行无积分商户", shorter: "招行无积分", placeholder: '请输入完整的15位商户号', path: "common-category-detail"},
          {key: "服务商评级", shorter: "服务商评级", placeholder: '请输入公司名', path: "common-category-detail"},
          {key: "地区代码", shorter: "地区代码", placeholder: '请输入地区名称或代码', path: "common-category-detail", tail: true}
        ],
        errorMsg: {
          1: '您输入的查询内容过于模糊',
          2: '请输入完整的银行卡前6位(数字)',
          3: '请输入完整的15位商户号',
          4: '您操作的次数过于频繁，请歇一歇',
          11: '请输入银行卡前6位或者联行号',
          else: '您输入的查询内容不合法'
        }
      };
    },
    methods: {
      enterKeyup() {
        let that = this;
        document.onkeydown = function (e) {
          let key = window.event.keyCode;
          if (key === 13){
            that.searchK();
          }
        }
      },
      hotSearch(key) {
        console.log(key);
        this.category = '关键字';
        this.router = 'common-detail',
        this.key = key;
        this.searchK();
      },
      searchK() {
        const key = this.key,
              server = this.server,
              that = this;
        console.log(key);
        if (key) {
          const msg = this.$Message.loading('正在加载中...', 0);
          let url = server + '/q?key=' + encodeURI(key) + '&catg=all';
          if (that.category === '关键字') {
          } else {
            url = server + '/cq?key=' + encodeURI(key) + '&catg=' + encodeURI(that.category) ;
            // api.get('/cq').then( data => {
            //   setTimeout(() => {
            //     this.$store.commit('queryData',data);
            //     console.log('/cq',this.$store.state.data);
            //     setTimeout(msg, 0);
            //     this.$router.push({
            //       path: this.router
            //     })
            //   }, 1000);
            // });
          }
          $.ajax({
            method: "GET",
            url: url,
            async: true,
            dataType: "jsonp", //返回数据形式为jsonp
            jsonp:"jsonpCallback",
            success (result) {
              setTimeout(msg, 0);
              console.log(result);
              if ((result && result.queryResult === null)||(result && result.invalid) || (result && result.news && result.news.length === 0 && result.list && result.list.length === 0)) {
                let message = '没有相关数据';
                if (result.invalid) {
                  console.log(result.invalid);
                  // 根据key信息显示提示信息
                  message = that.errorMsg[result.invalid];
                  // 找不到提示信息
                  if (!message) {
                    message = that.errorMsg.else;
                  }
                }
                const noData = that.$Message.warning(message, 0);
                setTimeout(noData, 1500);
                return;
              }
              let i = result.queryResult ? result.queryResult.moreList.length + 1 : result.news.length + result.list.length;
              const success = that.$Message.success('成功查询到' + i + '条数据', 0);
              try{
                localStorage.setItem('searchResult',JSON.stringify(result));
              }catch(oException){
                if(oException.name == 'QuotaExceededError'){
                  console.log('超出本地存储限额！');
                  //如果历史信息不重要了，可清空后再设置
                }
              }
              setTimeout(() => {
                setTimeout(success, 0);
                that.$store.commit('queryData', result);
                that.$router.push({
                  path: that.router
                });
              }, 500)

            },
            error(errorMsg) {
              setTimeout(msg, 0);
              this.$Notice.error({
                title: '糟糕！出错了，请稍后再试。',
                desc: ''
              });
            }
          });
        } else {
          this.$Message.warning('请输入关键字');
          return;
        }
      },
      showTab() {
        this.show = !this.show;
      },
      selectCategory(item) {
        this.category = item.key;
        this.cate = item.shorter;
        this.router = item.path;
        this.placeholder = item.placeholder;
        this.show = !this.show;
      }
    },
    created() {
      this.$Message.config({
        top: 80,
        duration: 3
      });
      this.enterKeyup();
    },
    beforeMount() {
      const that = this;
      let catched = eval(this.$store.state.getCookie('hotTips'));
      if (catched) {
        this.hotKey = catched;
      } else {
        const url = this.server + '/hotKeywords?cate=queryHotTips';
        $.ajax({
          method: "GET",
          url: url,
          async: true,
          dataType: "jsonp", //返回数据形式为jsonp
          jsonp:"jsonpCallback",
          success (result) {
            console.log(result);
            that.hotKey = result;
            that.$store.state.setCookie('hotTips',JSON.stringify(result),'m1');
          },
          error(errorMsg) {
            const msg = this.$Message.warning('网络连接失败', 1);
          }
        });
      }
    },
    mounted() {
      setTimeout(() => {
        this.spin = false;
      }, 500);
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
    font-size: 1.2em;
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
    width: 120px;
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
    color: #111111;
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
    margin: 10px 12px;
    border: 1px solid #ddd;
  }

  /* 下拉选项 */
  .dropdown-list-detail ul {
    padding: 20px;
  }

  .dropdown-list-detail li {
    display: inline-block;
    margin: 10px;
    font-size: small;
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
  .selectClass:after {
    margin-left: 20px;
    content: '|';
  }
  .hot-query {
    padding: 6px 0px;
    font-size: 1.2em;
    color: #B70218;
    font-weight: bolder;
    text-align: center;
  }
  .hotKey{
    margin-left: 2px;
  }
</style>
