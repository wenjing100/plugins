<template>
    <button
     :class="['base-btn',stybtn]"
     @click="btnclick"
     >
        <slot></slot>
    </button>
</template>

<script lang='ts'>
import { defineComponent} from 'vue'
  export default defineComponent({
      name: 'mybutton',
      props:{
        stybtn:String
      },
      setup(){
        const btnclick = ()=>{
          console.log('触发点击了')
        }
        return {
            btnclick
        }
      }
  })
</script>

<style lang='scss' scoped>
.base-btn{
    border: none;
    outline: none;
    min-width: 30px;
    min-height: 20px;
    color: #fff;
    border-radius: 2px;
    padding: 8px 10px;
    background: palevioletred;
}
.base-btn.btn-primary{
    background: #000;
}
.base-btn.btn-danger{
    color: #000;
    background: orange;
}
.base-btn.btn-success{
    color: #000;
    background: green;
}
</style>