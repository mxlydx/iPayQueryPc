<template>
    <div>
        <Layout>
            <iHeader></iHeader>
            <div class="clear">
            </div>
            <Content :style="{padding:'70px 70px'}">
                <div class="info-area">
                    <div class="title">
                        <a href=""><img src="../assets/timg.jpg" class="licenseImg" alt="证书图片"></a>
                        <div class="simple-info">
                            <h1>支付宝（中国）网络技术有限公司</h1>
                            <div class="info-arr">
                                <ul>
                                    <li>Z2000133000019</li>
                                    <li>第一批</li>
                                    <li>马云</li>
                                </ul>
                                <p>互联网支付、移动电话支付、预付卡发行与受理（仅限于线上实名支付账户充值）、银行卡收单</p>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="clear"></div>
                    </div>
                    <div class="content">
                        <ul>
                            <li class="content-info-block">
                                <label>发证日期</label>
                                <span>2000-10-01</span>
                            </li>
                            <li class="content-info-block content-info-center">
                                <label>到期日期</label>
                                <span>2020-10-01</span>
                            </li>
                            <li class="content-info-block content-info-center">
                                <label >业务覆盖范围</label>
                                <span>全国</span>
                            </li>
                            <li class="content-info-block content-info-center">
                                <label>央行公告地址</label>
                                <span><a href="http://www.baidu.com" target="_blank">GO</a></span>
                            </li>
                            <li class="content-info-block content-info-center">
                                <label>地址</label>
                                <span>杭州市西湖区万塘路18号广厦黄龙时代中心B栋3-21层</span>
                            </li>
                        </ul>
                    </div>
                    <div class="evaluation">
                        <Rate allow-half v-model="valueHalf"  show-text icon="md-star"/>
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
    name:'company-detail',
    components:{
      'iHeader':header,
      'iFooter':footer
  },
  data(){
      return {
            valueHalf: 4
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
.info-area{
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
    padding: 40px 0px;
    width: 890px;
}
.licenseImg{
    width: 124px;
    height: 90px;
    border-radius: 30%;
    float: left;
}
.title{
    padding: 40px 20px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    border-radius: 4px;
}
.simple-info{
    margin: 0px 0px;
    float: left;
}
.simple-info h1{
    margin:-10px 30px 0px;    
}
.info-arr{
    font-size: 1.3em;
}
.info-arr ul{
    margin:15px 10px 0px; 
}
.info-arr li{
    display: inline-block;
    margin-left: 20px;
}
.info-arr p{
    margin:15px 30px; 
}
.content{
    margin-top: 40px;
    padding: 20px 20px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    border-radius: 4px;
}
.ads{
    right: 85px;
    top: 90px;
    margin-top: 20px;
    padding: 20px 10px;
    width: 200px;
    height: 260px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    border-radius: 4px;
    text-align: center;
    position: fixed;
}
.bar-code{
    width: 150px;
    height: 150px;
}
.focus-us{
    position: relative;
    padding: 10px;
    margin-top:10px;
}
.focus-us i{
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
}
.focus-us p{
    color: #B70218;
}
.focus-top-left{
    top: 0;
    left: 10px;
    border-top: 1px solid #D8D8D8;
    border-left: 1px solid #D8D8D8;
}
.focus-top-right{
    top: 0;
    right: 10px;
    border-top: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
}
.focus-bottom-left{
    bottom: 0;
    left: 10px;
    border-left: 1px solid #D8D8D8;
    border-bottom: 1px solid #D8D8D8;
}
.focus-bottom-right{
    bottom: 0;
    right: 10px;
    border-bottom: 1px solid #D8D8D8;
    border-right: 1px solid #D8D8D8;
}
.content ul{
    margin: 0px 20px;
}
.content li{
    display:block;
    padding:20px 0px; 
}
.content-info-block{
    font-size: 1.3em;
    color: #515a6e;
    position: relative;
}
.content-info-center{
    border-top: 1px dashed #ddd;
}
.content-info-block span{
    right: 0px;
    position: absolute;
}
.clear {
  clear: both;
}
.evaluation{
    margin-top: 40px;
    padding: 20px 20px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    border-radius: 4px;
}
.ivu-rate{
    font-size:34px;
}
</style>
