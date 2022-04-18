const http=require('../utils/http.js')
const getHello=()=>{
    console.log(http,'http')
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