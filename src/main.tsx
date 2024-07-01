import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Suspense>
            <App />
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
