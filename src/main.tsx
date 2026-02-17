
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import "./utils/errorHandler"; // Initialize global error handler
import "./index.css";

// Initialize Google Analytics (only in production)
if (import.meta.env.PROD && import.meta.env.VITE_GA_MEASUREMENT_ID) {
  try {
    // Load gtag.js script
    const gtagScript = document.createElement('script');
    gtagScript.async = true;
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`;
    document.head.appendChild(gtagScript);

    // Initialize dataLayer and gtag
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${import.meta.env.VITE_GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
        send_page_view: true
      });
    `;
    document.head.appendChild(inlineScript);
    console.log('Google Analytics initialized');
  } catch (err) {
    console.error('Failed to initialize Google Analytics:', err);
  }
}

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
