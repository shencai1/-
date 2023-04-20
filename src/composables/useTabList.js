import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate, useRouter } from 'vue-router'
import { useCookies } from '@vueuse/integrations/useCookies'

export function useTabList() {
  const cookie = useCookies()
  const router = useRouter()
  const route = useRoute()

  const activeTab = ref(route.path)
  const tabList = ref([
    {
      title: '后台首页',
      path: '/'
    }
  ])

  onBeforeRouteUpdate((to, from) => {
    activeTab.value = to.path
    addTab({
      title: to.meta.title,
      path: to.path
    })
  })

  const addTab = (tab) => {
    let noTab = tabList.value.findIndex((item) => item.path === tab.path) == -1
    if (noTab) {
      tabList.value.push(tab)
    }

    cookie.set('tabList', tabList.value)
  }

  const removeTab = (t) => {
    let a = activeTab.value
    let tabs = tabList.value

    if (a === t) {
      tabs.forEach((item, index) => {
        if (t === item.path) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            a = nextTab.path
          }
        }
      })
    }

    activeTab.value = a

    tabList.value = tabList.value.filter((item) => item.path != t)

    cookie.set('tabList', tabList.value)
  }

  const changeTab = (t) => {
    router.push(t)
  }

  const initTabList = () => {
    let tabs = cookie.get('tabList')
    if (tabs) {
      tabList.value = tabs
    }
  }
  initTabList()

  const handleCommand = (command) => {
    console.log(command)
    if (command == 'closeAll') {
      activeTab.value = '/'

      tabList.value = [
        {
          title: '后台首页',
          path: '/'
        }
      ]
    } else {
      tabList.value = tabList.value.filter(
        (item) => item.path === '/' || item.path === activeTab.value
      )
    }

    cookie.set('tabList', tabList.value)
  }

  return {
    activeTab,
    tabList,
    removeTab,
    changeTab,
    handleCommand
  }
}
