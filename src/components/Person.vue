<template>
  <div class="p">
    <ul class="person">
      <h2>成员</h2>
      <li v-for="(p, index) of Members" :key="index">{{ p.name }}-{{ p.age }}</li>
    </ul>
    <h2>{{fullName}}</h2>
  </div>
</template>


<script lang = 'ts' setup name = 'Person'>
  import { ref, computed } from 'vue'
  let Members = ref([
        {name:'克莱恩莫雷蒂', age:18, tarot:'占卜家'},
        {name:'奥黛丽霍尔', age:17, tarot:'观众'},
        {name:'格尔曼斯帕罗', age:19, tarot:'密偶大师'}
      ])
  let firstName = ref('克莱恩')
  let lastName = ref('莫雷蒂')


  // let fullName = computed(()=>{
  //   return firstName.value + lastName.value
  // })
  let fullName = computed({
    get(){
      return firstName.value + lastName.value
    },
    set(value){
      fullName.value = value
    }
  })
</script>

<style>
  .person{
    background-color: skyblue;
    box-shadow: 0, 0, 10px;
    border-radius: 10px;
    padding: 20px;
  }
</style>