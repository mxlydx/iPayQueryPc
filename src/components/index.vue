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
					<h1 class="slogan">查支付就用支付查</h1>
					 <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="60">
						<FormItem label="" prop="keyword">
	            			<Input  placeholder="请输入您要查询的关键字"></Input>
	        			</FormItem>
        			</Form>
	            </Content>
	            <Footer class="layout-footer-center" :style="{margin: '20px 0'}">2017-2018 &copy; 山东微融文化传媒有限公司</Footer>
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
.main{
	padding: 70px 50px;
}
/*搜索框样式*/
.ivu-input{
	width: 70%;
	height: 45px;
}
/*口号*/
.slogan{
	text-align: center;
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
    left: 20px;
    color: #fff;
}
.logo-text{
	position: absolute;
	top: 0px;
	left: 38px;
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