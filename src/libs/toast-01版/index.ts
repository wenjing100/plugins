import toast from '../toast-real/toastreal.vue'
import { createApp } from 'vue'

let body = document.body;

function renToast () {
    const instance = createApp(toast);
    instance.mount(body);
}

export default renToast
