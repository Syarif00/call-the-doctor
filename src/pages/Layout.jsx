import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
