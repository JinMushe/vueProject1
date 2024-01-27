# 学习vue3的个人笔记
## 组合式API写vue代码
组合式API是vue3的一大特点，它写在setup里面，要有返回值，或者在script标签中添加setup属性，这样在这个标签里会自动有返回值
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
以上代码用ref使得我定义的对象数组可以动态控制，由于在含有setup属性的script标签里可以动态返回，所以没有`return`返回