import { requestax } from './request.js'

async function gethomeMultiDate(){
    return await requestax({
        url:'/home/multidata'
    })
}

export {
    gethomeMultiDate
}