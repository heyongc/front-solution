<template>
  <div class="w-full">
    <m-search v-model="inputValue">
      <template #dropdown>
        <div>dropdown</div>
      </template>
    </m-search>
  </div>
</template>

<script setup>
import { defineOptions, ref } from 'vue'
defineOptions({ name: 'header-search' })

const inputValue = ref('')
</script>

<style lang="scss" scoped></style>
