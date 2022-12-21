
/**
 * Checks if the content is empty
 */
export function isEmpty(value) {
  if (!value || value == null) return true;

  return value.replace(/\s/g, "") == "";
}

/**
 * Checks if the content is a valid email
 */
export function isEmail(value) {
  if (isEmpty(value)) return false;

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return value.match(regex);
}

/**
 * Checks if both password match
 */
export function isPasswordMatch(password1, password2) {
  if (isEmpty(password1) && isEmpty(password2)) return false;

  return password1 === password2
}

const InputValidator = {
  isEmpty, isEmail, isPasswordMatch
};

export default InputValidator;