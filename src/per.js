import router from '@/router'
import { getToken } from '@/composables/auth'
import { showFullLoading, hideFullLoading } from '@/composables/util'
router.beforeEach((to, from, next) => {
  const token = getToken()
  if (!token && to.path != '/login') {
    showFullLoading()
    return next({
      path: '/login'
    })
  }
  if (token && to.path == '/login') {
    return next({
      path: from.path ? from.path : '/'
    })
  }
  let title = (to.meta.title ? to.meta.title : '') + '九月云后台'
  document.title = title
  next()
})
router.afterEach((to, from) => {
  // 关闭loading
  hideFullLoading()
})
