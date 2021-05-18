<template>
  <div class="selectorinput">
    <label >
      <input
         type="text"
         class="inpu"
         :value="inputvalue"
         @input="inputoption($event)"
         @focus="inputoption($event)"
      />
    </label> 
    <div ref="plhder" class="placeholder">{{placeholder}}</div>
    <span class="iconfont icon-down"></span>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, ref, toRefs, watch } from "vue";
export default defineComponent({
  name: "selectorinput",
  props:{
      placeholder:{
          type:String,
          default:'请输入'
      },
      menuval:String
  },
  emits:['inputoption'],
  setup(props,ctx){
    const state = reactive({
      inputvalue:''
    })
    const plhder = ref(null)
    const inputoption = (e)=>{
      ctx.emit('inputoption',e.target.value)
    }
    
    watch(()=>{
      return props.menuval
    },(val)=>{
      state.inputvalue = val
    })
    return {
      ...toRefs(state),
      inputoption,
      plhder
    }
  }
});
</script>

<style lang='scss' scoped>
@font-face {
  font-family: "iconfont";
  src: url("//at.alicdn.com/t/font_2430623_n05dspqyaz9.eot?t=1616225505660"); /* IE9 */
  src: url("//at.alicdn.com/t/font_2430623_n05dspqyaz9.eot?t=1616225505660#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPgAAsAAAAACAgAAAOTAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDTIMaATYCJAMQCwoABCAFhG0HPhsCByMRdnMP0pH9VQIPh9Upg0gqXgMR1rQhYtPz2ozPSUSq2mOveaQvElwTAf1+bZ/8u3eCaJIkmrSKZTyRSJqKWEqEytAogewl/J/s8t/eRmQFwLNz6AKoRZdUED/ZlOFXAVC4/5trDtioCPXkNosefSGFp/TSjP7ncnp3lfj8luWyNq1Be3PUCzCaQAGtsZ8HUkA59xgbYvcznYC2CXqInT3PQCgyo15AuLlMiYOSksk1kUERNEq6ZuFFpcTbuIdn//vh31JcRFViNN1PdkqEjefwF+VUW9c6cxGc8TTgepGwCGTCRanuHFLoXERqK7/J1oCiiHyFP8e+KNcJdy/iYuqJvf+80GCEd8EKEaUT49g0Il+xNBLfytwbmCWDgibueEfCWGwlCH0DMnz4arWeMw4PbQcRwpLLJ7wYU4HUoNggHRDqwEQdSxJTZcGUxPwJcXwcfHgYeHQU1HFigcSDJjsO6spPTkIyzCJGRbGywXaJYAkKT+NaGAnV5qTguql2scRkqn2iVjwJdQjyRQMHx8aYkiHBFJM17jUJweMdo+JBQWiUQRcLhGfRR3peHYBttdV10JDa36S9ZW5V1deGb5O4nrkgewlfCQe/sh57qJHx4+NTcWOJZKgBObCzM+AISFZNG6DFyPZQZlGyZc7BT08tzsLO5r+3rmJ4pAIFNFSTFSTiho83bLxYVCJV8vQoAmEliDB5fCyVBFVWdc2UfKDcZHJyUvKkvKM8s6bG84GvXeNZnvkWo3lWzbraP/NTJcHFigt/VdPP3T2lPN0zz/+oLBqkBJXOT+r8km2OgQQGUNv+XCG9xnDqm0m6P7Saj6hs9xhBy/+F94rSPit273xj7UE/9l/htOb8Pk7LhKzyDHnOMt9ma62yE6hARNtU8tO8DLoewzACYk1QeA6BqGkckmISzYRFqHSsQEOxDm0LXHp3DMmHJOQW5jUBBP3mIer1Bkm/fTQTrqAy6gsa+iOh7ZQQHbJjutNxd2RUghb0H6Kh0VlK2QWRN/TvXnGS5xNfyDlaoC6qrOeKI/IYLfLHNyIOHNMAF5gN+54gMbVopAgi6VCWruxChaFhspscGZWgBf2HaGh0bmrZ5T5/Q//uFdfEVehfyDkWDnVRtUCv4rFV3LXskj++EXHgmAa4gAZ700mQyiu1aKQIPezpUGIy11ZczC8dnnAetCfGenl6rde3yqjYhIWl77jIongyAQA=")
      format("woff2"),
    url("//at.alicdn.com/t/font_2430623_n05dspqyaz9.woff?t=1616225505660")
      format("woff"),
    url("//at.alicdn.com/t/font_2430623_n05dspqyaz9.ttf?t=1616225505660")
      format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("//at.alicdn.com/t/font_2430623_n05dspqyaz9.svg?t=1616225505660#iconfont")
      format("svg"); /* iOS 4.1- */
}
.selectorinput {
    position: relative;
    width: 200px;
    height: 30px;
    
    .inpu{
        width: 100%;
        height: 100%;
        padding: 3px;
        border: .5px solid #099888;
        outline-width: 1px;
        outline-color: #099888;
        border-radius: 2px;
        z-index: 5;
    }
    .placeholder{
        position: absolute;
        left: 0;
        top: 0;
        text-align: left;
        padding-left: 5px;
        line-height: 30px;
    }
    
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    right: 5px;
    line-height: 30px;

    &.icon-search:before {
      content: "\e721";
    }

    &.icon-down:before {
      content: "\e65a";
    }

    &.icon-star:before {
      content: "\e660";
    }
  }
}
</style>