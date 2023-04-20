<template>
  <div>
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="Date" width="120">
        <template #default="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column property="name" label="Name" width="120" />
      <el-table-column
        property="address"
        label="Address"
        show-overflow-tooltip
      />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { category, goods } from '@/api/api'
import { ref } from 'vue'
const tableData = []
const query = {
  page: 1
}
goods(query).then((res) => {
  console.log(res)
})
</script>

<style lang="less" module></style>
