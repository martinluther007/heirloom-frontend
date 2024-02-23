import Image from "next/image";
import homeImage from "@/app/assets/images/homeim.jpeg";
import Button from "../components/core/buttons/Button";
import { IconButton } from "../login/page";
import MainLink from "../components/Link";

const EmptyContent = () => {
  return (
    <div className="home__main">
      <h3 className="heading">Hi, Precious 👋🏽</h3>
      <p className="text__main text">
        For athletes, high altitude produces two contradictory.
      </p>

      <div className="home__contentcontainer">
        <Image className="image" src={homeImage} alt="empty content" />
        <p className="text__main text">You haven’t added any asset</p>

        <Button text="Add AN Asset" icon={<IconButton />} className="btn" />

        <MainLink text="invite a lawyer" className="link" />
      </div>
    </div>
  );
};

export default EmptyContent;
