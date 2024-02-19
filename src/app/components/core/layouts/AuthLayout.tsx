import { ReactNode } from "react";
import Image from "next/image";
import loginImage from "@/app/assets/images/auth_img.png";
import footerImage from "@/app/assets/images/authfoot.jpeg";
import logo from "@/app/assets/images/logo.jpeg";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="login__container">
      <div className="login__box login__box--1">
        <div className="sect-1">
          <Image src={logo} className="login__logo" alt="mantled logo" />
          <h2 className="login__header">Login To Your Account!</h2>
          <h4 className="login__sub">Log in to your secure digital vault.</h4>

          {children}
        </div>

        <div className=" sect-2">
          <Image className="login__footerImage" src={footerImage} alt="logi" />
        </div>
      </div>
      <div className="login__box login__box--2">
        <Image
          src={loginImage}
          className="login__image"
          alt="login to your account"
        />
      </div>
    </main>
  );
};

export default AuthLayout;
