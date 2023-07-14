import { useEffect, useState } from "react";
import Comment from "../../components/Comment/Comment";
import FullComment from "../../components/FullComment/FullComment";
import NewComment from "../../components/NewComment/NewComment";
import { getAllComments } from "../../services/getAllCommentsService";
import {toast } from 'react-toastify';
import "./discussion.css";
import { addNewComment } from "../../services/addNewCommentService";

const Discussion = () => {

const[comments,setComments] = useState(null);
const[selectedId,setSelectedId] = useState(null);
const[error,setError] = useState(false);
// get data => in sfc: useeffect ON CDM , in class: CDM
// by promis (then-chatch)
// by async-await
useEffect(() =>{
//  http.get("https://jsonplaceholder.typicode.com/comments").then((response) =>{
//    setComments(response.data.slice(0 ,4));
//  }
//  ).catch((error) => {
//     console.log(error);
//  })
getComments();
} , []);

// async-await
// or :const getComments = async() =>{}
async function getComments(){
    try {
        const {data}= await getAllComments(); 
        setComments(data);
    } catch (error) {
      setError(true);
    }
};

// in then :u can acses to result in then 
// const postCommentHandler = (comment) =>{
//     //post http:  url,body: ke yek object javascript ast , header : shamel token (or jwt :json web token) baraye shenasai va autorize
//      http.post("http://localhost:3001/comments",comment)
//      .then((res) => http.get("http://localhost:3001/comments")
//      .then(res => setComments(res.data))
//      ).catch();
//  };
//  by async await
 const postCommentHandler = async (comment) =>{
  try {
      await addNewComment({...comment, postId:10});
      const {data}= await getAllComments();
      setComments(data);
  } catch (error) {
      
  }  
 };

const selectCommentHandler = (id) =>{
setSelectedId(id);
};

const renderComment = () =>{
    let renderedValue =  <p>loading....</p>;
    if(error) {
        renderedValue =  <p>fetching data faild</p>;
        toast.error("there is an error");
    }
    if (comments && !error){
        renderedValue =(comments.map((c) => 
        <Comment
         key={c.id} 
         name={c.name} 
         email={c.email} 
        onClick={() => selectCommentHandler(c.id)} />));
    }
    return renderedValue;
};
    return ( 
        <main>
        <section>{renderComment()}</section>
        <section>
            <FullComment commentId={selectedId} setSelectedId={setSelectedId} setComments={setComments}/>
        </section>
        <section>
            <NewComment onAddPost={postCommentHandler}/>
        </section>
        </main>
     );
}
 
export default Discussion;