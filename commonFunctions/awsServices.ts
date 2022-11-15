import React from "react";
import { Auth } from "aws-amplify";

export const SignIn = async (username: string, password: string) => {
  try {
    const response = await Auth.signIn(removeExtraSpace(username), password);
    return response;
  } catch (error) {
    return false;
  }
};

export const SignUp = async (
  phone: string,
  password: string,
  email: string
) => {
  try {
    await Auth.signUp({
      attributes: { email },
      password,
      username: phone,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export const confirmUser = async (user: string, otp: string) => {
  console.log(user, otp, "confirm User");
  try {
    await Auth.confirmSignUp(user, otp);
    return true;
  } catch (error) {
    return error;
  }
};

export const resenedOtp = async (user: string) => {
  try {
    await Auth.resendSignUp(user);
    return true;
  } catch (error) {
    return error;
  }
};

export const userData = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser({ bypassCache: true });
    return user;
  } catch (error) {
    return false;
  }
};

export const Logout = async () => {
  try {
    const user = await Auth.signOut();
    return true;
  } catch (error) {
    alert(error);
    return false;
  }
};

const removeExtraSpace = (data: string) => {
  let value = "";
  if (data) {
    value = data.replace(/ /g, "");
  }
  return value.toString();
};
