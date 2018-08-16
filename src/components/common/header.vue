<template>
     <Header>
          <Menu mode="horizontal" theme="light" active-name="1">
            <div class="layout-logo"></div>
            <span class="logo-text">
              <Icon type="logo-designernews" />&nbsp;&nbsp;支付查</span>
            <div class="layout-nav">
              <MenuItem>
                <Icon type="ios-navigate"></Icon>
                首页
              </MenuItem>
            </div>
          </Menu>
        </Header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  color: #fff;
}
.logo-text {
  position: absolute;
  top: 0px;
  left: 18px;
  color: #ffffff;
}
.clear {
  clear: both;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.ivu-layout-header {
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
}
</style>

