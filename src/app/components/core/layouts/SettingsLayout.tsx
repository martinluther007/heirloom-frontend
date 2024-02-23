import React, { ReactNode } from "react";
import SettingsTab from "../../SettingsTab";
import HomeLayout from "./HomeLayout";

const SettingsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <HomeLayout>
      <div className="settings__container">
        <SettingsTab />
        {children}
      </div>
    </HomeLayout>
  );
};

export default SettingsLayout;
