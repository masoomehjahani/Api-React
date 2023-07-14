import http from "./httpService";

export function getCommentById (commentId){
   return http.get(`/comments/${commentId}`); 
}