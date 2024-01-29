<template>
  <div class="app">
    <h1 class="title">塔罗会</h1>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/Members" active-class="click">成员</RouterLink>
      <RouterLink to="/RelevantChurches" active-class="click">相关教会</RouterLink>
      <RouterLink to="/RelatedWays" active-class="click">有关途径</RouterLink>
    </div>
    <!-- 内容区 -->
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>


<script lang="ts" setup name = 'App'>
  import { onMounted } from 'vue';
  import { RouterView, RouterLink, useRouter} from 'vue-router';
  //编程时路由导航
  // 获取路由器
  const router = useRouter()
  // 过三秒自动跳转到教会页面
  onMounted(()=>{
    setTimeout(() => {
      router.push('/RelevantChurches') 
    }, 3000);
  })

</script>

<style>
  .title {
    text-align: center;
    word-spacing: 5px;
    margin: 30px 0;
    height: 70px;
    line-height: 70px;
    background-image: linear-gradient(45deg, gray, white);
    border-radius: 10px;
    box-shadow: 0 0 2px;
    font-size: 30px;
  }
  .navigate {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
  }
  .navigate a {
    display: block;
    text-align: center;
    width: 110px;
    height: 40px;
    line-height: 40px;
    border-radius: 10px;
    background-color: gray;
    text-decoration: none;
    color: white;
    font-size: 18px;
    letter-spacing: 5px;
  }
  .navigate a.click {
    background-color: gainsboro;
    color:gray;
    font-weight: 900;
    text-shadow: 0 0 1px black;
    font-family: 微软雅黑;
  }
  .content {
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 10px;
    width: 90%;
    height: 400px;
    border: 1px solid;
  }
</style>