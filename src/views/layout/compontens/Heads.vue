<template>
  <div class="f-header">
    <span class="logo"
      ><el-icon><ElemeFilled /></el-icon>积云商城</span
    >
    <span>
      <!-- 控制左侧菜单宽带 -->

      <el-icon class="icon-btn" @click="store.commit('ce')"><Fold /></el-icon>
    </span>
    <span>
      <el-tooltip
        class="box-item"
        effect="dark"
        content="刷新"
        placement="top-start"
      >
        <!-- 刷新 -->
        <el-icon class="icon-btn" @click="sx"><Refresh /></el-icon>
      </el-tooltip>
    </span>
    <div class="ml-auto flex items-center">
      <el-tooltip
        class="box-item"
        effect="dark"
        content="全屏"
        placement="top-start"
      >
        <!-- 全屏 -->
        <el-icon class="icon-btn" @click="toggle"><FullScreen /></el-icon>
      </el-tooltip>

      <!-- 下拉菜单 -->
      <el-dropdown class="dropdown" @command="handleCommand">
        <span class="el-dropdown-link">
          <el-avatar class="mr-2" :size="25" :src="$store.state.user.avatar" />
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">修改密码</el-dropdown-item>
            <el-dropdown-item command="b">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { removeToken } from '@/composables/auth'
import { useRouter } from 'vue-router'
import { useFullscreen } from '@vueuse/core'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const { isFullscreen, toggle } = useFullscreen()
const sx = () => {
  location.reload()
}

const handleCommand = (command) => {
  switch (command) {
    case 'a':
      console.log('修改密码')
      break
    case 'b':
      tc()
  }
}
const tc = () => {
  removeToken('token')
  router.push('/login')
}
</script>

<style scoped>
.f-header {
  height: 64px;
  @apply flex items-center text-light-50 bg-indigo-700 fixed left-0 right-0 top-0;
}
.logo {
  width: 250px;
  @apply flex items-center justify-center text-xl font-thin;
}
.icon-btn {
  @apply flex items-center justify-center;
  width: 42px;
  height: 64px;
  cursor: pointer;
}
.icon-btn:hover {
  @apply bg-indigo-600;
}
.dropdown,
.el-dropdown-link {
  @apply flex items-center justify-center mx-3 text-light-50;
  height: 64px;
  cursor: pointer;
}
</style>
