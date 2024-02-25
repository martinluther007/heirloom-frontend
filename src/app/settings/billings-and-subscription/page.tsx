import SettingsLayout from "@/app/components/core/layouts/SettingsLayout";
import atm from "@/app/assets/images/atm.jpeg";
import Image from "next/image";

const Page = () => {
  return (
    <SettingsLayout>
      <div className="settings__box--2">
        <h3 className="heaading__main">Billing & Subscription </h3>

        <div className="settings__form">
          <div className="billings__1">
            <div className="billings__1--intro">
              <p>Card Info</p>
              <button className="button__norm button__norm--warning">
                Remove Card
              </button>
            </div>
            <div className="billings__1--card">
              <div>
                <div className="inner">
                  <Image src={atm} alt="card details" />
                  <p className="text text--1">Mastercard</p>
                </div>
              </div>
              <p className="text text--2">**** **** **** *259</p>
            </div>
          </div>

          <div className="billings__1">
            <div className="billings__1--intro">
              <p>subscription</p>
              <button className="button__norm button__norm--okay">
                Change
              </button>
            </div>
            <div className="billings__1--card">
              <div className="billings__2--box1">
                <div>
                  <h2>Montly Subscription</h2>
                  <p>₦20,000</p>
                </div>
              </div>
              <div className="billings__2--box2">
                <div>
                  <h2>Next payment on </h2>
                  <p>24/06/2022</p>
                </div>
              </div>
            </div>
          </div>

          <div className="billings__1">
            <div className="billings__1--intro">
              <p>Billing Info</p>
            </div>
            <div className="billings__1--card">
              <div className="billings__3">
                <div className="billings__3--inner">
                  <p className="main__text">name</p>
                  <p className="sub__text"> Precious Jameson</p>
                </div>
                <div className="billings__3--inner">
                  <p className="main__text">Address</p>
                  <p className="sub__text">
                    Address 15 Isaac John street, Ikeja, lagos
                  </p>
                </div>
                <div className="billings__3--inner">
                  <p className="main__text">Email Address</p>
                  <p className="sub__text"> precious@mail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SettingsLayout>
  );
};

export default Page;
