import React from "react";
import Link from "next/link";

const MainLink = ({ text, className }: { text: string; className: string }) => {
  // go to dashBoard
  return (
    <Link href="/" className={`success__link ${className}`}>
      {text}
    </Link>
  );
};

export default MainLink;
