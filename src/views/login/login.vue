<template>
  <div>
    <el-row class="bg-blue-500" style="height: 100vh">
      <el-col :lg="16" :md="12" class="right">
        <div>
          <div class="box">欢迎光临</div>
        </div>
      </el-col>
      <el-col :lg="8" :md="12" class="left">
        <h2 class="hui">欢迎回来</h2>
        <div class="zhong">
          <span class="spa"></span>
          <span>账号密码登录</span>
          <span class="spa"></span>
        </div>
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          class="demo-ruleForm"
          :size="formSize"
          status-icon
        >
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="请输入用户名">
              <template #prefix>
                <el-icon>
                  <User />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="ruleForm.password" placeholder="请输入密码">
              <template #prefix>
                <el-icon>
                  <Lock />
                </el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="w-[250px]"
              color="#626aef"
              round
              type="primary"
              @click="submitForm(ruleFormRef)"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { login, getinfo } from '../../api/api.js'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { setToken } from '@/composables/auth'
const router = useRouter()
const store = useStore()
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
  username: 'admin',
  password: 'admin'
})

const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      login(ruleForm).then((res) => {
        console.log(res)
        setToken(res.data.data.token)
        getinfo().then((res) => {
          console.log(res)
          store.commit('user', res)

          store.commit('left', res.data.data.menus)
        })
        router.push('/index')
      })
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped>
.spa {
  @apply h-[1px] w-16 bg-gray-200 h-[1px] w-16 bg-gray-200;
}
.zhong {
  @apply my-5 text-gray-300 flex items-center justify-center space-x-2;
}

.hui {
  @apply font-bold text-3xl text-gray-800;
}

.right {
  @apply flex justify-center items-center;
}

.box {
  @apply text-light-50;
}

.left {
  @apply bg-light-50 flex justify-center items-center flex-col;
}
</style>
