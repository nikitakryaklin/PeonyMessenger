"use client";

import { useEffect, useState } from "react";
import { Text } from "../text";
import { timeformat } from "@/shared/lib/format/timerFormat";

export const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervar = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervar);
  }, []);

  return <Text text={timeformat(timer)} />;
};
