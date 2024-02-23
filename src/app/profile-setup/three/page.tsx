"use client";
import Button from "@/app/components/core/buttons/Button";
import TextInput from "@/app/components/core/inputs/TextInput";
import { IconButton } from "@/app/login/page";
import React, { useState } from "react";
import Layout from "../Layout";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
const Page = () => {
  const [childrenNumber, setChildrenNumber] = useState<string>("");

  return (
    <Layout step={3}>
      <div className="setup__cont">
        <div className="setup__box">
          <TextInput
            value={childrenNumber}
            onChange={setChildrenNumber}
            placeholder="Next Of Kin Name"
            className="input__setup"
          />
          <TextInput
            value={childrenNumber}
            onChange={setChildrenNumber}
            placeholder="Next Of Kin Email"
            className="input__setup"
          />
          <PhoneInput />
        </div>
        <Button
          text="Proceed to Next"
          className="setup__btn"
          icon={<IconButton />}
        />
      </div>
    </Layout>
  );
};

export default Page;
