import { useState, useEffect } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";


export default function Review( props ) {
    
    const { review_id } = useParams();
    
    return (
        <div className="single-Review">
            <h3>{props.title}</h3><br/>
            <p><b>Category:</b> {props.category}</p><p><b>Designer:</b> <i>{props.designer}</i></p><br/>
            <Link to={`/reviewPage/${props.review_id}`}>
            <button>Read review</button>
            </Link>
        </div>
    )
};
