import logo from "@/app/assets/images/logo.jpeg";
import success from "@/app/assets/images/success.jpeg";
import Image from "next/image";
import Button from "../components/core/buttons/Button";
import { IconButton } from "../login/page";
import Link from "next/link";

const page = () => {
  return (
    <main className="success__container">
      <Image className="logo" src={logo} alt="company logo" />
      <div className="success__inner">
        <Image
          className="success"
          src={success}
          alt="successfully created accounnt"
        />
        <h3 className="heading__main">Account Created</h3>
        <p className="text__main">
          Welcome! Now complete your profile to unlock all the benefits of your
          new digital safe account.
        </p>
        <Button
          className="btn"
          text="complete My Profile"
          icon={<IconButton />}
        />
        <Link href="/" className="success__link">
          go to dashBoard
        </Link>
      </div>
    </main>
  );
};

export default page;
