<template>
  <div id="header">
    <input type="text" 
    v-model="text" 
    placeholder="请输入你的待办事项，按回车键确认" 
    @keyup.enter="add">
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue'
  export default {
      name: 'header',
      props:{
        addTodo:{
          type:Function,
          required:true
        }
      },
      setup(props){
        const text = ref('')
        const add = ()=>{
          const titletext = text.value;
          if(!titletext.trim()) return
          const todo = {
            id: Date.now(),
            title:titletext,
            ischecked:false
          }
          props.addTodo(todo)
          text.value = ''
        }
        return {
          add,
          text
        }
      }
  }
</script>

<style lang='scss' scoped>
#header{
    width: 600px;
    height: 50px;

    input{
        width: 580px;
        height: 30px;
        padding: 10px;
        border:none;
        border-radius: 3px;
        box-shadow: 0 0 0 1px gray;
        &:focus{
            box-shadow: 0 0 5px 1px #CCFFFF;
            outline: none;
        }
    }
}

</style>