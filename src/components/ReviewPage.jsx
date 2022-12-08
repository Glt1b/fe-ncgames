import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/User";
import { getReviewById, getCommentsById, updateVote, postComment, deleteComment } from "../api";
import { Link, useParams } from "react-router-dom";

export default function ReviewPage() {

    const [review, setReview] = useState({});
    const [comments, setComments] = useState([]);
    const [voted, setVoted] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [newComment, setNewComment] = useState('');

    const [isUploaded, setIsUploaded] = useState(true);

    const [isDeleted, setIsDeleted] = useState(true);
    const { review_id } = useParams();
    const { user, setUser } = useContext(UserContext);


    useEffect(() => {
        getReviewById(review_id).then((res) => {
            setReview(res.review);
        })
        setIsLoaded(false)
        getCommentsById(review_id).then((res) => {
            setComments(res);
            setIsLoaded(true);
        })
    }, [review_id])

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

   const handleVote = () => {
    if (!voted) {
        updateVote(review_id, 1).then((res) => {
            setVoted(true);
            setReview(res); 
        })
    } else {
        updateVote(review_id, -1).then((res) => {
            setVoted(false);
            setReview(res); 
        })
    }
   };

   const writeComment = (e) => {
    e.preventDefault()
    setIsUploaded(false);
    postComment(review_id, newComment, user.username).then((res) => {
        const arr = comments;
        arr.unshift(res);
        setComments(arr);
        setNewComment('');
        setIsUploaded(true);
    })
   };
   

   const delComment = (comment_id) => {
    setIsDeleted(false);
    deleteComment(comment_id).then((res) => {
        setIsDeleted(true);
        if(res.status === 204){
            alert('Your comment has been deleted.')
            
            const arr = comments.filter((item) => item.comment_id !== comment_id)
            setComments(arr);

        } else {
            alert('Something went wrong, try again.')
        }
    })
   };


    return ( 
        <div>
           <h2>{review.title}</h2>
           <img src={review.review_img_url} className="reviewImg" alt={review.title} /><br/>
           <p><b>Category: </b>{review.category}</p>
           <p><b>Designer: </b><i>{review.designer}</i></p>
           <p><b>Owner: </b>{review.owner}</p><br/>
           <p>{review.review_body}</p><br/>
           <p>Created: {review.created_at}</p><p><b>Votes: </b>{review.votes}       
           { !voted  ? <button onClick={(e) => {handleVote(e)}}>Vote for this review</button> : <button onClick={() => {handleVote()}}>Take back your vote.</button> }
           </p>
           <Link to='/'>
            <br/><button>Back to reviews</button>
           </Link>

           <br/>
           <h3>Comments: {comments.length}</h3>
           <br/>
           { isUploaded ?  <form onSubmit={writeComment}> 
            <label>Add Comment:</label><br/>
            <input
               className="inputComment"
               value={newComment}
               type="text"
               onChange={((e) => {setNewComment(e.target.value)})}
               required ></input><br/>
            <button type="submit">Add</button>
           </form> : <p>Uploading...</p>}
          
           <br/>

            { !isLoaded ? <p>Loading...</p> : comments.map((item) => {
            return  (
                <div className='commentContainer' key={item.comment_id}>

                    <p>{item.body}</p><br/>
                    <p><b>Author:</b> {item.author}</p>
                    <p><b>Created:</b> {item.created_at}</p>
                    <p><b>Votes: </b> {item.votes}</p><br/>
                    { item.author === user.username && isDeleted ? <button onClick={() => {delComment(item.comment_id)}}>Delete your comment</button> : <br/>}
            
                </div>)   
          })}
        </div>
    
    )
};