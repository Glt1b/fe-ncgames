import { useState, useEffect } from "react";

import { getReviews } from "../api";


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
            return (
            <div key={item.review_id}>
             <p>This is review element I am working on now</p>
            </div> )
          })}

        </div>
      );
    }

};


