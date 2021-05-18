<template>
<div class="swiper">
 <!--  <my-carsousel
    :autoplay="true"
    :duration="2000"
    :ini="0"
    :hasDot="true"
    :hasDirector="true"
    dotBgColor="#ff5000"
  ></my-carsousel> -->


</div>
    
</template>

<script lang='ts'>
import { getCurrentInstance, onBeforeMount,onMounted,reactive,toRefs } from 'vue';
import fuzhu from '../components/辅助.vue';
  export default {
      name: 'home',
      setup(){
        const instance = getCurrentInstance();
        const state = reactive({
         
        })
        
        onMounted(()=>{
          
        })
        
        return {
          ...toRefs(state)
        }
      }
  }
</script>

<style lang='scss' scoped>
.swiper{
  width: 500px;
  height: 350px;
}

</style>