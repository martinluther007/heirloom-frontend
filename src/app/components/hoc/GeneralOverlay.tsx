"use client";
import { useState } from "react";

import Image from "next/image";
import otpImage from "@/app/assets/images/otp.jpeg";
import OtpInput from "react-otp-input";
import Button from "../core/buttons/Button";
import { IconButton } from "@/app/login/page";



const GeneralOverlay = () => {
  const [otp, setOtp] = useState("");

  return (
    <div className="overlay__main">
      <svg
      className="overlay__close"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_342_16515)">
          <rect width="30" height="30" rx="15" fill="#F5F5F5" />
        </g>
        <rect
          x="8.32996"
          y="10.0842"
          width="2.25"
          height="16.33"
          rx="1.125"
          transform="rotate(-45 8.32996 10.0842)"
          fill="#7F7F84"
        />
        <rect
          x="9.74414"
          y="21.6311"
          width="2.25"
          height="16.33"
          rx="1.125"
          transform="rotate(-135 9.74414 21.6311)"
          fill="#7F7F84"
        />
        <defs>
          <filter
            id="filter0_b_342_16515"
            x="-80"
            y="-80"
            width="190"
            height="190"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="40" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_342_16515"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_342_16515"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div className="overlay__box">
        <h3 className="heading">OTP Sent</h3>
        <Image
          className="image"
          src={otpImage}
          alt="Business people with laptop 1"
        />
        <p className="text">
          A 4-digit OTP has been sent to your phone number{" "}
          <span>+44 01 2345 678</span>
        </p>
        <OtpInput
          containerStyle="input__otpcontainer"
          inputStyle="input__otp"
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => <input {...props} />}
        />

        <Button
          className="button__otp"
          text="Verify  Your Account"
          icon={<IconButton />}
        />
        <p className="otp__decline">
          Didn’t receive an OTP? Resend in <span>01:30</span>
        </p>
      </div>
    </div>
  );
};

export default GeneralOverlay;
