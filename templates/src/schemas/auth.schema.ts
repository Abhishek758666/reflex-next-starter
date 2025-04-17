import { z } from "zod";
import { emailField, passwordField, stringField } from "./global.schema";

export const loginSchema = z.object({
  email: emailField("Email"),
  password: passwordField("Password"),
});

export const registerSchema = loginSchema.extend({
  username: stringField("username"),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
export type TRegisterSchema = z.infer<typeof registerSchema>;
