<template>
    <div>
      <span
        v-for="n in 5"
        :key="n"
        :class="[
          'iconfont icon-star',
          n <= starNum?'active':''
        ]"
        :style="{fontSize:size + 'px'}"
        @click="setStarNum(n)"
      ></span>
    </div>
</template>

<script lang='ts'>
import { defineComponent, Ref } from 'vue'
import { usestars } from '../../hooks';
  export default defineComponent({
      name: 'stars',
      props:{
        num:{
          type:Number,
          default:0
        },
        size:{
          type:Number,
          default:16
        }
      },
      emits:['returnNum'],
      setup(props,ctx){
        const [ starNum, setStarNum ] = usestars(props.num,()=>{
          ctx.emit('returnNum',(starNum as Ref<number>).value)
        });
        
        return {
          starNum,
          setStarNum
        }
      }
  })
</script>

<style lang='scss' scoped>
  @font-face {font-family: "iconfont";
    src: url('//at.alicdn.com/t/font_2430623_23holhpyc6a.eot?t=1616119203888'); /* IE9 */
    src: url('//at.alicdn.com/t/font_2430623_23holhpyc6a.eot?t=1616119203888#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAK4AAsAAAAABmgAAAJtAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAp0gQgBNgIkAwgLBgAEIAWEbQcuG6wFyB6SJEU6LFAEgipAQpgiiOaw2eRKCBZIEqjqqroaBWRMja7RpOFZvc7Vmm4KaNH1plX4n0RGlUgFJe898P0GdcsWSCIY345n4co9wTMEyOe5nN4EOpBrfKAc96I1BvUC6sWBFOgeGEVWKIE3jF3gEh4TqNRrWGB7ejEOLRJrVSAuNSULLbmAJLF0uVBaczCJJyXKs+vsEXgMvx+/hKOFTEnOqjq4mCrA6GfGzsovdu4TggR0vAQ5poFEnNQm9tQLxtWrTDQYBPsqDz4zReHbxV4tgv11Vmk16IbSe5K58ltNZ3BbUw0Dc6MuIobrNlqT8a3T04PuVHLn4PAs2JDaPds86Uwktk/29zriIHvv+LNt6dWzf86zt7IyNPB9d1k+K/Xe//frL/M7PYvz5stf34OkJCp3F4M/XStpowBFkV/nQwII/j2XbtJ1/i9vT+CjNnoU+ooiQT8XKN+vM/g/sp4DSVdYtiypstrRzPB52ypVooA9jT7GGltuJhPKtYxwlelJPbnymdQJstMoUWUZpcqtodKUmeNVmgj1IlVg0jJAqHeHTK0X5Oo9kYl9R4lWnyhVH/WodBZcWGU0tLYEZgkLLFdlWt6xueOgtqg8ikrRzIqsIuSTKHwtzEJSsJieQRvFHFv8khIm4owLx2LT4Dk0TYe5wtExT5JK5EZkmde9Sco7FrTZIqAsggqYnCpGk+ewcX88aSt9PgopikxZoqWvJpmEBJ82OxMiCfYgZ7R2r757ecVXoggjhGM4wWFhpsE8ZDI5GLd+ng7lEYk6IuaKkO1hvK9WWl9vfd0JqGSZsrDrc+mKsgIA') format('woff2'),
    url('//at.alicdn.com/t/font_2430623_23holhpyc6a.woff?t=1616119203888') format('woff'),
    url('//at.alicdn.com/t/font_2430623_23holhpyc6a.ttf?t=1616119203888') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('//at.alicdn.com/t/font_2430623_23holhpyc6a.svg?t=1616119203888#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #999;

    &.icon-star{
      transition:color .1;
    }

    &.icon-star:before {
      content: "\e660";
    }

    &.active{
      color:#fbab06;
    }
  }

  
</style>