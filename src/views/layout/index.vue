<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header class=""><heads></heads></el-header>
        <el-container>
          <el-aside width="200px">
            <left></left>
          </el-aside>
          <el-main>
            <right></right>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup lang="ts">
import heads from './compontens/Heads.vue'
import left from './compontens/Left.vue'
import right from './compontens/Right.vue'
</script>
<style lang="less" module></style>
