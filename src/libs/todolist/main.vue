<template>
    <div id="main">
        <slot />
    </div>
</template>

<script lang='ts'>
  export default {
      name: 'container'
  }
</script>

<style lang='scss' scoped>
#main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    border-radius: 3px;
    width: 600px;
    background:#333333;
    box-shadow: 0 10px 30px 0 #003333;
    padding: 10px;
}
</style>