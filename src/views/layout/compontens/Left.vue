<template>
  <div class="f-menu" :style="{ width: store.state.asidewidth }">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      router
      :collapse="isCollapse"
    >
      <el-sub-menu v-for="(item, i) in list" :key="i" :index="item.name">
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="(eye, index) in item.child"
          :key="index"
          :index="eye.frontpath"
        >
          <el-icon>
            <component :is="eye.icon"></component>
          </el-icon>
          <span>{{ eye.name }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const list = computed(() => store.state.left)
const isCollapse = computed(() => !(store.state.asidewidth == '200px'))
</script>
<style scoped>
.f-menu {
  transition: all 0.2s;
  top: 64px;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
  @apply shadow-md fixed bg-light-50;
}
.f-menu::-webkit-scrollbar {
  width: 0;
}
</style>
