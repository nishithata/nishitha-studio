/**
 * Web Vitals Performance Monitoring
 * Tracks Core Web Vitals and reports them to analytics
 *
 * Core Web Vitals tracked:
 * - LCP (Largest Contentful Paint): Loading performance
 * - FID (First Input Delay): Interactivity
 * - CLS (Cumulative Layout Shift): Visual stability
 * - FCP (First Contentful Paint): Initial render
 * - TTFB (Time to First Byte): Server response time
 * - INP (Interaction to Next Paint): New responsiveness metric
 */

import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from 'web-vitals';
import logger from './logger';

// Analytics integration
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Report metric to Google Analytics
 */
const reportToAnalytics = (metric: Metric): void => {
  // Only report in production
  if (!import.meta.env.PROD) {
    logger.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
    return;
  }

  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Log in development
  if (import.meta.env.DEV) {
    logger.log(`[Web Vitals] ${metric.name}:`, metric.value, metric);
  }
};

/**
 * Report metric with rating
 */
const reportWithRating = (metric: Metric): void => {
  const rating = getRating(metric);

  logger.log(
    `[Web Vitals] ${metric.name}: ${metric.value.toFixed(2)} (${rating})`,
    metric
  );

  reportToAnalytics(metric);
};

/**
 * Get performance rating based on metric thresholds
 */
const getRating = (metric: Metric): 'good' | 'needs-improvement' | 'poor' => {
  const { name, value } = metric;

  // Thresholds from web.dev
  const thresholds = {
    LCP: { good: 2500, poor: 4000 }, // ms
    CLS: { good: 0.1, poor: 0.25 }, // score
    FCP: { good: 1800, poor: 3000 }, // ms
    TTFB: { good: 800, poor: 1800 }, // ms
    INP: { good: 200, poor: 500 }, // ms
  };

  const threshold = thresholds[name as keyof typeof thresholds];
  if (!threshold) {
    return 'needs-improvement';
  }

  if (value <= threshold.good) {
    return 'good';
  }
  if (value <= threshold.poor) {
    return 'needs-improvement';
  }
  return 'poor';
};

/**
 * Initialize Web Vitals tracking
 */
export const initWebVitals = (): void => {
  try {
    // Core Web Vitals (affects Google Search ranking)
    onCLS(reportWithRating); // Cumulative Layout Shift
    onINP(reportWithRating); // Interaction to Next Paint (replaced FID)
    onLCP(reportWithRating); // Largest Contentful Paint

    // Other important metrics
    onFCP(reportWithRating); // First Contentful Paint
    onTTFB(reportWithRating); // Time to First Byte

    logger.log('✅ Web Vitals tracking initialized');
  } catch (error) {
    logger.error('Failed to initialize Web Vitals:', error);
  }
};

/**
 * Get all current vitals (for debugging)
 */
export const getCurrentVitals = async (): Promise<Record<string, number>> => {
  const vitals: Record<string, number> = {};

  return new Promise((resolve) => {
    // Collect metrics
    let collected = 0;
    const totalMetrics = 5; // Updated from 6 (removed FID)

    const checkComplete = () => {
      collected++;
      if (collected === totalMetrics) {
        resolve(vitals);
      }
    };

    onCLS((metric: Metric) => {
      vitals.CLS = metric.value;
      checkComplete();
    });
    onINP((metric: Metric) => {
      vitals.INP = metric.value;
      checkComplete();
    });
    onLCP((metric: Metric) => {
      vitals.LCP = metric.value;
      checkComplete();
    });
    onFCP((metric: Metric) => {
      vitals.FCP = metric.value;
      checkComplete();
    });
    onTTFB((metric: Metric) => {
      vitals.TTFB = metric.value;
      checkComplete();
    });

    // Timeout after 5 seconds
    setTimeout(() => resolve(vitals), 5000);
  });
};

/**
 * Log all vitals to console (for debugging)
 */
export const logWebVitals = async (): Promise<void> => {
  const vitals = await getCurrentVitals();

  console.group('📊 Web Vitals Report');
  console.table(vitals);
  console.groupEnd();
};

// Export for use in window (debugging)
if (typeof window !== 'undefined' && import.meta.env.DEV) {
  (window as any).logWebVitals = logWebVitals;
  (window as any).getCurrentVitals = getCurrentVitals;
}

export default {
  init: initWebVitals,
  getCurrentVitals,
  logWebVitals,
};
