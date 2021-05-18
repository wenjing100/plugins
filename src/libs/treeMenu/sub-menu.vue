<template>
    <div class="submenu">
     <slot></slot>
    </div>
</template>

<script lang='ts'>
import { defineComponent} from 'vue'
  export default defineComponent({
      name: 'submenu'
  })
</script>

<style lang='scss' scoped>

</style>