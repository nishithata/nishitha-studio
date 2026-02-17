/**
 * Analytics Utility - Centralized tracking for GA4 and Clarity
 *
 * This file provides a unified interface for tracking events across
 * Google Analytics 4 and Microsoft Clarity.
 */

// Type definitions for better TypeScript support
interface EventParams {
  [key: string]: string | number | boolean;
}

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    clarity?: (...args: any[]) => void;
  }
}

/**
 * Track custom events in Google Analytics
 */
export const trackEvent = (
  eventName: string,
  params?: EventParams
): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
    if (import.meta.env.DEV) {
      console.log('GA Event:', eventName, params);
    }
  }
};

/**
 * Track page views (useful for SPA navigation)
 */
export const trackPageView = (path: string, title?: string): void => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title || document.title,
    });
    if (import.meta.env.DEV) {
      console.log('GA Page View:', path, title);
    }
  }
};

/**
 * Track Clarity custom events (tags)
 */
export const trackClarityTag = (tag: string, value?: string): void => {
  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', tag, value || 'true');
    if (import.meta.env.DEV) {
      console.log('Clarity Tag:', tag, value);
    }
  }
};

/**
 * Track user interactions
 */
export const trackUserAction = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  trackEvent(action, {
    event_category: category,
    event_label: label || '',
    value: value || 0,
  });
};

/**
 * Track errors
 */
export const trackError = (
  errorName: string,
  errorMessage: string,
  errorStack?: string
): void => {
  trackEvent('error', {
    error_name: errorName,
    error_message: errorMessage,
    error_stack: errorStack || '',
  });
};

/**
 * Track timing/performance
 */
export const trackTiming = (
  category: string,
  variable: string,
  value: number,
  label?: string
): void => {
  trackEvent('timing_complete', {
    name: variable,
    value: value,
    event_category: category,
    event_label: label || '',
  });
};

// Pre-defined event trackers for common actions
export const Analytics = {
  // Photo upload events
  photoUploaded: (fileSize: number, fileType: string) => {
    trackEvent('photo_uploaded', {
      file_size: fileSize,
      file_type: fileType,
    });
    trackClarityTag('photo_uploaded');
  },

  // Photo editing events
  photoEdited: (action: string, value?: number) => {
    trackEvent('photo_edited', {
      edit_action: action,
      edit_value: value || 0,
    });
  },

  // Navigation events
  stepChanged: (fromStep: number, toStep: number) => {
    trackEvent('step_navigation', {
      from_step: fromStep,
      to_step: toStep,
    });
    trackPageView(`/step-${toStep}`, `Step ${toStep}`);
  },

  // Export events
  photoExported: (format: string, size: string, quality: number) => {
    trackEvent('photo_exported', {
      export_format: format,
      paper_size: size,
      quality: quality,
    });
    trackClarityTag('successful_export');
  },

  // Feature usage
  featureUsed: (featureName: string) => {
    trackEvent('feature_used', {
      feature_name: featureName,
    });
  },

  // User preferences
  settingChanged: (settingName: string, value: string) => {
    trackEvent('setting_changed', {
      setting_name: settingName,
      setting_value: value,
    });
  },

  // Engagement
  helpViewed: () => {
    trackEvent('help_viewed');
  },

  supportClicked: (source: string) => {
    trackEvent('support_clicked', {
      click_source: source,
    });
  },

  // Error tracking
  errorOccurred: (errorType: string, errorMessage: string) => {
    trackError(errorType, errorMessage);
  },

  // Performance tracking
  imageProcessingTime: (timeMs: number) => {
    trackTiming('performance', 'image_processing', timeMs);
  },
};

export default Analytics;
