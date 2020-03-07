import request from 'superagent'
import { getReviewRatings } from './allWalks'

export const ADD_REVIEW = 'ADD_REVIEW'

const addReview = review => {
  return {
    type: ADD_REVIEW,
    review: review
  }
}

export function createReview (review) {
  return (dispatch) => {
    return request
      .post('https://walkland.herokuapp.com/api/v1/rating')
      .send(review)
      .then(res => {
        if (res.message) {
          console.log('res from review Walksaction: ', res)
        } else {
          dispatch(addReview(review))
          dispatch(getReviewRatings())
        }
      })
  }
}
