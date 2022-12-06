import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://easy-jade-crane-tutu.cyclic.app/",
});

export const getReviews = () => {
    return ncApi.get("/api/reviews").then((res) => {
        console.log(res.data.reviews)
        return res.data.reviews
    })
}