"use client";
import Button from "@/app/components/core/buttons/Button";
import TextInput from "@/app/components/core/inputs/TextInput";
import SettingsLayout from "@/app/components/core/layouts/SettingsLayout";
import { IconButton } from "@/app/login/page";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <SettingsLayout>
      <div className="settings__box--2">
        <h3 className="heaading__main">Next Of Kin </h3>

        <form className="settings__form">
          <TextInput
            onChange={setName}
            value={name}
            className="settings__input"
            placeholder="Precious Ogar"
          />
          <TextInput
            onChange={setEmail}
            value={email}
            className="settings__input"
            placeholder="daniels_kunle78@hotmail.com"
          />

          <PhoneInput
            country={"us"}
            placeholder="Phone Number"
            onChange={setPhoneNumber}
            value={phoneNumber}
          />

          <Button className="button__dead" text="save changes" />
        </form>
      </div>
    </SettingsLayout>
  );
};

export default Page;
