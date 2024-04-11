<template>
  <div class="w-full">
    <m-search
      v-model="inputValue"
      @search="onSearchHandler"
      @clear="onSearchHandler"
    >
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
        <!-- 推荐主题 -->
        <theme-vue v-show="!inputValue"></theme-vue>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { defineOptions, ref } from 'vue'
import hintVue from './hint.vue'
import historyVue from './history.vue'
import themeVue from './theme.vue'
import { useStore } from 'vuex'

defineOptions({ name: 'header-search' })

const inputValue = ref('')
const store = useStore()

// 搜索的回调事件
const onSearchHandler = (val) => {
  console.log('【onSearchHandler】', val)
  inputValue.value = val
  if (val) {
    // 保存历史记录
    store.commit('search/addHistory', val)
    // 触发 searchText 变化
    store.commit('app/changeSearchText', val)
  }
}
</script>

<style lang="scss" scoped></style>
