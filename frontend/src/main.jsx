import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import store from "./store.js";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#15803d",
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </Provider>
);
