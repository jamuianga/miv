
/**
 * Checks if the content is empty
 */
export function isEmpty(value) {
  if (!value || value == null) return true;

  return value.replace(/\s/g, "") == "";
}

/**
 * checks if the content is a valid email
 */
export function isEmail(value) {
  if (isEmpty(value)) return false;

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  return value.match(regex);
}

const InputValidator = {
  isEmpty, isEmail
};

export default InputValidator;