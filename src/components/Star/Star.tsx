import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { TiStarOutline } from 'react-icons/ti';

type StarProps = {
    starred: boolean;
};

const Star:React.FC<StarProps> = ({starred}) => {
    // if(starred===1) 
    return <div
    className='cursor-pointer hover:bg-dark-fill-3  rounded p-[3px]  ml-4 text-xl transition-colors duration-200 text-green-s text-dark-gray-6 '
    // onClick={handleStar}
>
    
    {starred && <AiFillStar className='text-dark-yellow' />}
    {!starred && <TiStarOutline />}
</div>
}
export default Star;

// import * as React from 'react';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';

// const labels: { [index: string]: string } = {
//   0.5: 'Useless',
//   1: 'Useless++',
//   1.5: 'Poor',
//   2: 'Poor++',
//   2.5: 'Ok',
//   3: 'Ok++',
//   3.5: 'Good',
//   4: 'Good++',
//   4.5: 'Excellent',
//   5: 'Excellent++',
// };

// function getLabelText(value: number) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

// export default function HoverRating() {
//   const [value, setValue] = React.useState<number | null>(0);
//   const [hover, setHover] = React.useState(-1);

//   return (
//     <Box
//       sx={{
//         width: 200,
//         display: 'flex',
//         alignItems: 'center',
//         color:"white"
//       }}
//     >
//       <Rating
//         name="hover-feedback"
//         value={value}
//         precision={0.5}
//         getLabelText={getLabelText}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         emptyIcon={<StarIcon style={{ opacity: 0.99999 }} fontSize="inherit" />}
//       />
//       {value !== null && (
//         <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//       )}
//       {
//         hover===0 && `Rate this`
//       }
//     </Box>
//   );
// }

// {/* <Rating/> */}
