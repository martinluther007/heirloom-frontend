"use client";
import React, { ReactNode, useMemo, useState } from "react";
import { IoReorderThree } from "react-icons/io5";
import logo from "@/app/assets/images/logo.jpeg";
import Link from "next/link";
import SearchInput from "../inputs/SearchInput";
import Image from "next/image";
import Modal from "../modals/Modal";

export const NavLink = ({
  text,
  icon,
  isActive,
  route,
}: {
  text: string;
  icon: Function;
  isActive: string;
  route: string;
}) => {
  return (
    <li>
      <Link
        className={`nav__link ${isActive === text && "nav__link--active"}`}
        href={`${route}`}
      >
        {icon(isActive)}
        {text}
      </Link>
    </li>
  );
};
const HomeLayout = ({ children }: { children: ReactNode }) => {
  const [isActive, setIsActive] = useState<string>("home");

  const [navIsActive, setNavIsActive] = useState(false);
  const [uploadModalIsActive, setUploadModalIsActive] = useState(false);
  const navElements = useMemo(
    () => [
      {
        name: "home",
        link: "/home",
        icon: (isActive: string) => (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M10.8334 14.1667H9.16675C8.47508 14.1667 7.91675 14.725 7.91675 15.4167V18.3334H12.0834V15.4167C12.0834 14.725 11.5251 14.1667 10.8334 14.1667Z"
              stroke={isActive === "home" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M1.66675 18.3333H18.3334"
              stroke={isActive === "home" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.45825 18.3333L2.49992 8.3083C2.49992 7.79997 2.74159 7.31668 3.14159 7.00001L8.97492 2.45834C9.57492 1.99167 10.4166 1.99167 11.0249 2.45834L16.8583 6.99167C17.2666 7.30834 17.4999 7.79164 17.4999 8.3083V18.3333"
              stroke={isActive === "home" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M7.91675 11.4584H6.25008C5.79175 11.4584 5.41675 11.0834 5.41675 10.625V9.37502C5.41675 8.91669 5.79175 8.54169 6.25008 8.54169H7.91675C8.37508 8.54169 8.75008 8.91669 8.75008 9.37502V10.625C8.75008 11.0834 8.37508 11.4584 7.91675 11.4584Z"
              stroke={isActive === "home" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              opacity="0.4"
              d="M13.75 11.4584H12.0833C11.625 11.4584 11.25 11.0834 11.25 10.625V9.37502C11.25 8.91669 11.625 8.54169 12.0833 8.54169H13.75C14.2083 8.54169 14.5833 8.91669 14.5833 9.37502V10.625C14.5833 11.0834 14.2083 11.4584 13.75 11.4584Z"
              stroke={isActive === "home" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinejoin="round"
            />
            <path
              d="M15.8333 5.83331L15.8083 3.33331H12.1416"
              stroke={isActive === "home" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        name: "safeguard",
        link: "/safeguard",

        icon: (isActive: string) => (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.4">
              <path
                d="M6.66675 10H13.3334"
                stroke={isActive === "safeguard" ? "#FD6130" : "#979DAC"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 13.3334V6.66669"
                stroke={isActive === "safeguard" ? "#FD6130" : "#979DAC"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5V7.50002C18.3334 3.33335 16.6667 1.66669 12.5001 1.66669H7.50008C3.33341 1.66669 1.66675 3.33335 1.66675 7.50002V12.5C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334Z"
              stroke={isActive === "safeguard" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        name: "vault",
        link: "/vault",

        icon: (isActive: string) => (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.74155 1.85833L4.58322 3.425C3.62489 3.78333 2.84155 4.91666 2.84155 5.93333V12.125C2.84155 13.1083 3.49155 14.4 4.28322 14.9917L7.86655 17.6667C9.04155 18.55 10.9749 18.55 12.1499 17.6667L15.7332 14.9917C16.5249 14.4 17.1749 13.1083 17.1749 12.125V5.93333C17.1749 4.90833 16.3916 3.775 15.4332 3.41666L11.2749 1.85833C10.5666 1.6 9.43322 1.6 8.74155 1.85833Z"
              stroke={isActive === "vault" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g opacity="0.4">
              <path
                d="M9.99992 10.4167C10.9204 10.4167 11.6666 9.67049 11.6666 8.75001C11.6666 7.82954 10.9204 7.08334 9.99992 7.08334C9.07944 7.08334 8.33325 7.82954 8.33325 8.75001C8.33325 9.67049 9.07944 10.4167 9.99992 10.4167Z"
                stroke={isActive === "vault" ? "#FD6130" : "#979DAC"}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 10.4167V12.9167"
                stroke={isActive === "vault" ? "#FD6130" : "#979DAC"}
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        ),
      },
      {
        name: "settings",
        link: "/settings",

        icon: (isActive: string) => (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.34"
              d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
              stroke={isActive === "settings" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.66675 10.7333V9.26666C1.66675 8.4 2.37508 7.68333 3.25008 7.68333C4.75841 7.68333 5.37508 6.61666 4.61675 5.30833C4.18341 4.55833 4.44175 3.58333 5.20008 3.15L6.64175 2.325C7.30008 1.93333 8.15008 2.16666 8.54175 2.825L8.63341 2.98333C9.38341 4.29166 10.6167 4.29166 11.3751 2.98333L11.4667 2.825C11.8584 2.16666 12.7084 1.93333 13.3667 2.325L14.8084 3.15C15.5667 3.58333 15.8251 4.55833 15.3917 5.30833C14.6334 6.61666 15.2501 7.68333 16.7584 7.68333C17.6251 7.68333 18.3417 8.39166 18.3417 9.26666V10.7333C18.3417 11.6 17.6334 12.3167 16.7584 12.3167C15.2501 12.3167 14.6334 13.3833 15.3917 14.6917C15.8251 15.45 15.5667 16.4167 14.8084 16.85L13.3667 17.675C12.7084 18.0667 11.8584 17.8333 11.4667 17.175L11.3751 17.0167C10.6251 15.7083 9.39175 15.7083 8.63341 17.0167L8.54175 17.175C8.15008 17.8333 7.30008 18.0667 6.64175 17.675L5.20008 16.85C4.44175 16.4167 4.18341 15.4417 4.61675 14.6917C5.37508 13.3833 4.75841 12.3167 3.25008 12.3167C2.37508 12.3167 1.66675 11.6 1.66675 10.7333Z"
              stroke={isActive === "settings" ? "#FD6130" : "#979DAC"}
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ],
    []
  );
  return (
    <main className="home__container">
      {uploadModalIsActive && <Modal />}
      <IoReorderThree
        onClick={() => setNavIsActive(!navIsActive)}
        className="nav__mobilehandler"
      />
      <div className={`home__navcontainer ${navIsActive && "navisactive"}`}>
        <Link className="logo__link" href="/">
          <Image src={logo} alt="mantled logo to route to home page" />
        </Link>
        <div className="nav__container">
          <h4 className="nav__header">Menu</h4>
          <nav>
            <ul>
              {navElements.map((el) => (
                <NavLink
                  key={el.name}
                  route={el.link}
                  isActive={isActive}
                  text={el.name}
                  icon={el.icon}
                />
              ))}
            </ul>
          </nav>
          <button className="success__link button__logout">logout</button>
        </div>
      </div>

      <div className="home__maincontent">
        <div className="home__searchcontainer">
          <SearchInput placeholder="search everything.." />
        </div>

        {children}
      </div>
    </main>
  );
};

export default HomeLayout;
