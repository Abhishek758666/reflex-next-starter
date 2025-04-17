import NavBar from "@/components/nav";
import Sidebar from "@/components/sidebar";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-right">
        <NavBar name="Hey" showBars />
        <div className="dashboard-right--children">{children}</div>
      </div>
    </div>
  );
};

export default layout;
