import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index.vue'
import CompanyDetail from '@/components/company-detail.vue'
import CommonDetail from '@/components//common/common-detail'
import CommonCategoryDetail from '@/components/common/common-category-detail';
import Test from '@/components/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'index',
      component: Index  
    },
    {
    	path:'/test',
    	name:'test',
    	component:Test
    },
    {
      path:'/company-detail',
      name:'company-detail',
      component:CompanyDetail
    },
    {
      path:'/common-detail',
      name:'common-detail',
      component:CommonDetail
    },
    {
      path:'/common-category-detail',
      name:'common-category-detail',
      component:CommonCategoryDetail
    }
  ]
})
