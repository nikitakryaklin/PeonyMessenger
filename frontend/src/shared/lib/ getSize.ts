export const getSize = (size: number) => {
  const formatSize = (size: number) => size.toFixed(1);

  if (size < 1024) {
    return size + " B";
  } else if (size / 1024 < 1024) {
    return formatSize(size / 1024) + " KB";
  } else if (size / 1024 ** 2 < 1024) {
    return formatSize(size / 1024 ** 2) + " MB";
  } else if (size / 1024 ** 3 < 1024) {
    return formatSize(size / 1024 ** 3) + " GB";
  } else {
    return formatSize(size / 1024 ** 4) + " TB";
  }
};
