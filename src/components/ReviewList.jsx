import { useState, useEffect } from "react";
import { getReviews, getCategories } from "../api";
import  Review  from "./Review"
import { Link, useParams } from "react-router-dom";


export default function ReviewList() {

    const { category } = useParams();
    const [currCat, setCurrCat] = useState('');
    const [categories, setCategories] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

  
    useEffect(() => {
      getCategories().then((res) => {
        const arr = res.map((item) => item.slug)
        setCategories(arr);
      })
    }, [])

    useEffect(() => {
        setIsLoaded(false);
        getReviews(category).then((reviews) => {
            setReviews(reviews);
            setIsLoaded(true);
        })
    }, [currCat])

    if (!isLoaded) {
        return (
          <main>
            <p>Loading....</p>
          </main>
        );
      } else {
      return (
        <div>

        <p>
          {categories.map((item) => {
            return <Link key={item} to={`/${item}`}><button onClick={setCurrCat}>{item}</button></Link>
          })}

        </p>

        {reviews.map((item) => {
          return  <Review key={item.review_id} review_id={item.review_id} title={item.title} category={item.category} designer={item.designer}/>
            
        })}

        </div>
      );
    }

};


