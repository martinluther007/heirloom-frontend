import SettingsLayout from "@/app/components/core/layouts/SettingsLayout";
import { useMemo } from "react";

const Page = () => {
  const supportDetails = useMemo(
    () => [
      {
        heading: "Contact Email",
        text: "support@mail.com",
        icon: () => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
              fill="#FD6130"
            />
            <path
              d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
              fill="#FD6130"
            />
          </svg>
        ),
      },
      {
        heading: "Contact Number",
        text: "+1  234 567 89",
        icon: () => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.56971 22.7C3.22971 22.7 1.24971 20.72 1.24971 18.38V12.22C1.19971 9.29999 2.27971 6.54999 4.29971 4.48999C6.31971 2.43999 9.02971 1.29999 11.9497 1.29999C17.9097 1.29999 22.7497 6.14999 22.7497 12.1V18.26C22.7497 20.64 20.8097 22.58 18.4297 22.58C16.0897 22.58 14.1097 20.6 14.1097 18.26V15.45C14.1097 14 15.2497 12.86 16.6997 12.86C18.1497 12.86 19.2897 14 19.2897 15.45V18.48C19.2897 18.89 18.9497 19.23 18.5397 19.23C18.1297 19.23 17.7897 18.89 17.7897 18.48V15.45C17.7897 14.77 17.2397 14.36 16.6997 14.36C16.0197 14.36 15.6097 14.91 15.6097 15.45V18.26C15.6097 19.79 16.8997 21.08 18.4297 21.08C19.9597 21.08 21.2497 19.79 21.2497 18.26V12.1C21.2497 6.96999 17.0797 2.79999 11.9497 2.79999C9.43971 2.79999 7.10971 3.76999 5.36971 5.53999C3.62971 7.30999 2.69971 9.67999 2.74971 12.2V18.38C2.74971 19.91 4.03971 21.2 5.56971 21.2C7.09971 21.2 8.38971 19.91 8.38971 18.38V15.57C8.38971 14.89 7.83971 14.48 7.29971 14.48C6.61971 14.48 6.20971 15.03 6.20971 15.57V18.49C6.20971 18.9 5.86971 19.24 5.45971 19.24C5.04971 19.24 4.70971 18.9 4.70971 18.49V15.57C4.70971 14.12 5.84971 12.98 7.29971 12.98C8.74971 12.98 9.88971 14.12 9.88971 15.57V18.38C9.88971 20.72 7.90971 22.7 5.56971 22.7Z"
              fill="#FD6130"
            />
          </svg>
        ),
      },
      {
        heading: "Website",
        text: "www.heirloom.com",
        icon: () => (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#FD6130"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
              stroke="#FD6130"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 3C16.95 8.84 16.95 15.16 15 21"
              stroke="#FD6130"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
              stroke="#FD6130"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 9.00001C8.84 7.05001 15.16 7.05001 21 9.00001"
              stroke="#FD6130"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ),
      },
    ],
    []
  );
  return (
    <SettingsLayout>
      <div className="settings__box--2">
        <h3 className="heaading__main">Support</h3>

        <form className="settings__form">
          {supportDetails.map(({ heading, text, icon }, index) => (
            <div key={index} className="support__card">
              <div>
                <h5>{heading}</h5>
                <h1>{text}</h1>
              </div>
              {icon()}
            </div>
          ))}
        </form>
      </div>
    </SettingsLayout>
  );
};

export default Page;
