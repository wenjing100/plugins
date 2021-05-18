<template>
<div class="con">
  <myselector
    placeholder="请选择水果"
    :data="selectorData"
    @setitemvalue="receiveValue"
    ></myselector>
  <div class="other">
    <button @click="clickHandler">点击显示</button>
  </div>
  <jumpoutmsg></jumpoutmsg>
</div>
   
</template>

<script lang='ts'>
import selectorData from '../data/selectorData';
import jumpoutmsg from '../libs/Base-jump-out-msg/jumpOmsg.vue'
import { Toast } from '@/libs/toast-02新';
  export default {
      name: 'me',
      components:{
        jumpoutmsg
      },
      setup(){
        const receiveValue =(value)=>{
          console.log(value)
        }
        const clickHandler = ()=>{
          Toast({
            message:'哈哈哈哈哈哈',
            delay:2000
          })
        }
        return {
          selectorData,
          receiveValue,
          clickHandler,
        }
      }
  }
</script>
<style lang='scss' scoped>
.con{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-self: center;
  padding-top: 60px;
  .other{
    margin-left: 20px;
  }
}
</style>