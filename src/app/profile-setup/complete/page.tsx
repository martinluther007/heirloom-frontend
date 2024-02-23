import success from "@/app/assets/images/success.jpeg";
import Button from "@/app/components/core/buttons/Button";
import { IconButton } from "@/app/login/page";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <main className="onboarding__container">
      <div className="setup__successbox">
        <Image src={success} alt="profile complete success" />
        <h2 className="heading__main">Profile Completed</h2>
        <p className="text__main">
          Great! You have completed your profile. Go to your Dashboard to access
          your personal vault.
        </p>

        <Button className="btn" text="add an asset" icon={<IconButton />} />

        <Link href="/" className="success__link setup__paymentlaterlink">
          go to dashBoard
        </Link>
      </div>
    </main>
  );
};

export default Page;
