<template>
  <div
    class="container"
    @mouseenter="menterHandler"
    @mouseleave="mleaveHandler"
  >
    <div class="inner">
      <div class="aaa" v-for="(item, index) in cardata" :key="index" v-show="index === currentIndex || index === sibIndex">
        <img
          :src="require(`../../assets/img/swiper_img/${item.img_name}`)"
          @touchstart.stop="touchHandler($event)"
          @touchmove.stop="touchHandler($event)"
          @touchend.stop="touchHandler($event)"
        />
      </div>
      <director dir="pre" @dirClick="dirClick"></director>
      <director dir="next" @dirClick="dirClick"></director>
      <dots
        :hasDot="hasDot"
        :itemLen="itemLen"
        :currentIndex="currentIndex"
        :dotBgColor="dotBgColor"
        @dotClick="dotClick"
      ></dots>
    </div>
  </div>
</template>

<script>
import dots from "./dots";
import director from "./director";
import cardata from "../../data/carsousel";
import {
  reactive,
  toRefs,
  onMounted,
  onBeforeUnmount,
  getCurrentInstance,
} from "vue";

export default {
  name: "my-carsousel",
  components: {
    dots,
    director,
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    ini: {
      type: Number,
      default: 0,
    },
    hasDot: {
      type: Boolean,
      default: true,
    },
    hasDirector: {
      type: Boolean,
      default: true,
    },
    dotBgColor: String,
  },
  setup(props) {
    const instance = getCurrentInstance();
    const state = reactive({
      currentIndex: props.ini,
      sibIndex:null,
      itemLen: cardata.length,
      startX:null,
      moveLength:null,
    });
    let t = null;
    const autoplay = () => {
      if (props.autoplay) {
        t = setInterval(() => {
          play('next');
        }, props.duration);
      }
    };

    const play = (dir) => {
      switch (dir) {
        case "next":
          state.sibIndex = state.currentIndex;
          state.currentIndex += 1;
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0;
          }
          break;
        case "pre":
          state.sibIndex = state.currentIndex;
          state.currentIndex -= 1;
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1;
          }
          break;
        default:
          break;
      }
      
    };
    const touchHandler = (e)=>{
      let rect = e.currentTarget.getBoundingClientRect();
      if('touchstart'.includes(e.type)){
        state.startX = e.changedTouches[0].clientX
        console.log(e.currentTarget);
        _clearIntervalFn();
      }
      //相对于第一点的偏移量
      let x = e.changedTouches[0].clientX - state.startX - rect.left;
      //给父对象添加属性x
      e.currentTarget.parentElement.style.setProperty('--x',(x+'px'))
      if('touchmove'.includes(e.type)){
        e.currentTarget.parentElement.setAttribute('smove',1);
        _clearIntervalFn();
      }
      if('touchend'.includes(e.type)){
        if(x<-30){
          e.currentTarget.parentElement.setAttribute('sleft',1);
          let id = setTimeout(()=>{
            clearTimeout(id);
            id = null;
            play('next');
          },300) 
        }else if(x>30){
          e.currentTarget.parentElement.setAttribute('sright',1);
          let id = setTimeout(()=>{
            clearTimeout(id);
            id = null;
            play('pre');
          },300) 
        }else{
          e.currentTarget.parentElement.removeAttribute('sright');
          e.currentTarget.parentElement.removeAttribute('sleft');
          e.currentTarget.parentElement.removeAttribute('smove');
          e.currentTarget.parentElement.style.removeProperty('--x')
          autoplay();
        }
      }
    }
    const dotClick = (index) => {
      state.currentIndex = index;
    };
    const dirClick = (dir) => {
      play(dir);
    };
    const menterHandler = () => {
      _clearIntervalFn();
    };
    const mleaveHandler = () => {
      autoplay();
    };
    function _clearIntervalFn() {
      clearInterval(t);
      t = null;
    }
    onMounted(() => {
      autoplay();
    });
    onBeforeUnmount(() => {
      _clearIntervalFn();
    });
    return {
      ...toRefs(state),
      dotClick,
      menterHandler,
      mleaveHandler,
      dirClick,
      cardata,
      touchHandler
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .aaa{
      transition: all .3s;
      position: absolute;
      /* left: 0; */
      &[smove]{
        left:var(--x);
      }
      &[sleft]{
        animation: moveleft .3s;
      }
      &[sright]{
        animation: moveright .3s;
      }
    }
    
  }
}
@keyframes moveleft
{
  0% {transform: translateX(0);}
  100% {transform: translateX(-100%);}
}
@keyframes moveright
{
  0% {transform: translateX(0);}
  100% {transform: translateX(100%);}
}
</style>