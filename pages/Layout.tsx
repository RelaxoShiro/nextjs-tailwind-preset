import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const Layout = ({
  children,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  console.log("Test");
  return (
    <div className="min-h-screen bg-bgmain text-white font-Lexend overflow-hidden">
      <Sidebar />
      <div className="flex">
        <div className="w-full h-screen overflow-y-auto">
          <div className="pt-8 min-w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
