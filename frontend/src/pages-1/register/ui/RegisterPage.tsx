"use client";

import { RegisterForm } from "@/features";
import { AuthWidget } from "@/widgets";

export const RegisterPage = () => {
  return (
    <AuthWidget pageType="register">
      <RegisterForm />
    </AuthWidget>
  );
};
