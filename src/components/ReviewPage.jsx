import { useContext, useState, useEffect } from "react";
import { CurrReviewContext } from "../contexts/CurrReview";
import { getReviewById, getCommentsById } from "../api";
import { Link, useParams } from "react-router-dom";

export default function ReviewPage() {
    //const { currReview, setCurrReview } = useContext(CurrReviewContext);
    const [review, setReview] = useState({});
    const [comments, setComments] = useState([]);
    const { review_id } = useParams();


    useEffect(() => {
        getReviewById(review_id).then((res) => {
            setReview(res.review);
        })
        getCommentsById(review_id).then((res) => {
            setComments(res);
        })
    }, [review_id])


    return (
        <div>
           <h2>{review.title}</h2>
           <img src={review.review_img_url} className="reviewImg" alt={review.title} /><br/>
           <p><b>Category: </b>{review.category}</p>
           <p><b>Designer: </b><i>{review.designer}</i></p>
           <p><b>Owner: </b>{review.owner}</p><br/>
           <p>{review.review_body}</p><br/>
           <p>Created: {review.created_at}</p><p><b>Votes: </b>{review.votes}</p>

           
           <Link to='/'>
            <br/><button>Back to reviews</button>
           </Link>

           <br/>
           <h3>Comments: {comments.length}</h3>
           <br/>

           
           {comments.map((item) => {
            return  (
                <div className='commentContainer' key={item.comment_id}>

                    <p>{item.body}</p><br/>
                    <p><b>Author:</b> {item.author}</p>
                    <p><b>Created:</b> {item.created_at}</p>
                    <p><b>Votes: </b> {item.votes}</p>


                </div>)
          })}

           



        </div>
    
    )
};