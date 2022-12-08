import axios from "axios";

const ncApi = axios.create({
  baseURL: "https://easy-jade-crane-tutu.cyclic.app/",
});

export const getReviews = (category) => {
    if(!category){
    return ncApi.get("/api/reviews").then((res) => {
        return res.data.reviews
    })
    } else {
        return ncApi.get(`/api/reviews?category=${category}`).then((res) => {
            return res.data.reviews 
        })
    }
}

export const getReviewById = (review_id) => {
    return ncApi.get(`/api/reviews/${review_id}`).then((res) => {
        return res.data
    })
}
export const getCommentsById = (review_id) => {
    return ncApi.get(`/api/reviews/${review_id}/comments`).then((res) => {
        return res.data.comments
    })
}

export const updateVote = (review_id, vote) => {
    const voteUpdate = {inc_votes: vote}
    return ncApi.patch(`/api/reviews/${review_id}`, voteUpdate).then((res) => {
        return res.data.review
    })
}

export const postComment = (review_id, comment, username) => {
    const body = {username: username, body: comment};
    return ncApi.post(`/api/reviews/${review_id}/comments`, body).then((res) => {
        return res.data.comment
    })
}

export const deleteComment = (comment_id) => {
    return ncApi.delete(`/api/comments/${comment_id}`).then((res) => {
        return res
    })
}

export const getCategories = () => {
    return ncApi.get('/api/categories').then((res) => {
        return res.data.categories
    })
}