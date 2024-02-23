"use client";
import React, { useState } from "react";
import ImageInput from "../components/core/inputs/ImageInput";
import TextInput from "../components/core/inputs/TextInput";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import Button from "../components/core/buttons/Button";
import SettingsLayout from "../components/core/layouts/SettingsLayout";

const Page = () => {
  const [profile, setProfile] = useState("second");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <SettingsLayout>
      <div className="settings__box--2">
        <h3 className="heaading__main">Profile Settings</h3>
        <ImageInput onChange={setProfile} />
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
