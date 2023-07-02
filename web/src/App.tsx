import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Landing from "./pages/Landing";
import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
import store from "./model/store";
import { Provider } from "react-redux";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3000ee",
          colorPrimaryHover: "#005FEE",
        },
      }}
    >
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Provider>
    </ConfigProvider>
  );
}
export default App;
