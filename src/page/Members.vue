<template>
  <div class="Members">
    <ul>
      <li v-for="p of Members" key="p.id">
        <!-- 使用query传参 -->
        <RouterLink :to="{
          path:'/Members/Detail',
          query:{
            id:p.id,
            name:p.name,
            age:p.age,
            tarot:p.tarot
          }
        }"
        >
          {{ p.name }}
        </RouterLink>
      </li>
    </ul>
    <!-- 展示详细区 -->
    <div class="new-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang = 'ts' setup>
  import {ref} from "vue"
  let Members = ref([
        {id:'Members-of-the-Tarot-Society01', name:'克莱恩莫雷蒂', age:18, tarot:'占卜家'},
        {id:'Members-of-the-Tarot-Society02', name:'夏洛克莫里亚蒂', age:18, tarot:'魔术师'},
        {id:'Members-of-the-Tarot-Society03', name:'格尔曼斯帕罗', age:19, tarot:'密偶大师'},
        {id:'Members-of-the-Tarot-Society04', name:'道恩唐泰斯', age:50, tarot:'诡法师'},
        {id:'Members-of-the-Tarot-Society05', name:'梅林赫尔墨斯', age:29, tarot:'奇迹师'},
        {id:'Members-of-the-Tarot-Society06', name:'梅丽莎莫雷蒂', age:15, tarot:'工匠'},
        {id:'Members-of-the-Tarot-Society07', name:'莎伦', age:16, tarot:'冤魂'},
        {id:'Members-of-the-Tarot-Society08', name:'奥黛丽霍尔', age:17, tarot:'观众'}
      ])
</script>

<style>
  .Members {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .Members ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
  }
  .Members li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: gray;
    text-shadow: 0 0 1px rgb(48, 47, 47);
  }
  .new-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>