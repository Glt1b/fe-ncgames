import { useState, useEffect } from "react";

export default function Review(  props ) {
    console.log(props)
    return (
        <div className="single-Review">
            <h3>{props.title}</h3><br/>
            <p><b>Category:</b> {props.category}</p><p><b>Designer:</b> <i>{props.designer}</i></p><br/>
            <button>Read review</button>
        </div>
    )
};
