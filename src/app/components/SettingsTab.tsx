import React, { useMemo } from "react";
import profileImage from "@/app/assets/images/Financia-data-1.jpeg";
import Image from "next/image";
import Link from "next/link";

const Icon = ({ isActive = false }: { isActive?: boolean }) => (
  <svg
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.62117 6.05591L2.19101 0.394931C2.07195 0.269791 1.93031 0.170464 1.77424 0.102681C1.61818 0.0348978 1.45078 0 1.28171 0C1.11265 0 0.945252 0.0348978 0.789187 0.102681C0.633122 0.170464 0.491475 0.269791 0.372418 0.394931C0.133886 0.645086 0 0.983479 0 1.3362C0 1.68893 0.133886 2.02732 0.372418 2.27747L4.90609 7.00386L0.372418 11.7302C0.133886 11.9804 0 12.3188 0 12.6715C0 13.0242 0.133886 13.3626 0.372418 13.6128C0.492086 13.7365 0.634008 13.8344 0.790045 13.9009C0.946082 13.9673 1.11317 14.001 1.28171 14C1.45026 14.001 1.61734 13.9673 1.77338 13.9009C1.92942 13.8344 2.07134 13.7365 2.19101 13.6128L7.62117 7.95181C7.74121 7.82769 7.83649 7.68002 7.90151 7.51732C7.96652 7.35462 8 7.18011 8 7.00386C8 6.82761 7.96652 6.6531 7.90151 6.4904C7.83649 6.3277 7.74121 6.18003 7.62117 6.05591Z"
      fill={`${isActive ? "#D90368" : "#979DAC"}`}
    />
  </svg>
);

const SettingsTab = () => {
  const links = useMemo(
    () => [
      {
        title: "Security Settings",
        isActive: true,
        route: "settings/security",
      },
      { title: "Next of Kin", isActive: false, route: "settings/next-of-kin" },
      { title: "Asset Overview", isActive: false },
      { title: "Support", isActive: false },
      { title: "Billing & Subscription", isActive: false },
      { title: "Lawyers Info", isActive: false },
    ],
    []
  );
  return (
    <div className="settings__box">
      <div className="settings__box--1">
        <div>
          <Image className="image" src={profileImage} alt="user name" />
          <div>
            <h3 className="heading__main">Chukwuciroma Adekunle</h3>
            <p>ciromabobo@email.com</p>
          </div>
        </div>

        <Icon />
      </div>

      <div className="settings__linkbox">
        {links.map(({ title, isActive, route }, index) => (
          <Link href={route ?? "/"} className="settings__linkcard" key={index}>
            <p className={`${isActive && "settings__linkcard--active"}`}>
              {title}
            </p>
            <Icon isActive={isActive} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SettingsTab;
