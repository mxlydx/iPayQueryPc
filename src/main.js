// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Index from './components/index.vue';
import router from './router';
import store from './store/store.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
require('./mock.js')
Vue.config.productionTip = false
Vue.use(iView);
Vue.use((Vuex));
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { Index }
});
