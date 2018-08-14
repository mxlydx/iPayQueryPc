<template>
	<div>
	    <div >
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="light" active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            首页
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <Content :style="{padding: '50px 50px'}">
            </Content>
            <Footer class="layout-footer-center" :style="{margin: '20px 0'}">2017-2018 &copy; 山东微融文化传媒有限公司</Footer>
        </Layout>
    </div>
	    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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
.layout{
    border: 1px solid #d7dde4;
    background: #fff;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
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