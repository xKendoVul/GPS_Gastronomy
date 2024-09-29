import React from 'react';
import { StarFill, StarHalf, Star } from 'react-bootstrap-icons';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="d-flex align-items-center">
      {[...Array(fullStars)].map((_, i) => (
        <StarFill key={`full-${i}`} className="text-warning" />
      ))}
      {halfStar && <StarHalf className="text-warning" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} className="text-warning" />
      ))}
      <span className="ms-1">{rating.toFixed(1)}</span>
    </div>
  );
}

export default StarRating;