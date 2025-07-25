export const getValidateError = (
  name: string,
  isLength: boolean = true,
  min: number = 3,
  max: number = 40
) => {
  if (isLength) {
    return {
      required: `${name} is required`,
      minLength: {
        value: min,
        message: `Min length is ${min} `,
      },
      maxLength: {
        value: max,
        message: `Max length is ${max}`,
      },
    };
  } else {
    return {
      required: `${name} is required`,
    };
  }
};
