import { z } from "zod";
import {
  booleanField,
  emailField,
  passwordField,
  phoneField,
  stringField,
} from "./global.schema";

const passwordMatchRefinement = {
  message: "Passwords mismatched",
  path: ["confirmPassword"],
};

export const loginSchema = z.object({
  email: emailField("email"),
  password: passwordField("Password", 8),
});

export const loginDataSchema = z.object({
  email: stringField("email"),
  userName: stringField("userName"),
  accessToken: stringField("accessToken"),
  refreshToken: stringField("refreshToken"),
  profile: stringField("profile"),
  isVerified: booleanField("authProvider"),
});

export const emailSchema = z.object({
  email: emailField("email"),
});

export const otpVerifySchema = z.object({
  otp: stringField("otp", 6),
});

export const userRegisterSchema = z
  .object({
    userName: stringField("Full Name", 6),
    email: emailField("Email"),
    address: stringField("Address"),
    contactNumber: phoneField("Contact Number", 10, 10),
    authProvider: stringField("Auth Provider"),
    password: passwordField("Password"),
    confirmPassword: passwordField("Confirm Password"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    passwordMatchRefinement
  );

export const resetPasswordSchema = z
  .object({
    otp: stringField("otp", 6),
    password: passwordField("Password"),
    confirmPassword: passwordField("Confirm Password"),
  })
  .refine(
    (data) => data.password === data.confirmPassword,
    passwordMatchRefinement
  );

export type TLoginDataSchema = z.infer<typeof loginDataSchema>;
export type TloginSchema = z.infer<typeof loginSchema>;
export type TemailSchema = z.infer<typeof emailSchema>;
export type TotpVerifySchema = z.infer<typeof otpVerifySchema>;
export type TuserRegisterSchema = z.infer<typeof userRegisterSchema>;
export type TresetPasswordSchema = z.infer<typeof resetPasswordSchema>;
