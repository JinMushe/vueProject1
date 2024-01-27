# 学习vue3的个人笔记
## 组合式API写vue代码
&emsp;&emsp;组合式API是vue3的一大特点，它写在setup里面，要有返回值，或者在script标签中添加setup属性，这样在这个标签里会自动有返回值
```
<script lang = 'ts' setup name = 'Person'>
import { ref } from 'vue'
let Members = ref([
        {name:'克莱恩莫雷蒂', age:18, tarot:'占卜家'},
        {name:'奥黛丽霍尔', age:17, tarot:'观众'},
        {name:'格尔曼斯帕罗', age:19, tarot:'密偶大师'}
    ])

</script>
```
&emsp;&emsp;以上代码用ref使得我定义的对象数组可以动态控制，由于在含有setup属性的script标签里可以动态返回，所以没有`return`返回

## computed计算属性
&emsp;&emsp;在组合式API中，computed计算属性的使用方法有两种，第一种方法如下：
```
let fullName = computed(()=>{
    return firstName.value + lastName.value
  })
```
&emsp;&emsp;这种方法有一个弊端，那就是计算属性fullName是一个不可变的ref对象，要想改变fullName的值，需要使用getter和setter方法，这两个方法也是计算属性的第二种写法，第二种方法如下：
```
let fullName = computed({
    get(){
      return firstName.value + lastName.value
    },
    set(value){
      fullName.value = value
    }
  })
```
&emsp;&emsp;这种方法的优势就是可以通过setter和个getter改变fullName的值。
