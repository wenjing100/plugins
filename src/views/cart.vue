<template>
    <h2 ref="haha">this is cart</h2>
    
    <button @click="btnclick">点击打印标题</button>
    <stars
      :num="num"
      :size="size"
      @returnNum="returnNum"
      ref="star"
    ></stars>
    <div class="sliddel">
      <sliddel></sliddel>
    </div>
</template>

<script lang='ts'>
import { reactive, ref, toRefs} from 'vue'
  export default {
      name: 'cart',
      setup(){
          const state = reactive({
            num:3,
            size:60
          })
          const star = ref(null);
          const btnclick = ()=> {
            console.log(star.value)
          }
          const returnNum = (n)=>{
            console.log("得到星星数："+n)
          }
          return {
              ...toRefs(state),
              btnclick,
              returnNum,
              star
          }
      }
  }
</script>

<style lang='scss' scoped>
h2{
    color: violet;
}
.sliddel{
  width: 200px;
  height: 100px;
  border: 1px dashed tomato;
  overflow: hidden;
}
</style>