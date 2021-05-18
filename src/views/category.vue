<template>
  <div class="category">
    <div class="side-bar">
      <treemenu :treedata="treemenuData"></treemenu>
    </div>
    <div class="other">
      <mybutton stybtn="btn-danger">BUTTON</mybutton>
      <mydirective />
    </div>
  </div>
</template>

<script lang='ts'>
import mydirective from "../components/directive实例学习.vue";
import treemenuData from '../data/treemenuDate'
export default {
  name: "category",
  components: {
    mydirective,
  },
  setup() {
    return {
      treemenuData
    }
  },
};
</script>

<style lang='scss' scoped>
.category{
  display: flex;
  justify-content: start;
  .side-bar {
    width: 150px;
  }
}

</style>