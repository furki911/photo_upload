import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import { Header } from "../../Components/Header/Header";

const AppLayout = ({ props }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div style={{ height: "65px" }}>
        <Header />
      </div>
      <div style={{ flex: "1", display: "flex" }}>
        <LeftSidebar />
        <div style={{ flex: "1" }}>{props?.children}</div>
      </div>
    </div>
  );
};

export default AppLayout;
