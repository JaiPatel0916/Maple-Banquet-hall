import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

/* ✅ ROOT WRAPPER (for hooks) */
const Root = () => {
  useEffect(() => {
    const clearPopupFlag = () => {
      sessionStorage.removeItem("popupSeen");
    };

    // ✅ Clear popup flag ONLY when tab/window is closed or refreshed
    window.addEventListener("beforeunload", clearPopupFlag);

    return () => {
      window.removeEventListener("beforeunload", clearPopupFlag);
    };
  }, []);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
        style={{ top: "80px" }}
      />
      <App />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Root />
  </BrowserRouter>
);
