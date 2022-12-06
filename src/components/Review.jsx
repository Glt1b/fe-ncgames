import { useState, useEffect } from "react";
import { useContext } from "react";
import { CurrReviewContext } from "../contexts/CurrReview";
import { Link } from "react-router-dom";


export default function Review( props ) {
    
    const { currReview, setCurrReview } = useContext(CurrReviewContext);

    const handleClick = (review_id) => {
        setCurrReview(review_id);
    };

    return (
        <div className="single-Review">
            <h3>{props.title}</h3><br/>
            <p><b>Category:</b> {props.category}</p><p><b>Designer:</b> <i>{props.designer}</i></p><br/>
            <Link to='/reviewPage'>
            <button onClick={() => handleClick(props.review_id)}>Read review</button>
            </Link>
        </div>
    )
};
