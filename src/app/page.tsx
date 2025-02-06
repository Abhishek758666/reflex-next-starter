import ThemeToggler from "@/components/theme/themeToggler";
import UIButton from "@/ui/uibutton";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="home">
      <ThemeToggler />
      <h1 className="home-head">
        <Link target="_blank" href={"https://reflexitsolution.com/"}>
          Reflex
        </Link>
        Next Js Starter Kit
      </h1>
      <UIButton label="Visit" type="primary" />
    </div>
  );
};

export default page;
