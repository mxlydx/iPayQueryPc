<template>
  <Footer class="layout-footer-center" v-model="data">
    <p>{{data}} &copy; 山东微融文化传媒有限公司 </p>
    <p> <a href="http://www.miit.gov.cn/" target="_blank" style="color: #4d5669">鲁ICP备16029435号-1 </a> </p>
  </Footer>
</template>
<script>
  export default {
    name: 'iFooter',
    computed: {
      data: {
        get() {
            let time = new Date();
            let thisYear = time.getFullYear();
            return "2018" + " - " + thisYear;
        }
      }
    },
    methods: {
    }
  }
</script>
<style scoped>
  .layout-footer-center {
    text-align: center;
    position: fixed;
    bottom: 0px;
    width: 100%;
  }
</style>
