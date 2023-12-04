import axios from "axios"
import Cookies from "js-cookie"

const baseUrl = import.meta.env.VITE_SERVERURL

const createPostApi= async (details)=>{
    const response = await axios.post(`${baseUrl}/createPost`,details)
    if(response.status == 200 )
        alert("Post created Successfully")
    else if(response.status== 201)
        alert(response.data.error)
}


export {baseUrl,createPostApi}