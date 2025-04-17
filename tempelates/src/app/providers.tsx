"use client";

import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";

import "@/styles/globals.css";
import store, { persistor } from "@/redux/store";
import Theme from "@/components/theme/theme";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [show, setShow] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const hiddenPaths = ["/login", "/register"];
    setShow(!hiddenPaths.includes(pathname));
  }, [pathname]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Theme>
          <ToastContainer />
          {/* {show && <Navbar />} */}
          {children}
          {/* {show && <Footer />} */}
        </Theme>
      </PersistGate>
    </Provider>
  );
};

export default Providers;
