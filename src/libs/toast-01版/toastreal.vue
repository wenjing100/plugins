<template>
  <div class="toast" :class="type ? `toast-${type}` : ''" v-show="isShow">
    <p>{{ content }}</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
export default defineComponent({
  name: "realtoast",
  setup() {
    const state = reactive({
      content: "糟糕出错了！请稍后再试！",
      type: "error",
      isShow:false
    });
    let id = null;

    const show = (t:number = 2000,_type:string = state.type,_msg:string = state.content)=>{
      state.isShow = true;
      state.type = _type;
      state.content = _msg;
      id = setTimeout(() => {
        clearTimeout(id);
        id = null;
        state.isShow = false;
      }, t);
    }
    
    return {
      ...toRefs(state),
      show
    };
  },
});
</script>

<style lang='scss' scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  min-width: 100px;
  min-height: 30px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 2px;
  padding: 2px 3px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  &.toast-error p{
    color: red;
  }
  &.toast-warn p{
    color: orange;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
}
</style>