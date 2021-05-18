<template>
  <div class="item">
    <label for="itemone">
      <input type="checkbox" v-model="todocheck" /><span>{{ todo.title }}</span>
    </label>
    <button @click="del">删除</button>
  </div>
</template>

<script lang='ts'>
import { Todo } from "../../types/todo";
import { computed } from "vue";
export default {
  name: "item",
  props: {
    todo: {
      type: Object as () => Todo, //强制约束为TODO
      required: true,
    },
    delTodo: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    update: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const del = () => {
      if (window.confirm("确定要删除本条待办事项吗？")) {
        props.delTodo(props.index);
      }
    };
    const todocheck = computed({
      get() {
        return props.todo.ischecked;
      },
      set(val) {
        props.update(props.todo,val)
      },
    });

    return {
      del,
      todocheck,
    };
  },
};
</script>

<style lang='scss' scoped>
.item {
  min-height: 30px;
  line-height: 20px;
  border: 0.5px solid white;
  border-radius: 3px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  input {
    margin-left: 5px;
    margin-right: 5px;
  }
  label {
    display: inline-flex;
    align-items: center;
    span {
      color: white;
    }
  }
  button {
    font-size: 10px;
    width: 50px;
    display: none;
    cursor: pointer;
  }
  &:hover {
    background: #ffffcc;
    button {
      display: block;
    }
    span {
      color: #333333;
    }
  }
}
</style>