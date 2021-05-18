import todolist from './todolist/A-todoList.vue';
import tabbar from './tabbar/A-tabbar.vue';
import carsousel from './carsousel/index.vue';
import caritem from './carsousel/car-item.vue';
import navbar from './navbar/A-navbar.vue';
import myselect from './selector/index.vue';
import toast from './toast-compnent/index.vue';
import stars from './fiveStars/stars.vue';
import treemenu from './treeMenu/index.vue';
import resubitem from './treeMenu/re-sub-item.vue';
import submenu from './treeMenu/sub-menu.vue';
import subitem from './treeMenu/sub-item.vue';
import sliddel from './slid-del/index.vue'

const POOL = [
    todolist,
    tabbar,
    carsousel,
    caritem,
    navbar,
    toast,
    myselect,
    stars,
    treemenu,
    resubitem,
    submenu,
    subitem,
    sliddel,
]
    
let wenjingUI = {
    install(Vue){
        POOL.forEach((item)=>{
            Vue.component(item.name,item)
        })
    }
}

export default wenjingUI;
