<template>
  <div id="main">
    <tabitem
      v-for="(item, index) in tabdata"
      :key="index"
      @click="itemclick(item, index)"
    >
      <i :class="['iconfont',{active:currentIndex === index},item.tab_img]" ></i>
      <p :class="{ active: currentIndex === index }">{{ item.title }}</p>
    </tabitem>
  </div>
</template>

<script lang='ts'>
import tabitem from "./tabItem.vue";
import tabdata from "@/data/tabbar";
import { reactive, toRefs, getCurrentInstance } from "vue";
import router from "@/router";

export default {
  name: "tabbar",
  components: {
    tabitem,
  },
  setup() {
    const state = reactive({
      currentIndex: -1,
    });
    const itemclick = (item, index) => {
      router.replace(item.path);
      state.currentIndex = index;
    };
    return {
      ...toRefs(state),
      tabdata,
      itemclick,
    };
  },
};
</script>

<style lang='scss' scoped>
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2430623_na35m060am.eot?t=1618560653102'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2430623_na35m060am.eot?t=1618560653102#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAV8AAsAAAAACmQAAAUtAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDMgqIAIZHATYCJAMUCwwABCAFhG0HSxvWCBEVpBGR/UiwcYuL9VYXFbpIb/Lhv9P+3HtnspOZQpPUyG6zKOi0Cyt5UF6hqCvwS0ifWO2v1AABBGh9++kY26gI1SV7nnqW73hpd3ppPuM8TqMUQiIk/3Ms9aLt7DD/Vbpklx3gBAcU0bib7w14A5oob5HdA7EAPg0EgAh/aEBy80trIYCDaiJYz7zZMydDiLjB5ZAJBJsCuJIDaQMPgX5P7wJodX6fPMcoIgAUPIP6rMoZedOQ2afp92H6z3qMYwYY2gsCoK8DGAANAA4gS8DwPDCvrAGDKP4dh0wAIgRQ0D5NX1aftd/n82ck/YysovYPD+DAQEEAooBqdsCxmRUO6NMY6sCShTnBMIsVEwAF+n20+2LmrStEACqApAJkJ1RrqHMXCg4O4AITo0Sl0sFBEDkOJzi5fDNJTRzWmo3ydPGHfaD6fR4i671RK9qv1VHRdIAwwwFRXG00q9Vmb4NKZVLNMJ354ZTHtC4Pjy5ikeXubkmi+kdxkvGgmu3owTjPWgNp937py58Qtta0R3Ty3vI4Xuzq0nfLkvG8V+PmR3GOZrPBpHL44YK3t+PZJwENPVtSay3nRIcmZ+P+abv26fcbDxoOTKX2nmu31/f2Njx7Vvf0aZPuCNyOKcLJkB32cZAjYbNopE6Q5HmkHTxH4sSVEkSd3R68szQlaNvTepKndcLHZtf9YA9OIAxxoLG2hIfESY4EOVqcIVFxpjG0sq5b3aBzarLPGtvloas3dcmN3bslZ+NefMRg8qhtMunEUb3Vx2Db88Mui//SxIO+B5utpY5w7JSTr+nVKL2QRSbowxdQqtZfS5Y7wTuWJlamSmfj6BEDPHTx9buO/x4bkfG7/b66BJ0HDEdo3Flp+nJNbNtWBzjEyf8HTQj6X44L3re1LVazHIn/rLr0yd2zdFnbpMq2u+532ypln9yGxxxxg/4s/QaVlDvmq8q2ZTGDwUvWmeeN8ZGbU3Oc3SL+e6+1Rti0rPVHBHp7YafbQfLLNFbByi0FZjzEUGg5rdjKoWQbvVTp6nqpykZ6yMWqoKCLlT3jtqK3yaXg7dZzxd20/EDBpgqRZ0EXCtzhuzPaEdq/h2t3af0DlqAjT60yJJZgKdrzwiMklt6ZSpaMEpSuqcQjKoX7fjveltT3duwKTSOmYEGsbqjPljju3JLiA+phL6RFo6YRrbhopPiSr3zH1QPa2drfZ2nnaEHP33y3+tTipNGm4frbliTt+v5myaK8+4Kl5MshIeOlT4BDg6OzT+ZL5dDS+Ac9EPIUXVr5QNQBzvH2PK95p7EKwOf3nzdyPDMAn1+wHUwgj9ezfqYHANbGpEf2KGS99i+a6Jz6UpDe4txvW2c2Owv11c+dBaU1D6iJax3xXi/pVDfPCUpY7WgMdYkoj0UXP0qBZ3HhsYy74Y927PIlrxIIkAOgGAa/IIMgaTAkh9UADwljQAEBLwNEMZLrJe7UEpkSQLQ3AsLFBygnV4Fx8UVy2B/wVP6g4BIDUX3ud5SEN/uQo0gNBWUvqnMZWPfZwe09oXRdqmGdQ71BpzpHoRfEawkGaBvnTPcyMmNilZ6O6HnoOqFRpUFuXmU2xr7P0Cd5ufSzgxwKUgYKJPNCajkxYGtnc0j8/AmUnE5Kc1aK8jegJvXuScgTlEAm5qHUyrHsP7krRYxh4jimRI8csSB0WlmQET6sATnjqWoURzEf38RlzV7/1v4Ya/6OteoW+ShhhCM8UYC79NjNFPdweYX1nJoxbGe5+uXSYTYDAAAA') format('woff2'),
  url('//at.alicdn.com/t/font_2430623_na35m060am.woff?t=1618560653102') format('woff'),
  url('//at.alicdn.com/t/font_2430623_na35m060am.ttf?t=1618560653102') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2430623_na35m060am.svg?t=1618560653102#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-home:before {
  content: "\e71b";
}

.icon-gouwuche:before {
  content: "\e699";
}

.icon-jifen:before {
  content: "\e641";
}

.icon-huiyuan:before {
  content: "\e62c";
}

#main {
  width: 100%;
  height: 59px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  padding: 5px;
  background: #ffe2e28c;
  border-top: 1px solid rgba($color: #424242, $alpha: 0.1);
  i {
   display: inline-block;
  }
  .active {
    color: #ff5000;
    font-weight: bold;
  }
}
</style>