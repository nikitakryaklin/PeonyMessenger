"use client";

import styles from "./rangeField.module.css";

import { ChangeEvent, HTMLProps, useEffect, useState } from "react";
import { SubText } from "../../text";
import clsx from "clsx";
import { percentCounter } from "@/shared/lib/math/percentCounter";

type TValue = string | number;

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
  min: TValue;
  max: TValue;
  value: TValue;
  className?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & HTMLProps<HTMLInputElement>) => {
  const [percent, setPercent] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    setPercent(
      percentCounter<TValue>(e.target.min, e.target.max, e.target.value)
    );
  };

  useEffect(() => {
    setPercent(percentCounter<TValue>(min, max, value));
  }, []);

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
