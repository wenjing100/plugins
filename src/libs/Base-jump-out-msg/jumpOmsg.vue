<template>
<transition #jumpout>
  <div class="jumpout">
    <h2>哈哈哈哈</h2>
  </div>
</transition>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "jumpomsg",
});
</script>

<style lang='scss' scoped>
.jumpout{
  width: 100%;
  height: 500px;
  background: papayawhip;
}
/* .jumpout-enter-from{

} */
</style>