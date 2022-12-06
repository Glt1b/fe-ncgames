import { useState, useEffect } from "react";

import { getReviews } from "../api";

import  Review  from "./Review"


export default function ReviewList() {
    const [reviews, setReviews] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        getReviews().then((reviews) => {
            setReviews(reviews);
            setIsLoaded(true);
        })
    }, [])

    if (!isLoaded) {
        return (
          <main>
            <p>Loading....</p>
          </main>
        );
      } else {
      return (
        <div>

          {reviews.map((item) => {
            return  <Review key={item.review_id} title={item.title} category={item.category} designer={item.designer}/>
            
          })}

        </div>
      );
    }

};


