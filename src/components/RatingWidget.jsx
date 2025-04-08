import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const submit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
      setHovered(0);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map(num => (
        <span
          key={num}
          onMouseEnter={() => setHovered(num)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => setRating(num)}
          style={{ color: (hovered || rating) >= num ? 'gold' : 'gray', cursor: 'pointer' }}
        >
          ★
        </span>
      ))}
      <button onClick={submit}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;
