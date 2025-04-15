import { z } from "zod";
import { emailField, stringField } from "./global.schema";

export type TLoginSchema = z.infer<typeof loginSchema>;
export const loginSchema = z.object({
  email: emailField("Email"),
  password: stringField("Password", 3),
});
