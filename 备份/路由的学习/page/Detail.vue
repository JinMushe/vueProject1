<template>
  <ul>
    <li>塔罗会编号：{{ route.query.id }}</li>
    <li>名字：{{ route.query.name }}</li>
    <li>年龄：{{ route.query.age }}</li>
    <li>神之途径：{{ route.query.tarot }}</li>
  </ul>
</template>

<script lang = 'ts' setup>
  import { useRoute } from 'vue-router';
  let route = useRoute()
</script>

<style>

</style>