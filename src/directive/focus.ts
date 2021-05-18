export default {
    mounted(el,binding){
        const oSelectorinput = el.querySelector('.selectorinput');
        const oSelectormenu = el.querySelector('.selectormenu');

        const inputplaceholder = oSelectorinput.querySelector('.placeholder'),
              inpu = oSelectorinput.querySelector('input'),
              inputicon = oSelectorinput.querySelector('span');

        inpu.addEventListener('focus',()=>{
            inputicon.className = 'iconfont icon-search'
            inputplaceholder.style.display = 'none'
            oSelectormenu.style.display = 'block'
        },false)
        inpu.addEventListener('blur',()=>{
            inputicon.className = 'iconfont icon-down'
            let id = null;
            id = setTimeout(()=>{
                clearTimeout(id);
                id = null;
                oSelectormenu.style.display = 'none'
                if(inpu.value.length == 0){
                    inputplaceholder.style.display = 'block'
                }
            },200)
            
        },false)
    },
    updated(){

    }
}