<template>
  <div class="RelevantChurches">
    <ul>
      <li v-for="p of churches" key="p.id">
        <!-- 使用params传参 -->
        <RouterLink :to="{
          name:'xiang',
          params:{
            name:p.name,
            god:p.god,
            tarot:p.tarot,
            address:p.address
          }
        }"
        >
        {{ p.name }}
      </RouterLink>
      </li>
    </ul>
    
    <div class="churches-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang = 'ts' setup>
  let churches = [
    {id:'OrthodoxChurch001', name:'黑夜教会', god:'黑夜女神', tarot:'黑夜', address:'鲁恩王国'},
    {id:'OrthodoxChurch002', name:'风暴教会', god:'暴君', tarot:'水手', address:'鲁恩王国'},
    {id:'OrthodoxChurch003', name:'蒸汽教会', god:'蒸汽与机械之神', tarot:'工匠', address:'鲁恩王国'},
    {id:'OrthodoxChurch004', name:'愚者教会', god:'愚者', tarot:'占卜家', address:'拜亚姆'}
  ]
</script>

<style>
  .RelevantChurches {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
  .RelevantChurches ul {
    margin-top: 30px;
    list-style: none;
    padding-left: 10px;
  }
  .RelevantChurches li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: gray;
    text-shadow: 0 0 1px rgb(48, 47, 47);
  }
  .churches-content {
    width: 70%;
    height: 90%;
    border: 1px solid;
    margin-top: 20px;
    border-radius: 10px;
  }
</style>