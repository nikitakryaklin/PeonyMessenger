export const getSize = (size: number) => {
  if (size < 8) return size + " bt";

  const result = Math.floor(size / 8);

  if (result < 1024) {
    return result + " B";
  } else if (result / 1024 < 1024) {
    return result + " MB";
  } else if (result / 1024 / 1024 < 1024) {
    return result + " GB";
  }
};
