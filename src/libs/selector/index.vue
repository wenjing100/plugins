<template>
  <div class="myselector" v-focus>
    <selectorinput 
      :placeholder="placeholder"
      @inputoption="inputoption"
      :menuval="menuval"
    ></selectorinput>
    <selectormenu
      :data="data"
      @setitemvalue="setitemvalue"
      :inputo="inputo"
    ></selectormenu>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs} from 'vue'
import selectorinput from './selectorInput.vue'
import selectormenu from './selectorMenu.vue'
import { focus } from '../../directive'
  export default defineComponent({
      name: 'myselector',
      directives:{
        focus
      },
      components:{
        selectorinput,
        selectormenu
      },
      props:{
        placeholder:{
          type:String
        },
        data:{
          type:Array
        }
      },
      emits:['setitemvalue'],
      setup(props,ctx){
        const state = reactive({
          menuval:'',
          inputo:''
        })
        const setitemvalue = (item)=>{
          state.menuval = item.text
          ctx.emit('setitemvalue',item.value)
        }
        const inputoption = (value)=>{
          ctx.emit('setitemvalue',value)
          state.inputo = value
        }
        return {
          ...toRefs(state),
          setitemvalue,
          inputoption
        }
      }
  })
</script>

<style lang='scss' scoped>

</style>