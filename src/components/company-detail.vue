<template>
  <div>
    <Layout>
      <iHeader></iHeader>
      <div class="clear">
      </div>
      <Content :style="{padding:'70px 70px'}">
        <div class="info-areas" v-model="data.queryResult">
          <div class="title">
            <a href=""><img src="../assets/time.png" class="licenseImg" alt="证书图片"></a>
            <div class="simple-info">
              <h1>{{data.queryResult.keyword}}</h1>
              <div class="info-arr">
                <ul>
                  <li v-for="item in data.queryResult.infoArr.slice(0,4)" v-if="item.text !==data.queryResult.keyword">{{item.text}}</li>
                  <li v-for="row in data.queryResult.infoArr.slice(5,6)">{{row.text}}</li>
                </ul>
                <p v-for="ele in data.queryResult.infoArr.slice(4,5)">{{ele.text}}</p>
              </div>
              <div class="clear"></div>
            </div>
            <div class="clear"></div>
          </div>
<!--          <div class="content">-->
<!--            <ul>-->
<!--              <li class="content-info-block">-->
<!--                <label>发证日期</label>-->
<!--                <span>2000-10-01</span>-->
<!--              </li>-->
<!--              <li class="content-info-block content-info-center">-->
<!--                <label>到期日期</label>-->
<!--                <span>2020-10-01</span>-->
<!--              </li>-->
<!--              <li class="content-info-block content-info-center">-->
<!--                <label>业务覆盖范围</label>-->
<!--                <span>全国</span>-->
<!--              </li>-->
<!--              <li class="content-info-block content-info-center">-->
<!--                <label>央行公告地址</label>-->
<!--                <span><a href="http://www.baidu.com" target="_blank">GO</a></span>-->
<!--              </li>-->
<!--              <li class="content-info-block content-info-center">-->
<!--                <label>地址</label>-->
<!--                <span>杭州市西湖区万塘路18号广厦黄龙时代中心B栋3-21层</span>-->
<!--              </li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div class="evaluation">-->
<!--            <div>-->
<!--              <Rate allow-half v-model="valueHalf" show-text icon="md-star"/>-->
<!--              <div class="submitRate">-->
<!--                <Button type="primary">提交评价</Button>-->
<!--              </div>-->
<!--            </div>-->
<!--            <Input v-model="inputMsg" type="textarea" placeholder="请输入评价..." class="textarea"/>-->
<!--            <div class="upload-list" v-for="item in uploadList" :key="item.key">-->
<!--              <template v-if="item.status === 'finished'">-->
<!--                <img :src="item.url">-->
<!--                <div class="upload-list-cover">-->
<!--                  <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>-->
<!--                  <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>-->
<!--                </div>-->
<!--              </template>-->
<!--              <template v-else>-->
<!--                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>-->
<!--              </template>-->
<!--              <Modal title="查看图片" v-model="visible">-->
<!--                <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">-->
<!--              </Modal>-->
<!--            </div>-->
<!--            <Upload-->
<!--              ref="upload"-->
<!--              :show-upload-list="false"-->
<!--              :default-file-list="defaultList"-->
<!--              :on-success="handleSuccess"-->
<!--              :format="['jpg','jpeg','png']"-->
<!--              :max-size="2048"-->
<!--              :on-format-error="handleFormatError"-->
<!--              :on-exceeded-size="handleMaxSize"-->
<!--              :before-upload="handleBeforeUpload"-->
<!--              multiple-->
<!--              type="drag"-->
<!--              action="//jsonplaceholder.typicode.com/posts/"-->
<!--              style="display: inline-block;width:58px;  margin-top:20px;">-->
<!--              <div style="width: 58px;height:58px;line-height: 58px;">-->
<!--                <Icon type="ios-camera" size="20"></Icon>-->
<!--              </div>-->
<!--            </Upload>-->
<!--          </div>-->
        </div>
        <div class="info-areas" v-for="info in data.queryResult.moreList">
          <div class="title">
            <a href=""><img src="../assets/time.png" class="licenseImg" alt="证书图片"></a>
            <div class="simple-info">
              <h1>{{info.keyword}}</h1>
              <div class="info-arr">
                <ul>
                  <li v-for="detail in info.infoArr.slice(0,4)" v-if="detail.text !== info.keyword">{{detail.text}}</li>
                  <li v-for="detailRow in info.infoArr.slice(5,6)">{{detailRow.text}}</li>
                </ul>
                <p v-for = "detailEle in info.infoArr.slice(4,5)">{{detailEle.text}}</p>
              </div>
              <div class="clear"></div>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <div class="ads">
          <img src="../assets/qrcode.jpg" class="bar-code" alt="">
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
    </Layout>
  </div>
