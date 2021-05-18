<template>
  <div class="tree-menu">
    <div v-for="(item, index) of treedata" :key="index" class="see">
      <subitem v-if="!item.children">
        <template #title>{{ item.title }}</template>
      </subitem>
      <resubitem v-else :data="item.children">
          <template #subtitle>{{ item.title }}</template>
      </resubitem>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "treemenu",
  props: {
    treedata: Array,
  },
});
</script>

<style lang='scss' scoped>
.tree-menu {
  width: 100%;
  background: #000;
  color: #fff;
  z-index: 10;

  .see {
    &:hover :nth-child(1) {
      background: rgb(43, 43, 43);
    }
  }
}
</style>