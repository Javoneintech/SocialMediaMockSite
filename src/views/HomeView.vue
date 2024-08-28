<script setup>
import PostComponent from '@/components/PostComponent.vue';
import { reactive } from 'vue';

const postArray = reactive([])

fetch ('https://66ccd18b8ca9aa6c8cc8cbc0.mockapi.io/post')
.then (response => {
  return response.json()
})
.then (post => {
postArray.push(...post)

  console.log(post)
})
</script>

<template>

  <body>
    <PostComponent v-for="item in postArray" :post="item"/>
  </body>
</template>

<style scoped>


</style>