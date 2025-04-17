"use client";
import useForm from "@/hooks/useForm";
import { loginSchema } from "@/schemas/auth.schema";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Link from "next/link";
import React from "react";
import { z } from "zod";

const Login = () => {
  const { state, error, handleInput, handleSubmit } = useForm({
    schema: loginSchema,
  });

  const onSubmit = (formData: { email: string; password: string }) => {
    alert(JSON.stringify(formData));
  };

  return (
    <main className="login">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit);
        }}
      >
        <h1>Login</h1>
        <UIInput
          label="Email"
          type="email"
          name="email"
          isRequired
          placeholder="eg. reflex@gmail.com"
          defaultValue={state.email || ""}
          onChange={handleInput}
          error={error.email}
        />
        <UIInput
          label="Password"
          type="password"
          name="password"
          isRequired
          placeholder="eg. *********"
          defaultValue={state.password || ""}
          onChange={handleInput}
          error={error.password}
        />
        <UIButton label="Login" type="primary" />
        <p>
          Don&apos;t have an account?
          <Link href={"/register"}>Register here</Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
