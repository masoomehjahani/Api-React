import http from "./httpService";

export function addNewComment(data){
// if token is dynamik pass in arguman
   const token = "SECURE TOKEN";
   const header ={
      headers :{
         Authorization :`bearer ${token}`,
      },
   };

   return http.post("/comments",data,header);
};