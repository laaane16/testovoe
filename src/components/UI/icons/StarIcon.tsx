import { FC } from "react";

interface StarIconProps{
    className: string;
}

const StarIcon:FC<StarIconProps> = ({className}) => {
  return (
    <svg
      width="9"
      height="10"
      viewBox="0 0 9 10"
      fill='none'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.27603 0L5.28226 3.45157H8.53851L5.90415 5.58475L6.91038 9.03632L4.27603 6.90313L1.64167 9.03632L2.6479 5.58475L0.013546 3.45157H3.26979L4.27603 0Z"
        fill={className === 'yellow'?'#FFC700':"#E6E6E6"}
      />
    </svg>
  );
};

export default StarIcon;
