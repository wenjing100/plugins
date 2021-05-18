import { Todo }  from '../types/todo'

function saveStor(val:Todo []){
    localStorage.setItem("todo_key",JSON.stringify(val))
}

function readStor():Todo []{
    return JSON.parse(localStorage.getItem("todo_key")) || [] 
}

export {
    saveStor,
    readStor
}