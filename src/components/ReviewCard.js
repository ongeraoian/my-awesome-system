import React from 'react';

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <h3>{review.title}</h3>
      <p>{review.content}</p>
      <small>- {review.author}</small>
    </div>
  );
}

export default ReviewCard;
