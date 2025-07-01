import { commonAPI } from "./commonAPI";
import { ServerURL } from "./ServerURL";

//1.add event details

export const addEventAPI = async(reqbody)=>{
    return await commonAPI('post',`${ServerURL}/events`,reqbody)

}

//2.get bookings to all bookings
export const getEventAPI = async()=>{
    return await commonAPI('get',`${ServerURL}/events`,'')
}
//3.delete events
export const deleteeventAPI = async(id)=>{
    return await commonAPI('delete',`${ServerURL}/events/${id}`,'')
}
//get a particular event
export const getAnEventAPI= async(id)=>{
    return await commonAPI('get',`${ServerURL}/events/${id}`,'')
}

//update event
export const updateEventAPI = async(id,reqbody)=>{
    return await commonAPI('put',`${ServerURL}/events/${id}`,reqbody)
}