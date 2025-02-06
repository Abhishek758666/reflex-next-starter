import { doPost } from "@/lib/axios";
import { TLoginDataSchema } from "@/schemas/auth.schema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk<
  TLoginDataSchema,
  {
    data: {
      email: string;
      password: string;
    };
    callback?: () => void;
  }
>("login", async ({ data, callback }) => {
  try {
    const response = await doPost("/customers/login", data);
    callback?.();
    return response;
  } catch (error) {
    throw error;
  }
});
