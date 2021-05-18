import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import wenjingUI from './libs/index'

// import c from './hooks/createMyDom';

import myMixin from './libs/mixin'
// import Toast from './libs/toast-real/index.ts'

const app = createApp(App);
app.mixin(myMixin);

// app.config.globalProperties.$c = c;

app.use(store).use(router).use(wenjingUI).mount('#app')
