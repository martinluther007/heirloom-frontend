"use client";
import Button from "@/app/components/core/buttons/Button";
import { IconButton } from "@/app/login/page";
import React, { useState } from "react";
import Layout from "../Layout";
import Image from "next/image";
import planImage from "@/app/assets/images/otp.jpeg";
import CheckBox from "@/app/components/core/inputs/CheckBox";
import Link from "next/link";

const page = () => {
  return (
    <Layout text="Choose Your Plan">
      <div className="setup__cont">
        <Image
          className="setup__paymentimage"
          src={planImage}
          alt="choose payment plan"
        />

        <div className="setup__box">
          <CheckBox
            plan="monthly plan"
            price="₦20,000"
            text="Monthly"
            value="monthly"
          />
          <CheckBox
            plan="quaterly plan"
            price="₦40,000"
            text="Quarterly"
            value="quarterly"
          />
          <CheckBox
            plan="yearly plan"
            price="₦60,000"
            text="Yearly"
            value="yearly"
          />
        </div>
        <Button
          text="Select This Plan"
          className="setup__btn  setup__btn--payment"
          icon={<IconButton />}
        />
        <Link href="/" className="success__link setup__paymentlaterlink">
          skip for now
        </Link>
      </div>
    </Layout>
  );
};

export default page;
