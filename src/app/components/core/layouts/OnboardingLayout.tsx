import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import onboardLogo from "@/app/assets/images/onboardlogo.jpeg";
import { IoInformationCircleSharp } from "react-icons/io5";

const OnboardingLayout = ({
  onboardImage,
  text,
  link,
  heading,
  value,
}: {
  onboardImage: StaticImageData;
  text: string;
  link: string;
  heading: string;
  value: number;
}) => {
  return (
    <main className="onboarding__container">
      <div className="onboarding__box">
        <div className="onboarding__box--1">
          <IoInformationCircleSharp className="onboarding__icon" size={23} />
          <p>Why Protect Your Assets?</p>
          <Image src={onboardLogo} alt="onboarding" />
        </div>
        <progress value={value} max={100} />
        <Image
          className="onboarding__image"
          src={onboardImage}
          alt="brain storming 1"
        />
        <div className="onboarding__info">
          <h3 className="heading__main">{heading}</h3>
          <p className="onboarding__intro text__main">{text}</p>
        </div>
        <Link className="onboarding__link" href={link}>
          next
        </Link>
      </div>
    </main>
  );
};

export default OnboardingLayout;
