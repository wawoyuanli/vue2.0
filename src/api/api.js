const http=require('../utils/http.js')


const getHello=()=>{
  return  http({
        url:'/hello',
        method:"GET"
    })
}
const jsapi=(url)=>{
    return http({
        url:'/jsapi?url='+url,
        method:'GET',
    })
}

module.exports={
    getHello,
    jsapi
}