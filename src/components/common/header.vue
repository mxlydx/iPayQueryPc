<template>
  <Header>
    <Menu mode="horizontal" theme="light" active-name="1">
      <div class="layout-logo" @click="backup"></div>
      <span class="logo-text" @click="backup">
              <Icon type="social-designernews"/>&nbsp;&nbsp;支付查
            </span>
      <div class="layout-nav">
        <Menu-item name='index'>
          <!--                <Icon type="ios-navigate"></Icon>-->
          <a href="#" @click="backup" class="menu-link">首页</a>
        </Menu-item>
        <Menu-item name ="zfzj">
          <a href="http://www.zfzj.cn" target="_blank" class="menu-link">支付之家</a>
        </Menu-item>
      </div>
    </Menu>
  </Header>
</template>
<script>
  export default {
    name: 'iHeader',
    methods: {
      backup() {
        this.$router.push({
          path: 'index'
        });
        this.$store.commit('spin', true);
        console.log(this.$store.state.spin);
        setTimeout( ()=> {
          this.$store.commit('spin', false);
          console.log(this.$store.state.spin);
        }, 1000)
      }
    },
    mounted() {
    }
  }
</script>
<style scoped>
  .layout-logo {
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    color: #fff;
    cursor: pointer;
  }

  .logo-text {
    position: absolute;
    top: 0px;
    left: 18px;
    font-weight: bold;
    font-size: larger;
    color: #2d8cf9;
    cursor: pointer;
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
    background: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
  }
  .menu-link {
    color: #000;
  }
</style>

