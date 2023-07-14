import axios from "axios";
import { useState } from "react";
import "./newComment.css"

const NewComment = ({onAddPost}) => {

    const[comment,setComment] = useState({
        name:"",
        email:"",
        body:"",
    });

 const inputHandler = (e) =>{
    //  console.log(e.target.name);
    setComment({...comment, [e.target.name] : e.target.value}) ;
 };
   
 return ( 
        <div className="newComment">
            <div>
                <label>name</label>
                <input type="text" onChange={inputHandler}
                 name="name" />
            </div>
            <div>
                <label>email</label>
                <input type="email" onChange={inputHandler}
                 name="email" />
            </div>
            <div>
                <label>body</label>
                <input type="textarea" onChange={inputHandler} 
                name="body" />
            </div>
            <button onClick={() => onAddPost(comment)}>Add New Comment</button>
        </div>
     );
}
 
export default NewComment;