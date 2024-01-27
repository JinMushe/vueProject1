<template>
  <div class="p">
    <ul class="person">
      <h2>成员</h2>
      <li v-for="(p, index) of Members" :key="index">{{ p.name }}-{{ p.age }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name:'Person',
  data(){
    return{
      Members:[
        {name:'克莱恩莫雷蒂', age:18, tarot:'占卜家'},
        {name:'奥黛丽霍尔', age:17, tarot:'观众'},
        {name:'格尔曼斯帕罗', age:19, tarot:'密偶大师'}
      ]
    }
  }
}
</script>

<style>
  .person{
    background-color: skyblue;
    box-shadow: 0, 0, 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>