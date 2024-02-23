"use client";
import Button from "@/app/components/core/buttons/Button";
import ImageInput from "@/app/components/core/inputs/ImageInput";
import TextInput from "@/app/components/core/inputs/TextInput";
import SelectInput from "@/app/components/core/selects/SelectInput";
import { maritalStatusOptions } from "@/app/constants";
import { IconButton } from "@/app/login/page";
import React, { useState } from "react";
import Layout from "../Layout";
import DateComponent from "@/app/components/core/inputs/DatePicker";

const Page = () => {
  const [image, setImage] = useState<string | null>(null);
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [childrenNumber, setChildrenNumber] = useState<string>("");

  return (
    <Layout step={1}>
      <div className="setup__cont">
        <ImageInput onChange={setImage} />
        <div className="setup__box">
          <DateComponent
            className="input__date input__setupdate"
            placeholder="Date Of Birth"
          />
          <SelectInput
            options={maritalStatusOptions}
            placeholder="Marital Status"
            handleChange={setMaritalStatus}
            selected={maritalStatus}
            className="input__setup"
            padding="2px 1px"
          />
          <TextInput
            value={childrenNumber}
            onChange={setChildrenNumber}
            placeholder="Number Of Children"
            className="input__setup"
          />
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
