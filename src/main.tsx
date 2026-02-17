
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./utils/errorHandler"; // Initialize global error handler
import "./index.css";

// Initialize Microsoft Clarity (only in production)
if (import.meta.env.PROD && import.meta.env.VITE_CLARITY_ID) {
  import('@microsoft/clarity').then(({ clarity }) => {
    clarity.init(import.meta.env.VITE_CLARITY_ID);
    console.log('Microsoft Clarity initialized');
  }).catch(err => {
    console.error('Failed to initialize Clarity:', err);
  });
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
