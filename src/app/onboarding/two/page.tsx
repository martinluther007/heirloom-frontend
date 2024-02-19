import onboardImage from "@/app/assets/images/Financia-data-1.jpeg";
import OnboardingLayout from "@/app/components/core/layouts/OnboardingLayout";

const page = () => {
  return (
    <OnboardingLayout
      text="about where you kept a copy of your birth certificate or marriage certificate? With heirlooms digital vault, a saved copy will be securely stored and can only be accessed and retrieved with your unique verification."
      onboardImage={onboardImage}
      heading="Why rack your brain"
      link="/onboarding/three"
      value={33}
    />
  );
};

export default page;
