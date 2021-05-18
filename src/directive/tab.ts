
export default {
    mounted( el, binding ) {
        const { className, activeClass, curIndex} = binding.value;
        const btn = el.getElementsByClassName(className);
        btn[curIndex].className += ` ${activeClass}`;
    },
    updated( el, binding ) {
        const oldIndex = binding.oldValue.curIndex;
        const { className, activeClass, curIndex} = binding.value;
        const btn = el.getElementsByClassName(className);

        btn[oldIndex].className = className;
        btn[curIndex].className += ` ${activeClass}`;
    }
}