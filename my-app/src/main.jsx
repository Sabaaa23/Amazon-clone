import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store.js";
import { store } from "../src/store/store.js";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "./constants/i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <PersistGate loading={"loading"} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
