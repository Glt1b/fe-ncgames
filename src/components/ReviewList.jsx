import { useState, useEffect, useContext } from "react";
import { getReviews, getCategories } from "../api";
import  Review  from "./Review"
import { Link, useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";

//import Dropdown from 'react-dropdown';
//import 'react-dropdown/style.css';

export default function ReviewList() {

    const { category } = useParams();
    const [currCat, setCurrCat] = useState('');
    const [categories, setCategories] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [sort, setSort] = useState('created_at');
    const [order, setOrder] = useState('DESC')
    const [error, setError] = useState(null);
  
/*
    const sort = [
      'date', 'comment count', 'votes'];

    const order = [
      'ASC', 'DESC'];
*/

    useEffect(() => {
      getCategories().then((res) => {
        const arr = res.map((item) => item.slug)
        setCategories(arr);
      })
    }, [])

    useEffect(() => {
        setIsLoaded(false);
        getReviews(category, sort, order).then((reviews) => {
            setReviews(reviews);
            setIsLoaded(true);
        })
        .catch((err) => {
          setError(err.response.data.msg);
        });
    }, [currCat, sort, order])

    if (error) {
      return <ErrorComponent msg={error} />;
    }

    if (!isLoaded && !error) {
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
        <p>Sort by: <button onClick={() => setSort('created_at')}>date</button>
        <button onClick={() => setSort('title')}>Title</button>
        <button onClick={() => setSort('votes')}>votes</button><br/>
        Order: <button onClick={() => setOrder('DESC')}>DESC</button>
        <button onClick={() => setOrder('ASC')}>ASC</button></p>

        {/*<p>Sort by: <Dropdown options={sort} onChange={this._onSelect} value='date' placeholder="Select an option" /></p>*/}

        {reviews.map((item) => {
          return  <Review key={item.review_id} review_id={item.review_id} title={item.title} category={item.category} designer={item.designer}/>
            
        })}

        </div>
      );
    }

};


