import { ref } from 'vue'

export function usestars (num:number,callback:Function) {
    const starNum = ref(num);
    function setStarNum(num){
        starNum.value = num;
        callback();
    }
    return [
        starNum,
        setStarNum
    ]
}