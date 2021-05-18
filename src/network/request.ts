import axios from 'axios';
//http://47.110.38.241/
function requestax(config){
    const instance = axios.create({
        baseURL:'http://192.168.3.4:3000',
        timeout:5000
    })

    return instance(config)
}

export { requestax } 