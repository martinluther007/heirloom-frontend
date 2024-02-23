"use client";
import Button from "@/app/components/core/buttons/Button";
import PasswordInput from "@/app/components/core/inputs/PasswordInput";
import SettingsLayout from "@/app/components/core/layouts/SettingsLayout";
import { IconButton } from "@/app/login/page";
import React, { useState } from "react";

const Page = () => {
  const [profile, setProfile] = useState("second");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <SettingsLayout>
      <div className="settings__box--2">
        <h3 className="heaading__main">Security Settings</h3>

        <form className="settings__form">
          <p className="intro">Change Your Password</p>
          <PasswordInput
            onChange={setName}
            value={name}
            className="settings__input"
            placeholder="Precious Ogar"
          />
          <PasswordInput
            onChange={setEmail}
            value={email}
            className="settings__input"
            placeholder="daniels_kunle78@hotmail.com"
          />
          <PasswordInput
            onChange={setEmail}
            value={email}
            className="settings__input"
            placeholder="daniels_kunle78@hotmail.com"
          />

          <Button
            icon={<IconButton />}
            className="button__adv"
            text="save changes"
          />
        </form>
      </div>
    </SettingsLayout>
  );
};

export default Page;
