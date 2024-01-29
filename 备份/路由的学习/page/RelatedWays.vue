<template>
  <ul>
    <li v-for="p, index of ways" key="index">{{ p }}</li>
  </ul>
</template>

<script lang = 'ts' setup>
  let ways = [
    '占卜家', 
    '学徒', 
    '偷盗者', 
    '秘祈人', 
    '观众', 
    '水手', 
    '歌颂者', 
    '阅读者',
    '战士',
    '不眠者'
  ]

</script>
<style>

</style>