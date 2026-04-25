import React from "react";
import Navbar from "../pages/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 ">
        <Outlet />
      </main>

      <Footer className="pb-0" />
    </div>
  );
};

export default Root;
