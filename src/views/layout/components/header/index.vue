<template>
  <div
    class="dark:bg-zinc-800 dark:border-b-zinc-700 w-full bg-white border-b border-b-zinc-200 px-2 py-1"
  >
    <div class="flex items-center">
      <img
        v-lazy
        class="guide-home h-4 cursor-pointer mr-2"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
        @click="onToHome"
      />
      <header-search-vue class="mr-1"></header-search-vue>
      <header-theme-vue class="mr-1"></header-theme-vue>
      <header-my-vue></header-my-vue>
    </div>
  </div>
</template>

<script setup>
import headerSearchVue from './header-search/index.vue'
import headerThemeVue from './header-theme.vue'
import headerMyVue from './header-my.vue'
import { useRouter } from 'vue-router'
import { defineOptions } from 'vue'

defineOptions({
  name: 'header-cmp'
})

const router = useRouter()
const onToHome = () => {
  router.push('/')
}
</script>
