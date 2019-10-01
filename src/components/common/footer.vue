<template>
  <Footer class="layout-footer-center" v-model="data">{{data}} &copy; 山东微融文化传媒有限公司🇨🇳</Footer>
</template>
<script>
  export default {
    name: 'iFooter',
    computed: {
      data: {
        get() {
            let time = new Date();
            let thisYear = time.getFullYear();
            let lastYear = thisYear - 1;
            return lastYear + "-" + thisYear;
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
