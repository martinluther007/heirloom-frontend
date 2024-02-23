import onboardImage from "@/app/assets/images/Online-transactions-1.jpeg";
import OnboardingLayout from "@/app/components/core/layouts/OnboardingLayout";

const Page = () => {
  return (
    <OnboardingLayout
      text="family heirlooms that have been passed down from generation to generation? Maybe you want a secure digital location to record these valuable effects and share with your family with secure end-to-end encryption, when the time is right. Heirloom does just that for you."
      onboardImage={onboardImage}
      heading="Do you own landed properties"
      link="/onboarding/three"
      value={100}
    />
  );
};

export default Page;
