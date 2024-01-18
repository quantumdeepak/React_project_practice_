import React  from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

//  what this outlet do it will keep the the contnt of the lauyout in the same place
// and will keep on changing the content of the outlet or will update the content of the outlet.
function Layout() {
  return(
    <>
    <Header />
    <Outlet />
    <Footer />

    </>
  )
}

export default Layout;