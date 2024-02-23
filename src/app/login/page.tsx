"use client";
import TextInput from "../components/core/inputs/TextInput";
import PasswordInput from "../components/core/inputs/PasswordInput";
import Link from "next/link";
import Button from "../components/core/buttons/Button";
import { useState } from "react";
import AuthLayout from "../components/core/layouts/AuthLayout";
import GeneralOverlay from "../components/hoc/GeneralOverlay";
export const IconButton = () => {
  return (
    <svg
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1052 5.92993L22.7764 11.9999L16.1052 18.0699"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.4"
        d="M4.09277 12H22.5897"
        stroke="white"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [overlayIsShown, setOverlayIsShown] = useState(true);

  return (
    <AuthLayout>
      {overlayIsShown && <GeneralOverlay />}
      <form className="login__form">
        <TextInput
          onChange={setEmail}
          className="input__login"
          placeholder="email address"
          value={email}
        />
        <PasswordInput
          onChange={setPassword}
          value={password}
          className="input__login"
          placeholder="password"
        />
        <Link href="/" className="recover">
          forgot password?
        </Link>

        <Button className="button__login" text="login" icon={<IconButton />} />
        <Link className="auth__link" href="/register">
          Create An Account
        </Link>
      </form>
    </AuthLayout>
  );
};

export default Page;
