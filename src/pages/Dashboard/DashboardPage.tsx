import Link from "next/link";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import UserFeed from "./components/UserFeed/UserFeed";

function DashboardPage() {
  return (
    <>
      <Navbar />
      <UserFeed />
    </>
  );
}

export default DashboardPage;
