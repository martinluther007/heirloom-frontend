"use client";
import Button from "@/app/components/core/buttons/Button";
import TextInput from "@/app/components/core/inputs/TextInput";
import SettingsLayout from "@/app/components/core/layouts/SettingsLayout";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import DateComponent from "@/app/components/core/inputs/DatePicker";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <SettingsLayout>
      <div className="settings__box--2">
        <h3 className="heaading__main">Asset Report </h3>
        <h5 className="settings__assetRep--heading">
          Your report will be forwarded to your email address
          <span> precious@mail.com</span>
        </h5>

        <form className="settings__form">
          <DateComponent
            className="input__date input__setupdate settings__reportdate"
            placeholder="Date From"
          />

          <DateComponent
            className="input__date input__setupdate settings__reportdate"
            placeholder="Date To"
          />

          <Button
            className="button__adv button--def"
            text="Request Statement"
          />
        </form>
      </div>
    </SettingsLayout>
  );
};

export default Page;
