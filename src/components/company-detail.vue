<template>
    <div>
        <Layout>
            <iHeader></iHeader>
            <div class="clear">
            </div>
            <Content :style="{padding:'70px 50px'}">
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
    margin-top: 20px;
    padding: 40px 20px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    border-radius: 4px;
}
.clear {
  clear: both;
}
</style>
