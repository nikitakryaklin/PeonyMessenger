"use client";

import styles from "./rangeField.module.css";

import { ChangeEvent, HTMLProps, useEffect, useState } from "react";
import { SubText } from "../../text";
import clsx from "clsx";
import { percentCounter } from "@/shared/lib/math/percentCounter";

export const RangeField = ({
  title,
  id,
  min,
  max,
  value,
  className,
  onChange,
  ...inpytProps
}: {
  title: string;
  min: string;
  max: string;
  value: string;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & HTMLProps<HTMLInputElement>) => {
  const [percent, setPercent] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setPercent(percentCounter(e.target.min, e.target.max, e.target.value));
  };

  useEffect(() => {
    setPercent(percentCounter(min, max, value));
  }, [value, min, max]);

  return (
    <div className="h-15">
      <SubText text={title} />
      <label htmlFor={id}>
        <input
          type="range"
          id={id}
          className={clsx(styles.input, className)}
          onChange={onInputChange}
          style={{
            background: `linear-gradient(90deg, var(--primery) 0%,var(--primery) ${percent}, var(--light-gray) 0%)`,
          }}
          min={min}
          max={max}
          value={value}
          {...inpytProps}
        />
      </label>
    </div>
  );
};
