<template>
  <ul>
    <!-- <li>教会：{{ route.params.name }}</li>
    <li>正神：{{ route.params.god }}</li>
    <li>神之途径：{{ route.params.tarot }}</li>
    <li>所属地区：{{ route.params.address }}</li> -->
    
    <li>教会：{{ name }}</li>
    <li>正神：{{ god }}</li>
    <li>神之途径：{{ tarot }}</li>
    <li>所属地区：{{ address }}</li>

  </ul>
</template>

<script lang = 'ts' setup>
  // 不用props的用法，props只能用在params传参
  // import { useRoute } from 'vue-router';
  // let route = useRoute()

  defineProps(['name', 'god', 'tarot', 'address'])
</script>

<style>

</style>