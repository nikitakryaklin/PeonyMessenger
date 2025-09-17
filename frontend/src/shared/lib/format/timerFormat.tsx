export const timeformat = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const tickFormat = (tick: number) => (tick < 10 ? "0" + tick : tick);
  return `${tickFormat(minutes)}:${tickFormat(seconds)}`;
};
