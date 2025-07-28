"use client";

import { AuthWidget } from "@/widgets";
import { LoginForm } from "@/features";

export const LoginPage = () => {
  return (
    <AuthWidget pageType="login">
      <LoginForm />
    </AuthWidget>
  );
};
