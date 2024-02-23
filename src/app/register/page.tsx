"use client";
import { useState } from "react";
import PasswordInput from "../components/core/inputs/PasswordInput";
import TextInput from "../components/core/inputs/TextInput";
import AuthLayout from "../components/core/layouts/AuthLayout";
import Link from "next/link";
import Button from "../components/core/buttons/Button";
import { IconButton } from "../login/page";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const Page = () => {
  const [firstame, setFirstame] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <AuthLayout>
      <form className="login__form">
        <TextInput
          onChange={setFirstame}
          className="input__login"
          placeholder="full name"
          value={firstame}
        />
        <TextInput
          onChange={setEmail}
          className="input__login"
          placeholder="email address"
          value={email}
        />

        <PhoneInput
          country={"us"}
          placeholder="Phone Number"
          onChange={setPhoneNumber}
          value={phoneNumber}
        />
        <PasswordInput
          onChange={setPassword}
          value={password}
          className="input__login"
          placeholder="password"
        />

        <Button
          className="button__login"
          text="Create My Account"
          icon={<IconButton />}
        />
        <Link className="auth__link" href="/login">
          login
        </Link>
      </form>
    </AuthLayout>
  );
};

export default Page;
