import React from "react";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar />
      </div>
    </div>
  );
}
