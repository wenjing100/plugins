<template>
    <maincon>
    <headerinpu :addTodo="addTodo" />
    <suspense>
      <template #default>
        <listcon :todos="todolists" :delTodo="delTodo" :update="updateCheck" />
      </template>
      <template v-slot:fallback>
        <div class="message">
          <h2>代办事项加载中......</h2>
        </div>
      </template>
    </suspense>
    
    <todofooter
      :todos="todolists"
      :dela="delall"
      :checknum="checkitem"
      :len="len"
      :updateCheck="updateCheck"
      :checkItem="checkitem"
    />
  </maincon>
</template>

<script lang='ts'>
import headerinpu from "./header.vue";
import todofooter from "./footer.vue";
import listcon from "./listCon.vue";
import maincon from "./main.vue";
import { reactive, toRefs, onBeforeUnmount, onMounted, watch } from "vue";
import { Todo } from "../../types/todo";
import {saveStor,readStor} from '../../utils/storiage'

export default {
  name:"todolist",
  components: {
    headerinpu,
    listcon,
    todofooter,
    maincon,
  },
  setup() {
    let timeid :any;
    const state = reactive<{ todolists: Todo[],checkitem:number,len:number}>({
      todolists: [],
      checkitem:0,
      len:0
    });
    //定义添加函数
    const addTodo = (todo: Todo) => {
      state.todolists.unshift(todo)
      exitcheck();
    };
    //定义删除一个选项函数
    const delTodo = (index: number) => {
      state.todolists.splice(index, 1);
      exitcheck();
    };
    //定义删除所有的函数
    const delall = () => {
      if(state.checkitem === 0) return
      state.todolists = state.todolists.filter((item,index)=>{
        return !item.ischecked
      })
      exitcheck();
    };
    //定义修改ischecked的函数
    const updateCheck = (todo:Todo,ischecked:boolean)=>{
      todo.ischecked = ischecked
      exitcheck();
    }
    //检测所有项，和选中项
    const exitcheck = ()=>{
      state.checkitem = 0;
      state.len = 0;
      for (let i = 0; i < state.todolists.length; i++) {
        state.len++;
        if (state.todolists[i].ischecked) {
          state.checkitem++;
        }
      }
    }
    watch(()=>state.todolists,saveStor,{
      deep:true
    })
    
    onMounted(()=>{
      timeid = setTimeout(()=>{
        state.todolists = readStor()
        exitcheck();
      },800)
    })
    onBeforeUnmount(()=>{
      clearTimeout(timeid);
      timeid = null;
    })
    return {
      ...toRefs(state),
      addTodo,
      delTodo,
      delall,
      updateCheck
    };
  },
};
</script>

<style lang='scss' scoped>
.message{
  color: red;
}
</style>