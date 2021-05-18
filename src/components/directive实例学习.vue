<template>
      <h2>hello</h2>
  <div class="container"
    v-tab="{
      className:'btn',
      activeClass:'active',
      curIndex
      }"
    @click="clickitem($event)"
  >
    <button data-index="0" class="btn">1a</button>
    <button data-index="1" class="btn">2a</button>
    <button data-index="2" class="btn">3a</button>
  </div>
  
</template>

<script lang="ts">
import { tab } from '../directive'
import { ref } from 'vue'
  export default{
    name:'testdirective',
    directives:{
      tab
    },
    setup(){
      const curIndex = ref(0);
      const clickitem = (e)=>{
        let tar = e.target;
        if(tar.className === 'btn'){
          curIndex.value =parseInt(tar.dataset.index);  
        }
      }
      return {
        clickitem,
        curIndex
      }
    }
  }
</script>


<style lang='scss' scoped>
.container{
  width: 180px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  .btn{
    width: 45px;
    &.active{
      background: green;
      color:#fff;
    }
  }
  
}
</style>