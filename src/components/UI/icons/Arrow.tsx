import { FC } from "react";

interface ArrowIconProps {
  className?: string;
}

const ArrowIcon: FC<ArrowIconProps> = ({className}) => {
  return (
    <svg
      width="5"
      height="8"
      viewBox="0 0 5 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1 1L4 4L1 7" stroke="#333333" />
    </svg>
  );
};

export default ArrowIcon;
