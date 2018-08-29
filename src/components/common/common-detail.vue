<template>
<div>
    <iHeader></iHeader>
    <div class="clear"></div>
    <Content :style="{padding:'30px 70px 80px'}">
        <div class="info-area">
            <div class="content">
                <ul>
                    <li class="content-info-block">
                        <label>发卡行名称及机构代码</label>
                        <span>中国银行 (01040000)</span>
                    </li>
                    <li class="content-info-block content-info-center">
                        <label>银行卡名</label>
                        <span>长城电子借记卡</span>
                    </li>
                    <li class="content-info-block content-info-center">
                        <label >卡号长度</label>
                        <span>19</span>
                    </li>
                    <li class="content-info-block content-info-center">
                        <label>银行卡全号段样式</label>
                        <span>601382xxxxxxxxxxxxx</span>
                    </li>
                    <li class="content-info-block content-info-center">
                        <label>卡种</label>
                        <span>借记卡</span>
                    </li>
                </ul>
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
    name:'company-detail',
    components:{
      'iHeader':header,
      'iFooter':footer
    },
    data(){
        return {

        }
    }
}
</script>
<style>
.content{
    /* margin-top: 40px; */
    padding: 20px 20px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    border-radius: 4px;
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
.content ul{
    margin: 0px 20px;
}
.content li{
    display:block;
    padding:20px 0px; 
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
.ads{
    right: 85px;
    top: 90px;
    margin-top: 20px;
    padding: 20px 10px;
    width: 200px;
    height: 200px;
    border: 1px solid #dcdee2;
    box-shadow: 0 1px 3px rgba(0,0,0,.25);
    border-radius: 4px;
    text-align: center;
    position: fixed;
}
.bar-code{
    width: 130px;
    height: 130px;
}
.focus-us{
    position: relative;
    padding: 5px;
    width: 160px;
    margin: 0px auto;
}
.focus-us i{
    position: absolute;
    display: block;
    width: 5px;
    height: 5px;
}
.focus-us p{
    color: #B70218;
}
.focus-top-left{
    top: 0;
    left: 10px;
    border-top: 2px solid #D8D8D8;
    border-left: 2px solid #D8D8D8;
}
.focus-top-right{
    top: 0;
    right: 10px;
    border-top: 2px solid #D8D8D8;
    border-right: 2px solid #D8D8D8;
}
.focus-bottom-left{
    bottom: 0;
    left: 10px;
    border-left: 2px solid #D8D8D8;
    border-bottom: 2px solid #D8D8D8;
}
.focus-bottom-right{
    bottom: 0;
    right: 10px;
    border-bottom: 2px solid #D8D8D8;
    border-right: 2px solid #D8D8D8;
}
</style>

