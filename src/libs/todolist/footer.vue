<template>
  <div id="footer">
    <label for="footerlabel">
      <input type="checkbox" v-model="selectall"/><span
        >已完成<strong>{{ checknum }}</strong
        >/全部<strong>{{ len }}</strong></span
      >
    </label>
    <button @click="dellist">清除已完成任务</button>
  </div>
</template>

<script lang='ts'>
import { computed } from "vue";
export default {
  name: "footer",
  props: {
    todos: {
      type: Array,
      required: true,
    },
    dela: {
      type: Function,
      required: true,
    },
    checknum: {
      type: Number,
      required: true,
    },
    len: {
      type: Number,
      required: true,
    },
    updateCheck: {
      type: Function,
      required: true,
    },
    checkItem:{
      type:Number,
      required:true
    }
  },
  setup(props) {
    const dellist = () => {
      
      if (window.confirm("确定删除所有完成事项")) {
        props.dela();
      }
    };
    const selectall = computed({
      get(){
        return props.checkItem===props.len && props.len !== 0? true:false
      },
      set(val){
        for(let i = 0; i < props.len; i++){
          props.updateCheck(props.todos[i],val)
        }
      }
    })
    return {
      dellist,
      selectall
    };
  },
};
</script>

<style lang='scss' scoped>
#footer {
  width: 580px;
  height: 30px;
  line-height: 20px;
  margin-top: 20px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  label {
    display: inline-flex;
    align-items: center;
    span {
      font-size: 12px;
      color: white;
    }
  }
  input {
    margin-left: 5px;
    margin-right: 20px;
  }
  button {
    width: 120px;
    font-size: 10px;
    cursor: pointer;
    border-radius: 3px;
    border: none;
    background: orangered;
    color: black;
    &:active {
      box-shadow: 0 0 5px 0 #04ecec;
    }
  }
}
</style>