import { commonAPI } from "./commonAPI"
import {serverURL} from "./serverURL"




//upload videos 

 export const uploadAllVideo= async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/videos`,reqBody)
}


//get all video from json server

export const getAllVideos= async()=>{
   return await commonAPI('GET',`${serverURL}/videos` , "")
}

//Api to delete a video
export const deleteAVideos= async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/videos/${id}` , {})
}

//Api to add data to watchHistory
export const addHistory= async(videoDetails)=>{
    return await commonAPI('POST',`${serverURL}/history` , videoDetails)
}
 
//api to get all history from json-server
export const getALLHistory = async()=>{
    return await commonAPI('GET',`${serverURL}/history`,"")
}

//api to delete history
export const deleteHistory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/history${id}`,{})
}

//api to add categoris
export const addToCategory = async(body)=>{
return await commonAPI('POST',`${serverURL}/categories`,body)
}

//api to get Category
export const getAllCategory = async(body)=>{
    return await commonAPI('GET',`${serverURL}/categories`,"")
 }

//to delete the category
export const deleteACategory = async(id)=>{
    return await commonAPI('DELETE',`${serverURL}/categories/${id}`,{})
}

//api to get a particular video 
export const getAVideo = async(id)=>{
    return await commonAPI('GET',`${serverURL}/videos/${id}`,"")
}

//api to update category
 export const updateCategory = async(id , body)=>{
  return await commonAPI('PUT', `${serverURL}/categories/${id}`, body)
}