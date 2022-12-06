import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://easy-jade-crane-tutu.cyclic.app/",
});

export const getReviews = () => {
    return ncApi.get("/api/reviews").then((res) => {
        return res.data.reviews
    })
}

export const getReviewById = (review_id) => {
    return ncApi.get(`/api/reviews/${review_id}`).then((res) => {
        return res.data
    })
}