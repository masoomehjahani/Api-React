import { getAllComments } from "../../services/getAllCommentsService";
import { useEffect, useState } from "react";
import "./fullComment.css";
import { deleteComment } from "../../services/deleteCommentService";
import { getCommentById } from "../../services/getCommentByIdService";

const FullComment = ({commentId,setComments,setSelectedId}) => {

const [comment,setComment] = useState(null);

const styles = {
color: "#444",
backgroundColor:"#efefef",
padding:"10px",
};
    useEffect(() =>{
       if(commentId)
       {
       
        const getById = async () =>{
           
        try {
            const {data}= await getCommentById(commentId); 
            setComment(data);
        } catch (error) {
            console.log(error);
           }
         }
         getById();
    } 
    } , [commentId]);
    
    // const deleteHandler =() =>{
    //  axios.delete(`http://localhost:3001/comments/${commentId}`).then( res => {
    // //  in real project setStateComment after delete one to show user
    //  }).catch( err => console.log(err));
    // };
    const deleteHandler = async() =>{
        try {
         await deleteComment(commentId);
         const {data}= await getAllComments();
         setSelectedId(null);
         setComment(null);
         setComments(data);
        } catch (error) {
            
        } 
   };

    let commentDetail = <p style={styles}>please select a comment!</p>;

    if(commentId)  commentDetail = <p style={styles}>loading...</p>;
    if(comment) {commentDetail = (<div className="fullComment">
                                <p>name : {comment.name}</p>
                                <p>email : {comment.email}</p>
                                 <p>body : {comment.body}</p>
                                 <button className="btnDelete" onClick={deleteHandler}>Delete</button>
                                </div>);
                  }
    return commentDetail;
}
 
export default FullComment;