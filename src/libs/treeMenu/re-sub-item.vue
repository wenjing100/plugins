<template>
  <div class="sub">
    <div class="title" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <div class="title-slot">
            <slot name="subtitle"></slot>
        </div>
        <span>&gt;</span>
    </div>
    <submenu
      class="submenu"
      v-show="setshow"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
    >
      <div v-for="(item, index) of data" :key="index">
        <subitem v-if="!item.children">
          <template #title>{{ item.title }}</template>
        </subitem>
        <resubitem v-else :data="item.children">
          <template #subtitle>{{ item.title }}</template>
        </resubitem>
      </div>
    </submenu>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
export default defineComponent({
  name: "resubitem",
  props: {
    data: Array,
  },
  setup() {
    const state = reactive({
      setshow: false,
    });
    const mouseenter = () => {
      state.setshow = true;
    };
    const mouseleave = () => {
      state.setshow = false;
    };
    return {
      ...toRefs(state),
      mouseenter,
      mouseleave,
    };
  },
});
</script>

<style lang='scss' scoped>
.sub {
  position: relative;
  width: 100%;
  .title {
    width: 100%;
    color: #fff;
    position:relative;
    
    span{
        position: absolute;
        top: 0;
        right: 0px;
        display: inline-block;
    }
  }
  .submenu {
    position: absolute;
    width: inherit;
    top: 0;
    left: 100%;
    background: #000;
    display: none;
  }

  &:hover {
    .submenu {
      display: block;
    }
  }
}
</style>