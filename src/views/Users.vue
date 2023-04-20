<template>
  <div>
    <div class="dv">
      <div class="box" v-for="(item, i) in data.list" :key="i">
        <div class="box1">
          {{ item.title }} <span>{{ item.unit }}</span>
        </div>
        <div class="box2">
          {{ item.value }}
        </div>
        <div class="box3">
          <span> {{ item.subTitle }}</span
          ><span>{{ item.subValue }}</span>
        </div>
      </div>
    </div>

    <div class="zhong">
      <div class="zhong1">
        <div>
          <el-icon><User /></el-icon>
        </div>
        用户
      </div>
      <div class="zhong1">
        <div>
          <el-icon><User /></el-icon>
        </div>
        用户
      </div>
      <div class="zhong1">
        <div>
          <el-icon><User /></el-icon>
        </div>
        用户
      </div>
      <div class="zhong1">
        <div>
          <el-icon><User /></el-icon>
        </div>
        用户
      </div>
      <div class="zhong1">
        <div>
          <el-icon><User /></el-icon>
        </div>
        用户
      </div>
      <div class="zhong1">
        <div>
          <el-icon><User /></el-icon>
        </div>
        用户
      </div>
      <div class="zhong1">
        <div>
          <el-icon><User /></el-icon>
        </div>
        用户
      </div>
      <div class="zhong1">
        <div>
          <el-icon><User /></el-icon>
        </div>
        用户
      </div>
    </div>
    <div class="di">
      <div class="di1"></div>
      <div class="di2">
        <div>
          <div class="right">
            <span>店铺及商品提示</span><span>店铺及商品提示</span>
          </div>
          <div class="right1">
            <div class="right2" v-for="(item, i) in data.dbu" :key="i">
              <div style="margin-top: 16px">{{ item.value }}</div>
              <div>{{ item.label }}</div>
            </div>
          </div>
        </div>
        <div>
          <div class="right">
            <span>店铺及商品提示</span><span>店铺及商品提示</span>
          </div>

          <div class="right1">
            <div class="right2" v-for="(item, i) in data.obj" :key="i">
              <div style="margin-top: 16px">{{ item.value }}</div>
              <div>{{ item.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { statistics1, statistics2 } from '@/api/api'
import { ref, reactive } from 'vue'
const data = reactive({
  list: [],
  dbu: [],
  obj: []
})
statistics1().then((res) => {
  console.log(res)
  data.list = res.data.data.panels
})
statistics2().then((res) => {
  console.log(res)
  data.dbu = res.data.data.goods
  data.obj = res.data.data.order
})
</script>

<style lang="scss" scoped>
.right1 {
  display: flex;
  width: 100%;
  height: 170px;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  .right2 {
    width: 130px;
    height: 80px;
    background-color: #f3f4f6;
    margin-left: 20px;
    text-align: center;
    margin-top: 40px;
  }
}
.right {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: #f3f4f6;
  align-items: center;
}
.di {
  width: 100%;
  height: 400px;
  display: flex;
  margin-top: 40px;
  .di1 {
    width: 48%;

    margin-left: 25px;
  }
  .di2 {
    width: 48%;

    margin-left: 25px;
  }
}
.zhong {
  display: flex;
  margin-top: 30px;
  .zhong1 {
    width: 136px;
    height: 80px;
    text-align: center;
    padding-top: 18px;
    box-sizing: border-box;
    margin-left: 25px;
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
      0 2px 4px -2px var(--tw-shadow-color);
    -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}
.quan {
  background-color: #f9fafb;
}
.dv {
  display: flex;
}
.box {
  width: 23%;
  height: 200px;
  margin-left: 23px;
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0/0.1), 0 2px 4px -2px rgb(0 0 0/0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),
    0 2px 4px -2px var(--tw-shadow-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  .box1 {
    width: 100%;
    height: 40px;
    background-color: #f3f4f6;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .box2 {
    width: 90%;
    height: 100px;
    font-size: 30px;
    border-bottom: 1px solid #ccc;
    padding-left: 20px;
    line-height: 100px;
    margin: auto;
  }
  .box3 {
    width: 90%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
}
</style>
