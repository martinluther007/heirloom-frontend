"use client";
import HomeLayout from "../components/core/layouts/HomeLayout";
import MainContent from "./MainContent";
import EmptyContent from "./EmptyContent";
import { useState } from "react";

const Page = () => {
  const [hasContent, setHasContent] = useState<boolean>(true);
  return (
    <HomeLayout>{hasContent ? <MainContent /> : <EmptyContent />}</HomeLayout>
  );
};

export default Page;
