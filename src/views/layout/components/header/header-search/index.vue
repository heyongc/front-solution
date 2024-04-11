<template>
  <div class="w-full">
    <m-search v-model="inputValue">
      <template #dropdown>
        <!-- 搜索提示 -->
        <hint-vue
          :searchText="inputValue"
          v-show="inputValue"
          @itemClick="onSearchHandler"
        >
        </hint-vue>
        <!-- 最近搜索 -->
        <history-vue
          v-show="!inputValue"
          @itemClick="onSearchHandler"
        ></history-vue>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { defineOptions, ref } from 'vue'
import hintVue from './hint.vue'

defineOptions({ name: 'header-search' })

const inputValue = ref('')

// 搜索的回调事件
const onSearchHandler = (val) => {
  inputValue.value = val
}
</script>

<style lang="scss" scoped></style>
