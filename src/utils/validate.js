export const checkValidateData = (email, password, fullName) => {
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email is Not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  return null;
};

export const checkValidateDataSignUp = (email, password, fullName) => {
  fullName = fullName.trim();

  const isFullNameValid = /^[A-Za-z\s]+$/.test(fullName);
  console.log(isFullNameValid);
  const isEmailValid =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isFullNameValid)
    return "Full Name is Required | Full name can only contain letters and spaces.";
  if (!isEmailValid) return "Email is Not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  return null;
};
