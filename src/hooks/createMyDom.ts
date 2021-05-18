import { createApp } from 'vue';

export default function (comp,option) {//option 是传递给组件 props中的属性
    //组件实例
    const c = createApp(comp,option);

    //创建容器 & 挂载实例
    const container = document.createElement('div');
    c.mount(container);

    //然后将container放到body中
    document.body.appendChild(container);
    
    // 添加节点移除方法
    c.component.apply({
        removeMe(){
        document.body.removeChild(container);
        c.unmount(container);
        }
    })

    return c.component
}