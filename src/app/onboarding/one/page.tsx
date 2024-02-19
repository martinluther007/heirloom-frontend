import onboardImage from "@/app/assets/images/Brainstorming-1.jpeg";
import OnboardingLayout from "@/app/components/core/layouts/OnboardingLayout";

const page = () => {
  return (
    <OnboardingLayout
      text="is a repository for your valuable documents, assets and other information so you never lose them."
      onboardImage={onboardImage}
      heading="Your heirlooms digital vault "
      link="/onboarding/two"
      value={33}
    />
  );
};

export default page;
