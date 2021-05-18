<template>
    <h2 class="aa">创建dom可行吗？{{text}}</h2>
</template>

<script lang='ts'>
import { defineComponent} from 'vue'
  export default defineComponent({
      name: 'fuzhu',
      props:{
        text:{
          type:String,
        }
      }
  })
</script>

<style lang='scss' scoped>
.aa{
  color:red;
  font-size: 30px;
}
</style>