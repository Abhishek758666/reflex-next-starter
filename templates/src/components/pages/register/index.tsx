"use client";
import useForm from "@/hooks/useForm";
import { registerSchema } from "@/schemas/auth.schema";
import UIButton from "@/ui/uibutton";
import UIInput from "@/ui/uiinput";
import Link from "next/link";
import React from "react";

const Register = () => {
  const { state, error, handleInput, handleSubmit } = useForm({
    schema: registerSchema,
  });

  const onSubmit = (formData: {
    username: string;
    email: string;
    password: string;
  }) => {
    alert(JSON.stringify(formData));
  };

  return (
    <main className="register">
      <form
        className="register-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit);
        }}
      >
        <h1>Register</h1>
        <UIInput
          label="Username"
          type="text"
          name="username"
          isRequired
          defaultValue={state.username}
          error={error.username}
          onChange={handleInput}
          placeholder="eg. Ram Bahadur"
        />
        <UIInput
          label="Email"
          type="email"
          isRequired
          name="email"
          defaultValue={state.email}
          error={error.email}
          onChange={handleInput}
          placeholder="eg. reflex@gmail.com"
        />
        <UIInput
          label="Password"
          type="password"
          isRequired
          name="password"
          defaultValue={state.password}
          error={error.password}
          onChange={handleInput}
          placeholder="eg. *********"
        />
        <UIButton label="Register" type="primary" />

        <p>
          Already have an account
          <Link href={"/"}>Login here</Link>
        </p>
      </form>
    </main>
  );
};

export default Register;
