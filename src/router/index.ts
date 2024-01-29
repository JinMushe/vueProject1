// 创建一个路由器，并暴露出去

// 第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'
// 引入一个一个可能要呈现组件
import Members from '@/page/Members.vue'
import RelevantChurches from '@/page/RelevantChurches.vue'
import RelatedWays from '@/page/RelatedWays.vue'
import Detail from '@/page/Detail.vue'
import DetailChurches from '@/page/DetailChurches.vue'

// 第二步：创建路由器
const router = createRouter({
  history:createWebHistory(), //路由器的工作模式（稍后讲解）
  routes:[ //一个一个的路由规则
    {
      path:'/Members',
      component:Members,
      children:[
        {
          path:'Detail',
          component:Detail
        }
      ]
    },
    {
      path:'/RelevantChurches',
      component:RelevantChurches,
      children:[
        {
          name:'xiang',
          // params参数传参必须占位
          path:'DetailChurches/:name/:god/:tarot/:address',
          component:DetailChurches,
          props:true
        }
      ]
      
    },
    {
      path:'/RelatedWays',
      component:RelatedWays
    },
    // 重定向
    {
      path:'/',
      redirect:'/Members'
    }
  ]
})

// 暴露出去router
export default router
