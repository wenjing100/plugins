<template>
  <div class="sub">
    <div class="title">
      <slot name="title"></slot>
    </div>
	</div>	

</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "subitem",
  props: {
    data: Array,
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
  }
  &:hover {
    .title {
      background:rgb(43, 43, 43);
    }
  }
}
</style>