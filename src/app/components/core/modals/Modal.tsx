import Image from "next/image";
import React, { useMemo } from "react";
import modalImage from "@/app/assets/images/modal.jpeg";

const Modal = () => {
  const assetData = useMemo(
    () => [
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 7.07C15 6.4 14.67 5.78 14.11 5.41L10.11 2.74C9.44 2.29 8.56 2.29 7.89 2.74L3.89 5.41C3.34 5.78 3 6.4 3 7.07V12.75C3 13.03 3.22 13.25 3.5 13.25H14.5C14.78 13.25 15 13.03 15 12.75V7.07ZM9 10.75C8.04 10.75 7.25 9.96 7.25 9C7.25 8.04 8.04 7.25 9 7.25C9.96 7.25 10.75 8.04 10.75 9C10.75 9.96 9.96 10.75 9 10.75Z"
              fill="#006C67"
            />
            <path
              d="M22 21.25H20.73V18.25C21.68 17.94 22.37 17.05 22.37 16V14C22.37 12.69 21.3 11.62 19.99 11.62C18.68 11.62 17.61 12.69 17.61 14V16C17.61 17.04 18.29 17.92 19.22 18.24V21.25H15V15.25C15 14.97 14.78 14.75 14.5 14.75H3.5C3.22 14.75 3 14.97 3 15.25V21.25H2C1.59 21.25 1.25 21.59 1.25 22C1.25 22.41 1.59 22.75 2 22.75H19.93C19.95 22.75 19.96 22.76 19.98 22.76C20 22.76 20.01 22.75 20.03 22.75H22C22.41 22.75 22.75 22.41 22.75 22C22.75 21.59 22.41 21.25 22 21.25ZM8.25 18.25C8.25 17.84 8.59 17.5 9 17.5C9.41 17.5 9.75 17.84 9.75 18.25V21.25H8.25V18.25Z"
              fill="#006C67"
            />
          </svg>
        ),
        asset: "housing property",
        text: "Brief explanation of the above",
        assetNumber: 35,
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.71 2H16.76C16.37 2 16.05 2.32 16.05 2.71C16.05 3.11 16.37 3.43 16.76 3.43H17.71C19.42 3.43 20.81 4.82 20.81 6.52V12.4C20.45 12.21 20.05 12.11 19.62 12.11H15.81C14.37 12.11 13.19 13.28 13.19 14.73V16.29H10.81V14.73C10.81 13.28 9.63001 12.11 8.19001 12.11H4.38001C3.95001 12.11 3.55001 12.21 3.19001 12.4V6.52C3.19001 4.82 4.58001 3.43 6.29001 3.43H7.24001C7.63001 3.43 7.95001 3.11 7.95001 2.71C7.95001 2.32 7.63001 2 7.24001 2H6.29001C3.79001 2 1.76001 4.03 1.76001 6.52V14.73V19.38C1.76001 20.83 2.94001 22 4.38001 22H8.19001C9.63001 22 10.81 20.83 10.81 19.38V17.71H13.19V19.38C13.19 20.83 14.37 22 15.81 22H19.62C21.06 22 22.24 20.83 22.24 19.38V14.73V6.52C22.24 4.03 20.21 2 17.71 2Z"
              fill="#DA2C38"
            />
          </svg>
        ),
        asset: "Personal Effects",
        text: "Brief explanation of the above",
        assetNumber: 25,
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.17 6.63999C18.74 4.46999 17.13 3.51999 14.89 3.51999H6.11002C3.47002 3.51999 1.71002 4.83999 1.71002 7.91999V13.07C1.71002 15.29 2.62002 16.59 4.12002 17.15C4.34002 17.23 4.58002 17.3 4.83002 17.34C5.23002 17.43 5.66002 17.47 6.11002 17.47H14.9C17.54 17.47 19.3 16.15 19.3 13.07V7.91999C19.3 7.44999 19.26 7.02999 19.17 6.63999ZM5.53002 12C5.53002 12.41 5.19002 12.75 4.78002 12.75C4.37002 12.75 4.03002 12.41 4.03002 12V8.99999C4.03002 8.58999 4.37002 8.24999 4.78002 8.24999C5.19002 8.24999 5.53002 8.58999 5.53002 8.99999V12ZM10.5 13.14C9.04002 13.14 7.86002 11.96 7.86002 10.5C7.86002 9.03999 9.04002 7.85999 10.5 7.85999C11.96 7.85999 13.14 9.03999 13.14 10.5C13.14 11.96 11.96 13.14 10.5 13.14ZM16.96 12C16.96 12.41 16.62 12.75 16.21 12.75C15.8 12.75 15.46 12.41 15.46 12V8.99999C15.46 8.58999 15.8 8.24999 16.21 8.24999C16.62 8.24999 16.96 8.58999 16.96 8.99999V12Z"
              fill="#F17105"
            />
            <path
              d="M22.3 10.92V16.07C22.3 19.15 20.54 20.48 17.89 20.48H9.11001C8.36001 20.48 7.69001 20.37 7.11001 20.15C6.64001 19.98 6.23001 19.73 5.90001 19.41C5.72001 19.24 5.86001 18.97 6.11001 18.97H14.89C18.59 18.97 20.79 16.77 20.79 13.08V7.92C20.79 7.68 21.06 7.53 21.23 7.71C21.91 8.43 22.3 9.48 22.3 10.92Z"
              fill="#F17105"
            />
          </svg>
        ),
        asset: "Financial Assets",
        text: "Brief explanation of the above",
        assetNumber: 25,
      },
      {
        icon: (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 3.67C19.5 3.66 19.5 3.65 19.48 3.64C19.26 3.36 18.97 3.21 18.63 3.21C18.1 3.21 17.46 3.56 16.77 4.3C15.95 5.18 14.69 5.11 13.97 4.15L12.96 2.81C12.56 2.27 12.03 2 11.5 2C10.97 2 10.44 2.27 10.04 2.81L9.02 4.16C8.31 5.11 7.06 5.18 6.24 4.31L6.23 4.3C5.1 3.09 4.09 2.91 3.52 3.64C3.5 3.65 3.5 3.66 3.5 3.67C3.14 4.44 3 5.52 3 7.04V16.96C3 18.48 3.14 19.56 3.5 20.33C3.5 20.34 3.51 20.36 3.52 20.37C4.1 21.09 5.1 20.91 6.23 19.7L6.24 19.69C7.06 18.82 8.31 18.89 9.02 19.84L10.04 21.19C10.44 21.73 10.97 22 11.5 22C12.03 22 12.56 21.73 12.96 21.19L13.97 19.85C14.69 18.89 15.95 18.82 16.77 19.7C17.46 20.44 18.1 20.79 18.63 20.79C18.97 20.79 19.26 20.65 19.48 20.37C19.49 20.36 19.5 20.34 19.5 20.33C19.86 19.56 20 18.48 20 16.96V7.04C20 5.52 19.86 4.44 19.5 3.67ZM14 14.5H8C7.59 14.5 7.25 14.16 7.25 13.75C7.25 13.34 7.59 13 8 13H14C14.41 13 14.75 13.34 14.75 13.75C14.75 14.16 14.41 14.5 14 14.5ZM16 11H8C7.59 11 7.25 10.66 7.25 10.25C7.25 9.84 7.59 9.5 8 9.5H16C16.41 9.5 16.75 9.84 16.75 10.25C16.75 10.66 16.41 11 16 11Z"
              fill="#084887"
            />
          </svg>
        ),
        asset: "Personal Memoirs",
        text: "Brief explanation of the above",
        assetNumber: 15,
      },
    ],
    []
  );
  return (
    <div className="modal__container">
      <div className="modal__contentbox">
        <svg
          className="modal__close"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_319_6844)">
            <rect width="30" height="30" rx="15" fill="white" />
          </g>
          <rect
            x="8.33008"
            y="10.0842"
            width="2.25"
            height="16.33"
            rx="1.125"
            transform="rotate(-45 8.33008 10.0842)"
            fill="#7F7F84"
          />
          <rect
            x="9.74426"
            y="21.6312"
            width="2.25"
            height="16.33"
            rx="1.125"
            transform="rotate(-135 9.74426 21.6312)"
            fill="#7F7F84"
          />
          <defs>
            <filter
              id="filter0_b_319_6844"
              x="-80"
              y="-80"
              width="190"
              height="190"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="40" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_319_6844"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_319_6844"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <div className="div__intro">
          <h2 className="heading__main">Save Your Assets</h2>
          <Image
            className="upload__image"
            src={modalImage}
            alt="upload assets"
          />
        </div>

        <div className="asset__container">
          {assetData.map((el, index) => (
            <button key={index} className="asset__card">
              <div>
                {el.icon}
                <div>
                  <h2 className="heading__main">{el.asset}</h2>
                  <p className="text__main">{el.text}</p>
                </div>
              </div>

              <div>
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.62117 6.05591L2.19101 0.394931C2.07195 0.269791 1.93031 0.170464 1.77424 0.102681C1.61818 0.0348978 1.45078 0 1.28171 0C1.11265 0 0.945252 0.0348978 0.789187 0.102681C0.633122 0.170464 0.491475 0.269791 0.372418 0.394931C0.133886 0.645086 0 0.983479 0 1.3362C0 1.68893 0.133886 2.02732 0.372418 2.27747L4.90609 7.00386L0.372418 11.7302C0.133886 11.9804 0 12.3188 0 12.6715C0 13.0242 0.133886 13.3626 0.372418 13.6128C0.492086 13.7365 0.634008 13.8344 0.790045 13.9009C0.946082 13.9673 1.11317 14.001 1.28171 14C1.45026 14.001 1.61734 13.9673 1.77338 13.9009C1.92942 13.8344 2.07134 13.7365 2.19101 13.6128L7.62117 7.95181C7.74121 7.82769 7.83649 7.68002 7.90151 7.51732C7.96652 7.35462 8 7.18011 8 7.00386C8 6.82761 7.96652 6.6531 7.90151 6.4904C7.83649 6.3277 7.74121 6.18003 7.62117 6.05591Z"
                    fill="#979DAC"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
