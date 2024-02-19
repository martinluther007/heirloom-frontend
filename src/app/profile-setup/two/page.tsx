"use client";
import Button from "@/app/components/core/buttons/Button";
import ImageInput from "@/app/components/core/inputs/ImageInput";
import TextInput from "@/app/components/core/inputs/TextInput";
import SelectInput from "@/app/components/core/selects/SelectInput";
import { maritalStatusOptions } from "@/app/constants";
import { IconButton } from "@/app/login/page";
import React, { useState } from "react";
import Layout from "../Layout";
import DocumentInput from "@/app/components/core/inputs/DocumentInput";

const page = () => {
  const [image, setImage] = useState<string | null>(null);
  const [maritalStatus, setMaritalStatus] = useState<string>("");
  const [childrenNumber, setChildrenNumber] = useState<string>("");

  return (
    <Layout step={2}>
      <div className="setup__cont">
        <div className="setup__box">
          <SelectInput
            options={maritalStatusOptions}
            placeholder="Nationality"
            handleChange={setMaritalStatus}
            selected={maritalStatus}
            className="input__setup input__margin"
            padding="2px 6px"
          />
          <SelectInput
            options={maritalStatusOptions}
            placeholder="Government ID"
            handleChange={setMaritalStatus}
            selected={maritalStatus}
            className="input__setup input__margin"
            padding="2px 6px"
          />
          <DocumentInput
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

export default page;