</template>
<script>
  import header from './common/header.vue';
  import footer from './common/footer.vue';

  export default {
    name: 'company-detail',
    components: {
      'iHeader': header,
      'iFooter': footer
    },
    data() {
      return {
        valueHalf: 4,
        uploadList: [
          {
            key: '1',
            name: 'a42bdcc1178e62b4694c830f028db5c0',
            status: 'finished',
            url: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
            key: '2',
            status: 'finished',
            name: 'bc7521e033abdd1e92222d733590f104',
            url: 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
        ],
        defaultList: [
          {
            'name': 'a42bdcc1178e62b4694c830f028db5c0',
            'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
          },
          {
            'name': 'bc7521e033abdd1e92222d733590f104',
            'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
          }
        ],
        inputMsg: '',
        visible: false
      }
    },
    computed: {
      data: {
        get() {
          let that = this;
          let result = eval("("+localStorage.getItem('searchResult')+")");
          console.log(that.$store.state.data.queryResult);
          if (that.$store.state.data.queryResult){
            return that.$store.state.data;
          } else {
            return result;
          }
        }
      }
    },
    methods: {
      handleView(name) {
        this.imgName = name;
        this.visible = true;
      },
      handleRemove(file) {
        const fileList = this.$refs.upload.fileList;
        this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
      },
      handleSuccess(res, file) {
        file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
        file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      },
      handleFormatError(file) {
        this.$Notice.warning({
          title: 'The file format is incorrect',
          desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
        });
      },
      handleMaxSize(file) {
        this.$Notice.warning({
          title: 'Exceeding file size limit',
          desc: 'File  ' + file.name + ' is too large, no more than 2M.'
        });
      },
      handleBeforeUpload() {
        const check = this.uploadList.length < 5;
        if (!check) {
          this.$Notice.warning({
            title: 'Up to five pictures can be uploaded.'
          });
        }
        return check;
      }
    }
  }
</script>
<style>
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
    width: 100%;
    margin: 0 auto;
    padding: 40px;
    position: relative;
  }

  .info-areas {
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
    padding: 15px 20px;
    width: 80%;
    max-width: 1990px;
    min-width: 890px;
  }

  .licenseImg {
    width: 124px;
    height: 90px;
    border-radius: 30%;
    float: left;
  }

  .title {
    padding: 40px 20px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 31px rgba(0, 0, 0, .25);
    border-radius: 4px;
  }

  .simple-info {
    margin: 0px 0px;
    padding: 0px 0px 0px 109px;
    /*float: right;*/
  }

  .simple-info h1 {
    margin: -10px 33px 0px;
  }

  .info-arr {
    font-size: 1.1em;
  }

  .info-arr ul {
    margin: 15px 10px 0px;
  }

  .info-arr li {
    display: inline-block;
    margin-left: 20px;
  }

  .info-arr p {
    margin: 15px 0px 15px 33px;
    line-height: 2;
  }

  .content {
    margin-top: 40px;
    padding: 20px 20px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
    border-radius: 4px;
  }

  .ads {
    right: 85px;
    top: 90px;
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

  .content ul {
    margin: 0px 20px;
  }

  .content li {
    display: block;
    padding: 20px 0px;
  }

  .content-info-block {
    font-size: 1.3em;
    color: #515a6e;
    position: relative;
  }

  .content-info-center {
    border-top: 1px dashed #ddd;
  }

  .content-info-block span {
    right: 0px;
    position: absolute;
  }

  .clear {
    clear: both;
  }

  .evaluation {
    margin-top: 40px;
    padding: 20px 20px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .25);
    border-radius: 4px;
    position: relative;
  }

  .ivu-rate {
    font-size: 34px;
  }

  .submitRate {
    float: right;
    padding: 11px;
  }

  .textarea {
    margin-top: 20px;
    display: block;
    width: 700px;
  }

  .upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }

  .upload-list img {
    width: 100%;
    height: 100%;
  }

  .upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
  }

  .upload-list:hover .upload-list-cover {
    display: block;
  }

  .upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }
</style>
