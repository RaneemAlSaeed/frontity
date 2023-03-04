import React from "react";

import Link from "@frontity/components/link";

export default function Header() {
  return (
    <>
      <div className="HeaderContent">
        <span className="logo">Stars School </span>
        <div className="header-menu">
          <Link link="/">Home</Link>
          <Link link="/contact/">Contact Us</Link>
          <Link link="/about/">About Us</Link>
        </div>
      </div>
    </>
  );
}
