export const getValidationErrorTypes = {
  passwordLength: 'Too short password',
  loginLength: 'Too short login',
  email: 'Incorrect email',
};

export const checkValidLogin = (value: string, length: number) => {
  return value.length >= length ? false : getValidationErrorTypes.loginLength;
};

export const checkValidPassword = (value: string, length: number) => { 
  return value.length >= length ? false : getValidationErrorTypes.passwordLength;
};

export const checkValidEmail = (value: string, regex: RegExp) => {
  const valid = value.match(regex);
  return valid ? '' : getValidationErrorTypes.email;
};