import React, { ReactNode } from "react";
import logo from "@/app/assets/images/logo.jpeg";
import Image from "next/image";
import profileImage from "@/app/assets/images/profilesetup.jpeg";

const Layout = ({
  children,
  step,
  text,
}: {
  children: ReactNode;
  step?: number;
  text?: string;
}) => {
  return (
    <main className="login__container">
      <div className="login__box login__box--1">
        <div className="sect-1 setup__height">
          <Image src={logo} className="login__logo" alt="mantled logo" />
          {step && <p className="setup__intro">step {step} of 3</p>}
          <h2 className="login__header">{text ?? "complete Your info"}</h2>

          {children}
        </div>
      </div>
      <div className="login__box login__box--2">
        <Image
          src={profileImage}
          className="login__image"
          alt="login to your account"
        />
      </div>
    </main>
  );
};

export default Layout;
