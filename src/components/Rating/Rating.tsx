import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

interface RatingProps {
  upvotes: number;
  downvotes: number;
}

const Rating: React.FC<RatingProps> = ({ upvotes, downvotes }) => {
    
  const calculateStarRating = (upvotes: number, downvotes: number): number => {
    const totalVotes = upvotes + downvotes;
      
    const rating = totalVotes === 0 ? 0 : (upvotes / totalVotes) * 5;
    return Math.round(rating * 2) / 2;   
  };

    
  const starRating = calculateStarRating(upvotes, downvotes);

    
  const getStarIcon = (index: number) => {
      
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
