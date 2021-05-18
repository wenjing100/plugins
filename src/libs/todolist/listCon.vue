<template>
    <div id="list">
      <item v-for="(todo,index) in todos" 
      :key="todo.id" 
      :todo="todo" 
      :index="index" 
      :delTodo="delTodo"
      :update="update"
      ></item>
    </div>
</template>

<script lang='ts'>
import item from './item.vue'
  export default {
      name: 'listcon',
      components:{
        item
      },
      props:{
        todos:{
          type:Array
        },
        delTodo:{
          type:Function,
          required:true
        },
        update:{
          type:Function,
          required:true
        }
      }
  }
</script>

<style lang='scss' scoped>
  #list{
      width: 580px;
  }
</style>