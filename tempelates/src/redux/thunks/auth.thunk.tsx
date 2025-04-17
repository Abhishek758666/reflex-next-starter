import { createAsyncThunk } from "@reduxjs/toolkit";
import { successToast } from "@/lib/toastify";
import { doGet, doPost } from "@/lib/axios";
import { TLoginSchema } from "@/schemas/auth.schema";

export const login = createAsyncThunk("login", async (data: TLoginSchema) => {
  try {
    const response = await doPost("/AdminLogin", data);
    successToast("Login success");
    return response;
  } catch (error: any) {
    throw error;
  }
});

export const healthCheck = createAsyncThunk<
  any,
  {
    token: string;
    signal?: AbortSignal;
  }
>("healthCheck", async ({ signal, token }) => {
  try {
    const response = await doGet("/ValidateToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      signal: signal,
    });

    return response;
  } catch (error: any) {
    throw error;
  }
});
