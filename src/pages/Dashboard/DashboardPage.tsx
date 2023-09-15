import Link from "next/link";
import React from "react";
import Navbar from "./components/Navbar";
import UserFeed from "./components/UserFeed";

function DashboardPage() {
  return( 
  <>
  <Navbar />
<UserFeed/>
</>)
}

export default DashboardPage;
