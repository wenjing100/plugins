import { createVNode, nextTick, render } from 'vue';
import ktoast from './toast02.vue'

interface Koption{
    message:string
    delay?:number
}

export function Toast({message, delay = 1000}:Koption){
    //根据component 定义生成虚拟dom-----message和delay传递到 props中的
    const vm = createVNode(ktoast,{message,delay});
    //创建容器渲染虚拟dom
    const container = document.createElement('div');
    //渲染
    render(vm,container);
    //然后将container放到body中
    document.body.append(container)
    let id = null;
    nextTick(()=>{
      // @ts-ignore :该注释会忽略下一行中产生的所有错误
      vm.component.ctx.open();
      // 让延迟在方法中生效，组件中不再传递参数
      id = setTimeout(()=>{
        clearTimeout(id);
        id = null;
        // @ts-ignore
        vm.component.ctx.close();
        let d = setTimeout(()=>{
          clearTimeout(d);
          d = null;
          document.body.removeChild(container);
        },300)
      },delay)
    })
    // return vm
}

// export default ktoast;