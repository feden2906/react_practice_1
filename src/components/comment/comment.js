import './comment.css'                                       // TODO пропустив ";"

export default function Comment({items}){
    let{postId, id, name, email, body} = items;

    return(
        <div className='comment'>
            <h2>Comment - {id}</h2>
            <p>postId: {postId}</p>
            <p>id: {id}</p>
            <p>name: {name}</p>
            <p>email: {email}</p>
            <p>body: {body}</p>
        </div>
    )
}
