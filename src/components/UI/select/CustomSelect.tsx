"use client";

import { FC, useEffect, useRef, useState } from "react";

import classes from "./CustomSelect.module.scss";
import { Arrow } from "@/components";
import { ISort } from "@/@types/types";

interface IOption {
  value: string;
  title: string;
}

interface CustomSelectProps {
  options: IOption[];
  className: string;
  sort: ISort;
  onChange: (item: ISort) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
  options,
  className,
  sort,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeModal);

    return () => {
      document.removeEventListener("click", closeModal);
    };
  }, [isOpen]);

  return (
    <div ref={selectRef} className={`${classes.select} ${className}`}>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Arrow className={classes.icon} />
        {sort.title}
      </div>

      {isOpen && (
        <div className={classes.modal}>
          {options.map((option) => (
            <div
              className={
                sort.value === option.value
                  ? `${classes.item} ${classes.active}`
                  : classes.item
              }
              key={option.value}
              onClick={() => {
                onChange(option);
                setIsOpen(!isOpen);
              }}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
