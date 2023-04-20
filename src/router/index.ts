// 引入vue-router
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '@/views/si.vue'
import users from '@/views/Users.vue'
import index from '@/view/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/index',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: '/goods/list',
        component: () => import('@/views/ShopGl/GoodList.vue'),
        meta: {
          title: '商品管理'
        }
      },
      {
        path: '/category/list',
        component: () => import('@/views/ShopGl/CategoryList.vue'),
        meta: {
          title: '分类管理'
        }
      },
      {
        path: '/',
        component: () => import('@/views/Users.vue'),
        meta: {
          title: '后台首页'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/si.vue')
  }
]

// 创建路由
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 导出路由
export default router
