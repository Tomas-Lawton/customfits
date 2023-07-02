import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
import store from "./model/store";
import { Provider } from "react-redux";

function App() {
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
