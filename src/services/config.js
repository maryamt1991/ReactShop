import axios from "axios";

//const api=axios.create({baseUrl:"https://fakestoreapi.com"})
//api.interceptors.response.use(
    //(response)=>{
       // console.log(response)
       // return response.data
   // }
//,(error)=>{
   // console.log(error)
  //  return Promise.reject(error)})
  const api=axios.create({baseURL:"https://fakestoreapi.com"})
api.interceptors.response.use(
    (response)=>
      {
      console.log(response)
      return response.data;
    },(error)=>{console.log(error)
      return Promise.reject(error);
    }
     
  )

export default api