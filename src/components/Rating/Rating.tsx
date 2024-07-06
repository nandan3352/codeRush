
// import React, { useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// interface RatingProps {
//   upvotes: number;
//   downvotes: number;
// }

// const Rating: React.FC<RatingProps> = ({ upvotes, downvotes }) => {
//   const calculateStarRating = (upvotes: number, downvotes: number): number => {
//     const totalVotes = upvotes + downvotes;
//     const rating = totalVotes === 0 ? 0 : (upvotes / totalVotes) * 5;
//     return Math.round(rating * 10) / 10; // Round to one decimal place
//   };

//   const starRating = calculateStarRating(upvotes, downvotes);

//   const getStarIcon = (index: number) => (
//     <FaStar
//       key={index}
//       color={starRating > index ? 'gold' : 'gray'}
//       style={{ fontSize: '20px', margin: '0 2px' }}
//     />
//   );

//   return (
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       {Array.from({ length: 5 }, (_, index) => getStarIcon(index))}
//       <span style={{ marginLeft: '10px',color:"white" }}>{starRating.toFixed(1)}</span>
//     </div>
//   );
// };

// export default Rating;
import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingProps {
  upvotes: number;
  downvotes: number;
}

const Rating: React.FC<RatingProps> = ({ upvotes, downvotes }) => {
  // Function to calculate the star rating
  const calculateStarRating = (upvotes: number, downvotes: number): number => {
    const totalVotes = upvotes + downvotes;
    // Avoid division by zero
    const rating = totalVotes === 0 ? 0 : (upvotes / totalVotes) * 5;
    return Math.round(rating * 2) / 2; // Round to nearest 0.5
  };

  // Get the star rating
  const starRating = calculateStarRating(upvotes, downvotes);

  // Generate star icons based on rating
  const getStarIcon = (index: number) => {
    // Determine the type of star icon to display
    if (starRating >= index + 1) {
      return <FaStar key={index} color='gold' style={{ fontSize: '20px', margin: '0 2px' }} />;
    } else if (starRating >= index + 0.5) {
      return <FaStarHalfAlt key={index} color='gold' style={{ fontSize: '20px', margin: '0 2px' }} />;
    } else {
      return <FaStar key={index} color='gray' style={{ fontSize: '20px', margin: '0 2px' }} />;
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {Array.from({ length: 5 }, (_, index) => getStarIcon(index))}
      <span style={{ marginLeft: '10px', color: 'white' }}>{starRating.toFixed(1)}</span>
    </div>
  );
};

export default Rating;
