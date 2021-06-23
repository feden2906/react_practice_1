import './comments.css'
import {useEffect, useState} from "react";
import Comment from "./comment/comment";

export default function Comments(){

    let[commentsList, setCommentsList] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setCommentsList(value);
            })
    }, [])

    return(
        <div>
            <h1>Comments</h1>
            {
                commentsList.map(value => <Comment key={value.id} items={value}/>)
            }
        </div>
    )
}