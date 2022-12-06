import { useContext, useState, useEffect } from "react";
import { CurrReviewContext } from "../contexts/CurrReview";
import { getReviewById } from "../api";
import { Link, useParams } from "react-router-dom";

export default function ReviewPage() {
    //const { currReview, setCurrReview } = useContext(CurrReviewContext);
    const [review, setReview] = useState({});
    const { review_id } = useParams();


    useEffect(() => {
        getReviewById(review_id).then((res) => {
            setReview(res.review)
        })
    }, [])


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


        </div>
    
    )
};