export const PasswordStrong = (value) => {
  if (value.length < 6 || value.length > 15) {
    // add more regexes regarded to passwords
    return false;
  } else {
    return true;
  }
};
