<template>
  <h2>你的神之途径是:{{ myWay}}</h2>
  <button @click="getWay">点击获得你的神之途径</button>
</template>

<script lang = 'ts' setup>
  import { ref } from 'vue';
  import { useTheWayOfGodStore } from '@/store/TheWayOfGod'

  const TheWayOfGodStore = useTheWayOfGodStore()
  // mutate是一个有事件的类型的对象，state是当前的store
  TheWayOfGodStore.$subscribe((mutate, state)=>{
    console.log('数据发生改变');
  })
// 属性
  let myWay = ref('')

// 方法
  function getWay(){
    const num = Math.floor(Math.random()*TheWayOfGodStore.TheWayOfGod.length)
    myWay.value = TheWayOfGodStore.TheWayOfGod[num].Sequence9
  }

</script>

<style>

</style>