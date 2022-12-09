import { Link } from "react-router-dom";
import ReviewList from "./ReviewList"

export default function ErrorComponent(props){
    
    return (
    <div>
    <h1>{props.msg}</h1>
    <Link to='/'>
    <br/><button>Back to reviews</button>
    </Link>
    </div>
    )
}