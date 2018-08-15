<template>
	<div>
	    <div >
	        <Layout>
	            <Header>
	                <Menu mode="horizontal" theme="light" active-name="1">
	                    <div class="layout-logo"></div><span class="logo-text"><Icon type="logo-designernews" />&nbsp;&nbsp;支付查</span>
	                    <div class="layout-nav">
	                        <MenuItem name="1">
	                            <Icon type="ios-navigate"></Icon>
	                            首页
	                        </MenuItem>
	                    </div>
	                </Menu>
	            </Header>
	            <div class="clear">
	            </div>
	            <Content :style="{padding:'70px 50px'}">
					<h1 class="slogan">支付就用支付查</h1>
					<div class="search-area">
            			<input type="search" class="search-box" />
            			<button class="search-btn"><Icon type="ios-search" />&nbsp;查 一 下</button>
        			</div>
        			<div class="ads-box">
        				<img src="../assets/active_banner@2x.62a4495.png"/>
        			</div>
	            </Content>
	            <Footer class="layout-footer-center" >2017-2018 &copy; 山东微融文化传媒有限公司</Footer>
	        </Layout>
    	</div>
	    
	    <!--<p>Change theme</p>
	    <RadioGroup v-model="theme1">
	        <Radio label="light"></Radio>
	        <Radio label="dark"></Radio>
	        <Radio label="primary"></Radio>
	    </RadioGroup>-->
	    
    </div>
</template>
<script>
    export default {
    	name:"index",
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
<style scoped>
	body{
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		font-size:20px;
		padding: 0;
		margin: 0;
	}
.layout{
    border: 1px solid #d7dde4;
    background: #fff;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.ivu-layout{
	background: #FFFFFF;
}
/*搜索框区域*/
.search-area{
	padding: 5px 0px;
	text-align: center;
	line-height: 57px;
	position: relative;
}
/*搜索框样式*/
.search-box{
	width: 60%;
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
    transition: border .2s ease-in-out,
    			background .2s ease-in-out,
    			box-shadow .2s ease-in-out;
    			
}
.search-btn{
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
    transition: color .2s linear,background-color .2s linear,border .2s linear,box-shadow .2s linear;
    color: #fff;
    background-color: #2d8cf0;
    border-color: #2d8cf0;
}
/*广告图片*/
.ads-box{
	width: 810px;
	height: 277px;
	text-align: center;
	overflow: hidden;
	margin: 65px auto 170px;
}
.ads-box img{
	width: 100%;
	height: 100%;
}
/*口号*/
.slogan{
	text-align: center;
	font-size: 30px;
	height: 50px;
	margin: 70px 0px 10px 0px;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    color: #fff;
}
.logo-text{
	position: absolute;
	top: 0px;
	left: 18px;
	color: #FFFFFF;
}
.clear{
	clear:both ;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
.ivu-layout-header{
	background: #FFFFFF;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 9999;
}
</style>