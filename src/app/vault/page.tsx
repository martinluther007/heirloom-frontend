import React, { useMemo } from "react";
import HomeLayout from "../components/core/layouts/HomeLayout";
import pdfImage from "@/app/assets/images/pdfp.jpeg";
import Image from "next/image";

const Page = () => {
  const links = useMemo(
    () => [
      { title: "housing property", isActive: true },
      { title: "personal effects", isActive: false },
      { title: "personal memoirs", isActive: false },
      { title: "financial assets", isActive: false },
      { title: "debts and liabilities", isActive: false },
    ],
    []
  );
  return (
    <HomeLayout>
      <div className="vault__container">
        <div className="vault__nav">
          {links.map(({ title, isActive }, index) => (
            <button
              key={index}
              className={`heading__main vault__button ${
                isActive && "vault__button--active"
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        <div className="vault__main">
          <div className="vault__card">
            <Image className="image" src={pdfImage} alt="document" />
            <div>
              <h3>Bluth Company</h3>
              <p>Added 2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Page;
