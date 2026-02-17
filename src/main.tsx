
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./utils/errorHandler"; // Initialize global error handler
import "./index.css";

// Initialize Microsoft Clarity (only in production)
if (import.meta.env.PROD && import.meta.env.VITE_CLARITY_ID) {
  try {
    // Use script injection method for better compatibility
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${import.meta.env.VITE_CLARITY_ID}");
    `;
    document.head.appendChild(script);
    console.log('Microsoft Clarity initialized');
  } catch (err) {
    console.error('Failed to initialize Clarity:', err);
  }
}

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
