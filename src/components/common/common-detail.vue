<template>
  <div>
    <iHeader></iHeader>
    <div class="clear"></div>
    <Content :style="{padding:'30px 70px 80px'}">
      <div class="info-area">
        <div v-for="item in data.list">
          <div class="content">
            <ul>
              <!--                  <li class="content-info-block">-->
              <!--                    <label>发卡行名称及机构代码</label>-->
              <!--                    <span>中国银行 (01040000)</span>-->
              <!--                  </li>-->
              <!--                  <li class="content-info-block content-info-center">-->
              <!--                    <label>银行卡名</label>-->
              <!--                    <span>长城电子借记卡</span>-->
              <!--                  </li>-->
              <!--                  <li class="content-info-block content-info-center">-->
              <!--                    <label>卡号长度</label>-->
              <!--                    <span>19</span>-->
              <!--                  </li>-->
              <!--                  <li class="content-info-block content-info-center">-->
              <!--                    <label>银行卡全号段样式</label>-->
              <!--                    <span>601382xxxxxxxxxxxxx</span>-->
              <!--                  </li>-->
              <!--                  <li class="content-info-block content-info-center">-->
              <!--                    <label>卡种</label>-->
              <!--                    <span>借记卡</span>-->
              <!--                  </li>-->
              <li class="content-info-block">
                <label class="keyword">{{item.key}}</label>
                <span class="category">{{item.category}}</span>
                <!--              <Tag closable color="blue">{{item.category}}</Tag>-->
                <!--              <Tag type="dot" closable color="blue">标签一</Tag>-->
              </li>
              <li class="content-info-block content-info-center" v-for="val in item.infoArr">
                <label>{{val.label}}</label>
                <!--              <span>{{val.text}}</span>-->
                <span class="detail" v-html="val.text.replace(item.key,'<font>'+ item.key+'</font>')">
                </span>
                <div class="clear"></div>
              </li>
              <li class="content-info-block content-info-center">
              </li>
            </ul>
          </div>
          <div class="content" v-for="detail in item.moreList">
            <ul>
              <li class="content-info-block">
                <label class="keyword">{{detail.key}}</label>
                <span class="category">{{detail.category}}</span>
                <!--              <Tag closable color="blue">{{item.category}}</Tag>-->
                <!--              <Tag type="dot" closable color="blue">标签一</Tag>-->
              </li>
              <li class="content-info-block content-info-center" v-for="val in detail.infoArr">
                <label>{{val.label}}</label>
                <!--              <span>{{val.text}}</span>-->
                <span class="detail" v-html="val.text.replace(item.key,'<font>'+ item.key+'</font>')">
                </span>
                <div class="clear"></div>
              </li>
              <li class="content-info-block content-info-center">
              </li>
            </ul>
          </div>
        </div>
        <div class="news">
          <Card class="card" v-for="news in data.news" v-bind:key="news.id">
            <div class="card-news" style="" @click="toNews(news.url)">
              <div :style="news.pic" class="news-image"></div>
              <h3 style="margin-top: 10px;">
                <Tag type="border" color="blue">{{news.author}}</Tag>
                {{news.title}}
              </h3>
            </div>
          </Card>
        </div>
      </div>
      <div class="ads">
        <img src="../../assets/qrcode.jpg" class="bar-code" alt="">
        <div class="focus-us">
          <i class="focus-top-left"></i>
          <i class="focus-top-right"></i>
          <i class="focus-bottom-left"></i>
          <i class="focus-bottom-right"></i>
          <p>微信扫一扫关注我们</p>
        </div>
      </div>
    </Content>
    <iFooter></iFooter>
  </div>
</template>
<script>
  import header from './header.vue';
  import footer from './footer.vue';

  export default {
    name: 'company-detail',
    components: {
      'iHeader': header,
      'iFooter': footer
    },
    data() {
      return {}
    },
    computed: {
      data: {
        get() {
          let that = this;
          let result = eval("(" + localStorage.getItem('searchResult') + ")");
          console.log(that.$store.state.data.queryResult);
          if (that.$store.state.data.queryResult) {
            return that.$store.state.data;
          } else {
            return result;
          }
        }
      }
    },
    methods: {
      toNews(url) {
        window.open(url, "_blank");
      }
    },
    mounted() {
      console.log('detail', this.data);
    }
  }
</script>
<style>
  .content {
    /* margin-top: 40px; */
    padding: 10px 20px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
    border-radius: 4px;
    margin: 10px 0px;
  }

  .content-info-block {
    font-size: 1.3em;
    color: #515a6e;
    position: relative;
  }

  .content-info-center {
    border-top: 1px dashed #ddd;
    line-height: 100%;
  }

  .content-info-block span {
    float: right;
  }

  .category {
    color: #2d8cf9;
  }

  .keyword {
    color: #B70218;
  }

  .content ul {
    margin: 0px 20px;
  }

  .content li {
    display: block;
    padding: 20px 0px;
  }

  .info-area {
    /* display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center; */
    padding: 60px 20px;
    width: 80%;
    max-width: 1990px;
    min-width: 890px;
  }

  .ads {
    right: 85px;
    top: 80px;
    margin-top: 20px;
    padding: 20px 10px;
    width: 200px;
    height: 200px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
    border-radius: 4px;
    text-align: center;
    position: fixed;
  }

  .bar-code {
    width: 130px;
    height: 130px;
  }

  .focus-us {
    position: relative;
    padding: 5px;
    width: 160px;
    margin: 0px auto;
  }

  .focus-us i {
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
  }

  .focus-us p {
    color: #B70218;
  }

  .focus-top-left {
    top: 0;
    left: 10px;
    border-top: 2px solid #D8D8D8;
    border-left: 2px solid #D8D8D8;
  }

  .focus-top-right {
    top: 0;
    right: 10px;
    border-top: 2px solid #D8D8D8;
    border-right: 2px solid #D8D8D8;
  }

  .focus-bottom-left {
    bottom: 0;
    left: 10px;
    border-left: 2px solid #D8D8D8;
    border-bottom: 2px solid #D8D8D8;
  }

  .focus-bottom-right {
    bottom: 0;
    right: 10px;
    border-bottom: 2px solid #D8D8D8;
    border-right: 2px solid #D8D8D8;
  }

  .selectClass:after {
    content: '|';
  }

  ul li span font {
    color: #B70218;
  }

  .detail {
    margin-left: 130px;
    line-height: 1.2;
    display: inline-block;
    /* white-space: nowrap; */
    text-overflow: ellipsis;
  }

  .news {
    padding: 5px;
  }

  .card {
    width: 320px;
    height: 260px;
    display: inline-block;
    vertical-align: top;
    margin: 5px;
    cursor: pointer;
  }

  .card-news {
    text-align: center;

  }

  .news-image {
    background-size: auto;
    height: 140px !important;
    background-size: 100% 100%;
  }

  .clear {
    clear: both;
  }
</style>

